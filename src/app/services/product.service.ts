import { AuthServiceService } from './../authenticate/service/auth-service.service';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { ResponseType } from './../../interfaces/response';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient, private authService: AuthServiceService,
    private platform: Platform
  ) {

  }

  GetProducts(sid): Observable<ResponseType> {
    const url = environment.url + 'MProductServlet';
    const type = 'GetProducts';
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
  GetProductDetails(productid): Observable<ResponseType> {
    const url = environment.url + 'MProductServlet';
    const type = 'GetProductDetails';
    if (this.platform.is('android')) {
      const data = {
        type, productid
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, productid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetProductsByName(sid, searchvalue): Observable<ResponseType> {
    const url = environment.url + 'MProductServlet';
    const type = 'GetProductsByName';
    if (this.platform.is('android')) {
      const data = {
        type, sid, searchvalue
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid, searchvalue });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }



}
