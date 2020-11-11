import { ProductService } from './../../services/product.service';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from './../../authenticate/service/auth-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  show = true;
  products: any;
  sid: any;
  searchTerm: string;
  originalproducts:any;
  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private productService: ProductService,
    private authService: AuthServiceService,
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.sid = this.authService.currentUserDataValue.sid;
    this.GetProducts(this.sid);
  }

  open(product) {
    this.router.navigate(['/', 'sellersinventory', 'tabs', 'products', 'details', product.ProductID]);
  }

  async GetProducts(sid) {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios'
    });
    await loading.present();
    this.productService.GetProducts(sid)
      .subscribe(res => {
        loading.dismiss().catch(() => { });
        if (res.code === 200) {
          this.products = res.data;
          this.originalproducts = this.products;
          this.show = true;
        } else {
          this.show = false;
        }
      }, error => {
        loading.dismiss().catch(() => { });
      })
  }

  async onSearch() {
    const searchvalue = this.searchTerm;
    if (searchvalue.trim() === '') {
      this.products = this.originalproducts;
    } else {
      if (String(searchvalue).length >= 3) {
        if (searchvalue !== undefined) {
          const loading = await this.loadingCtrl.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            mode: 'ios'
          });
          await loading.present();
          this.sid = this.authService.currentUserDataValue.sid;
          this.productService.GetProductsByName(String(this.sid), searchvalue).subscribe(res => {
            loading.dismiss().catch(() => { });
            console.log(res);
            if (res.code === 200) {
              this.products = res.data;
              this.show = true;
            } else {
               this.products = this.originalproducts;;
            }
          }, error => {
            loading.dismiss().catch(() => { });
            this.products = this.originalproducts;
          })
        }

      }
    }
  }


}
