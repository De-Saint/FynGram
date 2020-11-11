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
export class OrderService {
  constructor(
    private http: HttpClient, private authService: AuthServiceService,
    private platform: Platform
  ) {

  }

  GetOrders(sid): Observable<ResponseType> {
    const url = environment.url + 'MOrderServlet';
    const type = 'GetOrders';
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

  ReviewProduct(sid, productid, ratevalue, comment): Observable<ResponseType> {
    const url = environment.url + 'MOrderServlet';
    const type = 'ReviewProduct';
    if (this.platform.is('android')) {
      const data = {
        type, sid, productid, ratevalue, comment
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid, productid, ratevalue, comment });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  UpdateOrderStatus(sid, orderid, statusid): Observable<ResponseType> {
    const url = environment.url + 'MOrderServlet';
    const type = 'UpdateOrderStatus';
    if (this.platform.is('android')) {
      const data = {
        type, sid, orderid, statusid
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid, orderid, statusid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetProductDetails(orderid): Observable<ResponseType> {
    const url = environment.url + 'MOrderServlet';
    const type = 'GetOrderDetails';
    if (this.platform.is('android')) {
      const data = {
        type, orderid
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, orderid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }

}
