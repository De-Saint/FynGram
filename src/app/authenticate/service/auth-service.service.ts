import { ResponseType } from './../../../interfaces/response';
import { User } from './../../../interfaces/User';
import { environment } from './../../../environments/environment';
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { from, BehaviorSubject, Observable } from "rxjs";
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private currentUserDataSubject: BehaviorSubject<User>;
  public currentUserData: Observable<User>;


  constructor(private nativeHttp: HTTP,
    private platform: Platform,
    public http: HttpClient, ) {
    this.currentUserDataSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('userData')));
    this.currentUserData = this.currentUserDataSubject.asObservable();

  }


  public get currentUserDataValue(): User {
    return this.currentUserDataSubject.value;
  }



  login(emailphone, password) {
    const url = environment.url + "MUserServlet";
    const type = "Login";
    // if (this.platform.is("android")) {
    //   const data = {
    //     emailphone: emailphone,
    //     password: password,
    //     type: type
    //   };
    //   this.nativeHttp.setDataSerializer("json");
    //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
    //   return from(nativeCall).pipe(
    //     map(result => {
    // if(result.code === 200){
    //       sessionStorage.setItem('userData', JSON.stringify(result.data));
    //       this.currentUserDataSubject.next(result.data.data);
    // }
    //       return JSON.parse(result.data);
    //     })
    //   )
    // } else {
    const data = JSON.stringify({ emailphone, password, type });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        if (res.code === 200) {
          sessionStorage.setItem('userData', JSON.stringify(res.data));
          this.currentUserDataSubject.next(res.data);
        }
        return res;
      })
    );
    // }
  }

  logout(): Promise<any> {
    return Storage.remove({ key: 'hasSeenLogin' }).then(() => {
      window.dispatchEvent(new CustomEvent('user:logout'));
      this.currentUserDataSubject.next(null);
      sessionStorage.removeItem('userData');
    });
  }
}
