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
export class TransactionService {

  constructor(
    private http: HttpClient, private authService: AuthServiceService,
    private platform: Platform
  ) {

  }


  GetRecentTransactions(sid): Observable<ResponseType> {
    const url = environment.url + 'MTransactionServlet';
    const type = 'GetRecentTransactions';
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
  DeleteTransaction(transactionid): Observable<ResponseType> {
    const url = environment.url + 'MTransactionServlet';
    const type = 'DeleteTransaction';
    if (this.platform.is('android')) {
      const data = {
        type, transactionid
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, transactionid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
}
