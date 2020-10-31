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



  login(emailphone, password, oldsid) {
    const url = environment.url + "MUserServlet";
    const type = "Login";
    // if (this.platform.is("android")) {
    // const data = {
    //   emailphone,
    //   password,
    //   type
    // };
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
    const data = JSON.stringify({ emailphone, password, oldsid, type });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        if (res.code === 200) {
          // this.logout() 
          sessionStorage.setItem('userData', JSON.stringify(res.data));
          this.currentUserDataSubject.next(res.data);
        }
        return res;
      })
    );
    // }
  }

  logout(): Promise<any> {
    return Storage.remove({ key: 'hasLoggedIn' }).then(() => {
      Storage.remove({ key: 'hasVisited' });
      window.dispatchEvent(new CustomEvent('user:logout'));
      this.currentUserDataSubject.next(null);
      sessionStorage.removeItem('userData');
    });
  }


  public getIPAddress() {
    // if (this.platform.is("android")) {
    //return this.nativeHttp.get("https://ip.seeip.org/geoip"});
    // } else {
    return this.http.get("https://ip.seeip.org/geoip");
    // }
  }


  SaveGuest(ipaddress, location) {
    const type = 'SaveGuest';
    const url = environment.url + 'MUserServlet';
    // if (this.platform.is("android")) {
    // const data = {
    //   ipaddress,
    //   location,
    //   type
    // };
    //   this.nativeHttp.setDataSerializer("json");
    //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
    //   return from(nativeCall).pipe(
    //     map(result => {
    // if(result.code === 200){
    //       sessionStorage.setItem('userData', JSON.stringify(result.data));
    //       this.currentUserDataSubject.next(result.data.data);
    //       return JSON.parse(result.data);
    //     })
    //   )
    // } else {
    const data = JSON.stringify({ ipaddress, location, type });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        sessionStorage.setItem('userData', JSON.stringify(res.data));
        this.currentUserDataSubject.next(res.data);
        return res;
      })
    );
    // }
  }

  ResetPassword(email) {
    const type = 'ResetPassword';
    const url = environment.url + 'MUserServlet';
    // if (this.platform.is("android")) {
    // const data = {
    //   email,
    //   type
    // };
    //   this.nativeHttp.setDataSerializer("json");
    //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
    //   return from(nativeCall).pipe(
    //     map(result => {
    // if(result.code === 200){
    //       return JSON.parse(result.data);
    //     })
    //   )
    // } else {
    const data = JSON.stringify({ email, type });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  PasswordRecovery(code, password) {
    const type = 'PasswordRecovery';
    const url = environment.url + 'MUserServlet';
    // if (this.platform.is("android")) {
    // const data = {
    //   code,
    //   password
    // };
    //   this.nativeHttp.setDataSerializer("json");
    //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
    //   return from(nativeCall).pipe(
    //     map(result => {
    //       return JSON.parse(result.data);
    //     })
    //   )
    // } else {
    const data = JSON.stringify({ code, password, type });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }

  RegisterCustomer(firstname, lastname, title, gender, email, password, phone) {
    const type = 'RegisterCustomer';
    const url = environment.url + 'MUserServlet';
    // const data = {
    // firstname,
    // lastname,
    // title,
    // gender,
    // email,
    //  password, 
    //  phone,
    //   type
    // };
    //   this.nativeHttp.setDataSerializer("json");
    //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
    //   return from(nativeCall).pipe(
    //     map(result => {
    // if(result.code === 200){
    //       sessionStorage.setItem('userData', JSON.stringify(result.data));
    //       this.currentUserDataSubject.next(result.data.data);
    //       return JSON.parse(result.data);
    //     })
    //   )
    // } else {
    const data = JSON.stringify({ firstname, lastname, title, gender, email, password, phone, type });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  ValidateAccount(code) {
    const type = 'ValidateAccount';
    const url = environment.url + 'MUserServlet';
    // const data = {
    // code, oldsid,  type
    // };
    //   this.nativeHttp.setDataSerializer("json");
    //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
    //   return from(nativeCall).pipe(
    //     map(result => {
    // if(result.code === 200){
    //       sessionStorage.setItem('userData', JSON.stringify(result.data));
    //       this.currentUserDataSubject.next(result.data.data);
    //       return JSON.parse(result.data);
    //     })
    //   )
    // } else {
    const data = JSON.stringify({ code, type });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }

  getAllCategories() {
    const type = 'GetRootCategories';
    const url = environment.url + 'MProductServlet';
    const data = JSON.stringify({ type });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // if (this.platform.is("android")) {
    // const data = {
    //   email,
    //   type
    // };
    //   this.nativeHttp.setDataSerializer("json");
    //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
    //   return from(nativeCall).pipe(
    //     map(result => {
    // if(result.code === 200){
    //       return JSON.parse(result.data);
    //     })
    //   )
    // } else {
    // const data = JSON.stringify({type });
    // return this.http.post<ResponseType>(url, data).pipe(
    //   map(res => {
    //     return res;
    //   })
    // );
    // }
  }
}
