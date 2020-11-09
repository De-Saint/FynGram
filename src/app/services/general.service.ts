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
export class GeneralService {
 
  constructor(
    private http: HttpClient, private nativeHttp: HTTP,
     private platform: Platform
  ) {

  }

  GetMessages(): Observable<ResponseType> {
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


  AddOption2(option, productid, price, quantity, action): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'AddOption';
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
    const data = JSON.stringify({ type, option, productid, price, quantity, action });
    return this.http.post<ResponseType>(url, data).pipe(
      map(res => {
        return res;
      })
    );
    // }
  }
  
}
