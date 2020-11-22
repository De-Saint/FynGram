import { ResponseType } from './../../../interfaces/response';
import { User } from './../../../interfaces/User';
import { environment } from './../../../environments/environment';
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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




  login(emailphone, password, oldsid?): Observable<ResponseType> {
    const url = environment.url + 'MUserServlet';
    const type = 'Login';
    if (this.platform.is('android')) {
      const data = {
        emailphone,
        password,
        oldsid,
        type
      };
      this.nativeHttp.setHeader('*', String('Content-Type'), String('application/json'));
      this.nativeHttp.setHeader('*', String('Accept'), String('application/json'));
      this.nativeHttp.setHeader('*', String('Access-Control-Allow-Origin'), String('*'));
      this.nativeHttp.setDataSerializer('json');
      this.nativeHttp.setServerTrustMode('nocheck');
      const nativeCall = this.nativeHttp.post(url, data, {});
      return from(nativeCall).pipe(map(result => {
        const res = JSON.parse(result.data);
        sessionStorage.setItem('userData', JSON.stringify(res.data));
        this.currentUserDataSubject.next(res.data);
        return JSON.parse(result.data);
      }));

    } else {
      const data = JSON.stringify({ emailphone, password, oldsid, type });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          if (res.code === 200) {
            sessionStorage.setItem('userData', JSON.stringify(res.data));
            this.currentUserDataSubject.next(res.data);
          }
          return res;
        })
      );
    }
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


  getIPAddress() {
    return this.http.get("https://ipapi.co/json/");
    // const url = 'https://ip.seeip.org/geoip';
  }

  setHttpRequest(link, data) {
    try {
      const url = link;
      alert(url);
      // this.nativeHttp.setHeader('*', String('Content-Type'), String('application/json'));
      // this.nativeHttp.setHeader('*', String('Accept'), String('application/json'));
      // this.nativeHttp.setHeader('*', String('Access-Control-Allow-Origin'), String('*'));
      // this.nativeHttp.setDataSerializer('json');
      // this.nativeHttp.setServerTrustMode('nocheck');
      const nativeCall = this.nativeHttp.get(url, data, {});
      alert(JSON.stringify(nativeCall))
      return from(nativeCall).pipe(map(result => {
        const res = JSON.parse(result.data);
        alert('res ' + JSON.stringify(res));
        return JSON.parse(result.data);
      }));
    } catch (error) {
      alert('error ' + error);
      alert('error.status ' + error.status);
    }
  }

  nativeHttpRequest(url, data) {
    try {
      this.nativeHttp.setHeader('*', String('Content-Type'), String('application/json'));
      this.nativeHttp.setHeader('*', String('Accept'), String('application/json'));
      this.nativeHttp.setHeader('*', String('Access-Control-Allow-Origin'), String('*'));
      this.nativeHttp.setDataSerializer('json');
      this.nativeHttp.setServerTrustMode('nocheck');
      const nativeCall = this.nativeHttp.post(url, data, {});
      return from(nativeCall).pipe(map(result => {
        return JSON.parse(result.data);
      }));
    } catch (error) {
      alert(error);
    }
  }

  SaveGuest(ipaddress, location) {
    const type = 'SaveGuest';
    const url = environment.url + 'MUserServlet';
    const data = {
      ipaddress,
      location,
      type
    };
    if (this.platform.is('android')) {
      this.nativeHttp.setHeader('*', String('Content-Type'), String('application/json'));
      this.nativeHttp.setHeader('*', String('Accept'), String('application/json'));
      this.nativeHttp.setHeader('*', String('Access-Control-Allow-Origin'), String('*'));
      this.nativeHttp.setDataSerializer('json');
      this.nativeHttp.setServerTrustMode('nocheck');
      const nativeCall = this.nativeHttp.post(url, data, {});
      return from(nativeCall).pipe(map(result => {
        const res = JSON.parse(result.data);
        sessionStorage.setItem('userData', JSON.stringify(res.data));
        this.currentUserDataSubject.next(res.data);
        return JSON.parse(result.data);
      }));
    } else {
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          sessionStorage.setItem('userData', JSON.stringify(res.data));
          this.currentUserDataSubject.next(res.data);
          return res;
        })
      );
    }
  }

  ResetPassword(email): Observable<ResponseType> {
    const type = 'ResetPassword';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        email,
        type
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ email, type });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  PasswordRecovery(code, password): Observable<ResponseType> {
    const type = 'PasswordRecovery';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        code,
        password
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ code, password, type });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }

  RegisterCustomer(firstname, lastname, title, gender, email, password, phone): Observable<ResponseType> {
    const type = 'RegisterCustomer';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = { firstname, lastname, title, gender, email, password, phone, type };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ firstname, lastname, title, gender, email, password, phone, type });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  ValidateAccount(code): Observable<ResponseType> {
    const type = 'ValidateAccount';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        code, type
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ code, type });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetBanks(): Observable<ResponseType> {
    const type = 'GetBanks';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  CreateBankDetails(sid, bankid, accounttype, accountnumber): Observable<ResponseType> {
    const type = 'CreateBankDetails';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, sid, bankid, accounttype, accountnumber
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid, bankid, accounttype, accountnumber });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetBankDetails(sid): Observable<ResponseType> {
    const type = 'GetBankDetails';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, sid
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  DeleteBankDetails(bankdetid): Observable<ResponseType> {
    const type = 'DeleteBankDetails';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, bankdetid
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, bankdetid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetWalletDetails(sid): Observable<ResponseType> {
    const type = 'GetWalletDetails';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, sid
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  RequestCashOut(sid, amount, pin): Observable<ResponseType> {
    const url = environment.url + 'MUserServlet';
    const type = 'NewCashoutRequest';
    if (this.platform.is('android')) {
      const data = {
        type, sid, amount, pin
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid, amount, pin });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }

  GetCashoutRequests(sid): Observable<ResponseType> {
    const type = 'GetCashoutRequests';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, sid
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  ProcessCashOut(option, cashoutid): Observable<ResponseType> {
    const type = 'ProcessCashOut';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, option, cashoutid
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, option, cashoutid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetCustomerDiscountCodes(sid): Observable<ResponseType> {
    const type = 'GetCustomerDiscountCodes';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, sid
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetDiscountCodes(): Observable<ResponseType> {
    const type = 'GetDiscountCodes';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  ProcessDiscount(discountid, option): Observable<ResponseType> {
    const type = 'ProcessDiscount';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, discountid, option
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, discountid, option });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetUserDetails(sid): Observable<ResponseType> {
    const type = 'GetUserDetails';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, sid
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }

  UpdateProfile(sid, firstname, lastname, opassword, npassword, phone): Observable<ResponseType> {
    const type = 'UpdateProfile';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        sid, firstname, lastname, opassword, npassword, phone, type
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ sid, firstname, lastname, opassword, npassword, phone, type });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetShippings(): Observable<ResponseType> {
    const type = 'GetShippings';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetShippingDetails(shippingid): Observable<ResponseType> {
    const type = 'GetShippingDetails';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, shippingid
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, shippingid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  DeleteShipping(shippingid): Observable<ResponseType> {
    const type = 'DeleteShipping';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, shippingid
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, shippingid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  DeleteCustomer(userid): Observable<ResponseType> {
    const type = 'DeleteCustomer';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, userid
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, userid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  ResetShipping(shippingid): Observable<ResponseType> {
    const type = 'ResetShipping';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, shippingid
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, shippingid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  NewShippingAddress(shippingid, name, interval, adminpercent, shippingpercent, option, phone, email): Observable<ResponseType> {
    const type = 'NewShippingAddress';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, shippingid, name, interval, adminpercent, shippingpercent, option, phone, email
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, shippingid, name, interval, adminpercent, shippingpercent, option, phone, email });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }

  GetCustomers(): Observable<ResponseType> {
    const type = 'GetAllCustomers';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  SearchCustomers(searchvalue): Observable<ResponseType> {
    const type = 'SearchCustomers';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, searchvalue
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, searchvalue });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  SearchSellers(searchvalue): Observable<ResponseType> {
    const type = 'SearchSellers';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, searchvalue
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, searchvalue });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetSellers(): Observable<ResponseType> {
    const type = 'GetAllSellers';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }

  GetStatDetails(sid): Observable<ResponseType> {
    const type = 'GetStats';
    const url = environment.url + 'MUserServlet';
    if (this.platform.is('android')) {
      const data = {
        type, sid
      };
      return this.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
}
