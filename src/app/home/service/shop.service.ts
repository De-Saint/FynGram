import { Platform } from '@ionic/angular';
import { from } from 'rxjs';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { environment } from './../../../environments/environment';
import { ResponseType } from './../../../interfaces/response';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  
  constructor(
    private http: HttpClient, private nativeHttp: HTTP,
    private authService: AuthServiceService, private platform: Platform
  ) {

  }

  GetCategories(): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetRootCategories';
    // if (this.platform.is("android")) {
    // const data = {
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
    const data = JSON.stringify({ type });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  GetTopSellingProducts(): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetTopSellingProducts';
    // if (this.platform.is('android')) {
    //   const data = {
    //     type
    //   };
    //   this.nativeHttp.setDataSerializer("json");
    //   let nativeCall = this.nativeHttp.get(url, data, { "Content-Type": "application/json" });
    //   return from(nativeCall).pipe(
    //     map(result => {
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
    //}
  }
  GetRecentlyAddedProducts(): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetRecentlyAddedProducts';
    // if (this.platform.is("android")) {
    // const data = {
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
    const data = JSON.stringify({ type });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  GetFeaturedProducts(): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetFeaturedProducts';
    // if (this.platform.is("android")) {
    // const data = {
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
    const data = JSON.stringify({ type });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  GetBestSellersProducts(): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetBestSellersProducts';
    // if (this.platform.is("android")) {
    // const data = {
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
    const data = JSON.stringify({ type });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  GetCategoryProducts(catid): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetShopProductsByCategoryID';
    // if (this.platform.is("android")) {
    // const data = {
    //   type,
    // catid
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
    const data = JSON.stringify({ type, catid });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  GetRelatedProducts(productid): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetRelatedProducts';
    // if (this.platform.is("android")) {
    // const data = {
    //   type,
    // productid
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
    const data = JSON.stringify({ type, productid });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }



  AddOption(option, productid, price, quantity, action): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'AddOption';
    const sid = this.authService.currentUserDataValue.sid;
    // if (this.platform.is("android")) {
    // const data = {
    //   type,
    // productid
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
    const data = JSON.stringify({ type, sid, option, productid, price, quantity, action });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  CartDiscountCode(code): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'CartDiscountCode';
    const sid = this.authService.currentUserDataValue.sid;
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
    const data = JSON.stringify({ type, sid, code });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  GetCartDefaultAddress(sid): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetCartDefaultAddress';
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
    const data = JSON.stringify({ type, sid });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  processOrder(sid, paytype, shiptypeid, addressid): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'PlaceOrder';
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
    const data = JSON.stringify({ type, sid, paytype, shiptypeid, addressid });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  getParameter(): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetPaystackKey';
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
    const data = JSON.stringify({ type });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }

  UpdateOption(option, productid, price, quantity, action): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'UpdateOptions';
    const sid = this.authService.currentUserDataValue.sid;
    // if (this.platform.is("android")) {
    // const data = {
    //   type,
    // productid
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
    const data = JSON.stringify({ type, sid, option, productid, price, quantity, action });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  DeleteOption(option, optionid, productid): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'DeleteOptions';
    // if (this.platform.is("android")) {
    // const data = {
    //   type,
    // optionid, productid
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
    const data = JSON.stringify({ type, option, optionid, productid });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }

  GetUserCart(sid): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetShopCart';
    // if (this.platform.is("android")) {
    // const data = {
    //   type,
    // sid
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
    const data = JSON.stringify({ type, sid });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }

  placeOrder(sid, paytype, shiptypeid, addressid, amount, refcode, tcode): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'ValidatePaystackPayment';
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
    const data = JSON.stringify({ type, sid, paytype, shiptypeid, addressid, amount, refcode, tcode });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  fundWallet(sid, paytype, amount, refcode, tcode): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'ValidatePaystackPayment';
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
    const data = JSON.stringify({ type, sid, paytype, amount, refcode, tcode });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }

}
