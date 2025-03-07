import { AuthServiceService } from './../authenticate/service/auth-service.service';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { ResponseType } from './../../interfaces/response';
import { Platform } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(
    private http: HttpClient, private authService: AuthServiceService,
    private platform: Platform
  ) {

  }

  GetUserAddress(sid): Observable<ResponseType> {
    const url = environment.url + 'MAddressServlet';
    const type = 'GetUserAddresses';
    if (this.platform.is('android')) {
      const data = {
        type, sid
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }

  GetAddressTypes(): Observable<ResponseType> {
    const url = environment.url + 'MAddressServlet';
    const type = 'GetAddressTypes';
    if (this.platform.is('android')) {
      const data = {
        type
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetStates(): Observable<ResponseType> {
    const url = environment.url + 'MAddressServlet';
    const type = 'GetStates';
    if (this.platform.is('android')) {
      const data = {
        type
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetLga(stateid): Observable<ResponseType> {
    const url = environment.url + 'MAddressServlet';
    const type = 'GetLGAs';
    if (this.platform.is('android')) {
      const data = {
        type, stateid
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, stateid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetTowns(lgaid): Observable<ResponseType> {
    const url = environment.url + 'MAddressServlet';
    const type = 'GetTowns';
    if (this.platform.is('android')) {
      const data = {
        type, lgaid
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, lgaid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetBusStops(townid): Observable<ResponseType> {
    const url = environment.url + 'MAddressServlet';
    const type = 'GetBusStops';
    if (this.platform.is('android')) {
      const data = {
        type, townid
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, townid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetStreets(busstopid): Observable<ResponseType> {
    const url = environment.url + 'MAddressServlet';
    const type = 'GetStreets';
    if (this.platform.is('android')) {
      const data = {
        type, busstopid
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, busstopid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  DeleteUserAddresses(addressid): Observable<ResponseType> {
    const url = environment.url + 'MAddressServlet';
    const type = 'DeleteUserAddresses';
    if (this.platform.is('android')) {
      const data = {
        type, addressid
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, addressid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  MakeUserAddressDefault(sid, addressid): Observable<ResponseType> {
    const url = environment.url + 'MAddressServlet';
    const type = 'MakeUserAddressDefault';
    if (this.platform.is('android')) {
      const data = {
        type, sid, addressid
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid, addressid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  AddNewAddress(sid, addresstype, state, lga, town, busstop, street, closeto, housenumber, phone, postal, defaultadd): Observable<ResponseType> {
    const url = environment.url + 'MAddressServlet';
    const type = 'AddNewAddress';
    if (this.platform.is('android')) {
      const data = {
        type, sid, addresstype, state, lga, town, busstop, street, closeto, housenumber, phone, postal, defaultadd
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid, addresstype, state, lga, town, busstop, street, closeto, housenumber, phone, postal, defaultadd });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
}
