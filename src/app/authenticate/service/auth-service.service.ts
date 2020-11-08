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

  HAS_VISITED = 'hasVisited';
  constructor(private nativeHttp: HTTP,
    private platform: Platform,
    public http: HttpClient, ) {
    this.currentUserDataSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('userData')));
    this.currentUserData = this.currentUserDataSubject.asObservable();

  }


  public get currentUserDataValue(): User {
    return this.currentUserDataSubject.value;
  }



  login(emailphone, password, oldsid?) {
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

      this.getIPAddress().subscribe((res: any) => {
        this.SaveGuest(res.ip, res.city + ' ' + res.country_name).subscribe(res => {
          Storage.set({ key: this.HAS_VISITED, value: 'true' });
          const event = new CustomEvent('user:guest');
          return window.dispatchEvent(event);
        })
      }, error => {
      });
    });
  }


  public getIPAddress() {
    // if (this.platform.is("android")) {
    //return this.nativeHttp.get("https://ip.seeip.org/geoip"});
    // } else {
    return this.http.get("https://ipapi.co/json/");
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
  GetBanks() {
    const type = 'GetBanks';
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
    const data = JSON.stringify({ type });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  CreateBankDetails(sid, bankid, accounttype, accountnumber) {
    const type = 'CreateBankDetails';
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
    const data = JSON.stringify({ type, sid, bankid, accounttype, accountnumber });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  GetBankDetails(sid) {
    const type = 'GetBankDetails';
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
    const data = JSON.stringify({ type, sid });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  DeleteBankDetails(bankdetid) {
    const type = 'DeleteBankDetails';
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
    const data = JSON.stringify({ type, bankdetid });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  GetWalletDetails(sid) {
    const type = 'GetWalletDetails';
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
    const data = JSON.stringify({ type, sid });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  RequestCashOut(sid, amount, pin): Observable<ResponseType> {
    const url = environment.url + 'MUserServlet';
    const type = 'NewCashoutRequest';
    // if (this.platform.is("android")) {
    // const data = {
    //   type,
    // code
    //sid
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
    const data = JSON.stringify({ type, sid, amount, pin });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }

  GetCashoutRequests(sid) {
    const type = 'GetCashoutRequests';
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
    const data = JSON.stringify({ type, sid });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  ProcessCashOut(option, cashoutid) {
    const type = 'ProcessCashOut';
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
    const data = JSON.stringify({ type, option, cashoutid });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  GetCustomerDiscountCodes(sid) {
    const type = 'GetCustomerDiscountCodes';
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
    const data = JSON.stringify({ type, sid });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  GetDiscountCodes() {
    const type = 'GetDiscountCodes';
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
    const data = JSON.stringify({ type });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  ProcessDiscount(discountid, option) {
    const type = 'ProcessDiscount';
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
    const data = JSON.stringify({ type, discountid, option });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  GetUserDetails(sid) {
    const type = 'GetUserDetails';
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
    const data = JSON.stringify({ type, sid });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }

  UpdateProfile(sid, firstname, lastname, opassword, npassword, phone) {
    const type = 'UpdateProfile';
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
    const data = JSON.stringify({ sid, firstname, lastname, opassword, npassword, phone, type });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
}
