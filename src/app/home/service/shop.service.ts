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
    private http: HttpClient,
    private authService: AuthServiceService, private platform: Platform
  ) {

  }

  GetCategories(): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetRootCategories';
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
  
  GetTopSellingProducts(): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetTopSellingProducts';
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
  GetRecentlyAddedProducts(): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetRecentlyAddedProducts';
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
  GetFeaturedProducts(): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetFeaturedProducts';
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

  GetAppVersion(): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetAppVersion';
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


  GetBestSellersProducts(): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetBestSellersProducts';
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
  GetCategoryProducts(catid): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetShopProductsByCategoryID';
    if (this.platform.is('android')) {
      const data = {
        type, catid
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, catid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetRelatedProducts(productid): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetRelatedProducts';
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
  
  GetProductDetails(productid): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
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



  AddOption(option, productid, price, quantity, action): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'AddOption';
    const sid = this.authService.currentUserDataValue.sid;
    if (this.platform.is('android')) {
      const data = {
        type, sid, option, productid, price, quantity, action
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid, option, productid, price, quantity, action });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  CartDiscountCode(code): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'CartDiscountCode';
    const sid = this.authService.currentUserDataValue.sid;
    if (this.platform.is('android')) {
      const data = {
        type, sid, code
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid, code });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetCartDefaultAddress(sid): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetCartDefaultAddress';
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
  processOrder(sid, paytype, shiptypeid, addressid): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'PlaceOrder';
    if (this.platform.is('android')) {
      const data = {
        type, sid, paytype, shiptypeid, addressid
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid, paytype, shiptypeid, addressid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  getParameter(): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetPaystackKey';
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

  UpdateOption(option, productid, price, quantity, action): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'UpdateOptions';
    const sid = this.authService.currentUserDataValue.sid;
    if (this.platform.is('android')) {
      const data = {
        type, sid, option, productid, price, quantity, action
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid, option, productid, price, quantity, action });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  DeleteOption(option, optionid, productid): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'DeleteOptions';
    if (this.platform.is('android')) {
      const data = {
        type, option, optionid, productid
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, option, optionid, productid });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }

  GetUserCart(sid): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetShopCart';
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
  GetShopSavedItems(sid): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetShopSavedItems';
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

  placeOrder(sid, paytype, shiptypeid, addressid, amount, refcode, tcode): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'ValidatePaystackPayment';
    if (this.platform.is('android')) {
      const data = {
        type, sid, paytype, shiptypeid, addressid, amount, refcode, tcode
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid, paytype, shiptypeid, addressid, amount, refcode, tcode });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  fundWallet(sid, paytype, amount, refcode, tcode): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'ValidatePaystackPayment';
    if (this.platform.is('android')) {
      const data = {
        type, sid, paytype, amount, refcode, tcode
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, sid, paytype, amount, refcode, tcode });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }
  GetStockMovement(sid): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'GetStockMovement';
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
  SearchProducts(searchvalue): Observable<ResponseType> {
    const url = environment.url + 'MShopServlet';
    const type = 'SearchProducts';
    if (this.platform.is('android')) {
      const data = {
        type, searchvalue
      };
      return this.authService.nativeHttpRequest(url, data);
    } else {
      const data = JSON.stringify({ type, searchvalue });
      return this.http.post<ResponseType>(url, data).pipe(
        map(res => {
          return res;
        })
      );
    }
  }

  GetProperties(): Observable<ResponseType> {
    const url = environment.url + 'MProductServlet';
    const type = 'GetProperties';
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
  GetUnits(): Observable<ResponseType> {
    const url = environment.url + 'MProductServlet';
    const type = 'GetUnits';
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
}
