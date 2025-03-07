(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810"],{

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


;
let DataService = class DataService {
    constructor() {
        this.card = {
            image: 'assets/images/products/1.jpg',
            title: 'Kya aapne kabhi online hotel book kia hai???\nHotel? Sastago',
            time: 9
        };
        this.notifications = {
            all: [this.card, this.card, this.card, this.card, this.card, this.card, this.card],
            deals: [this.card, this.card, this.card, this.card, this.card, this.card, this.card],
            orders: [],
            others: [this.card, this.card, this.card, this.card, this.card, this.card, this.card],
        };
        this.trending = [
            'jacket',
            'drone',
            'shoes for men',
            'car accessories',
            'blazer for men',
            'watches men',
            'sports shoes for men',
            'earphone bluetooth',
            'jackets for men',
            'memory card'
        ];
        this.tabs = [{ title: 'Popular' },
            { title: 'Recently Viewed' },
            { title: 'Fashion' },
            { title: 'Tops' },
            { title: 'Shoes' },
            { title: 'Automotive' },
            { title: 'Bottoms' },
            { title: 'Watches' },
            { title: 'Wallets & Bags' },
            { title: 'Accessories' },
            { title: 'Gadgets' },
            { title: 'Hobbies' },
            { title: 'Phone Upgrades' },
            { title: 'Home Decor' }
        ];
        this.item_tab = [{ title: 'Overview' },
            { title: 'Related' },
            { title: 'Review' }];
        this.notifications_tab = [{ title: 'All' },
            { title: 'Deals' },
            { title: 'Your Orders' },
            { title: 'Other' }];
        this.rewards_tab = [{ title: 'Dashboard' },
            { title: 'Redeem' },
            { title: 'Information' }];
        this.rewards = {
            points: 100,
            since: new Date(),
            available: [{ discount: 5, code: 'ABCDEF', expire: new Date(), expired: false }],
            used: [{ discount: 10, code: 'XEFGSD', expire: new Date(), expired: true }],
            redeem: [{ discount: 5, points: 200 }, { discount: 10, points: 600 }, { discount: 15, points: 1000 }]
        };
        this.sponsored = [
            { name: 'Bianca Top', cost_price: 128, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/1.jpg', 'assets/images/products/1_1.jpg', 'assets/images/products/1_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/1.jpg', 'assets/images/products/1_1.jpg'] }, { image: 'assets/images/products/1_2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/1.jpg'] }], store_reviews: [{ image: 'assets/images/products/1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/1.jpg', 'assets/images/products/1_1.jpg'] }, { image: 'assets/images/products/1_2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/1.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Scarpetta Dress', cost_price: 198, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/2.jpg', 'assets/images/products/2_1.jpg', 'assets/images/products/2_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 400, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/2.jpg'] }], store_reviews: [{ image: 'assets/images/products/2_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/2.jpg', 'assets/images/products/2_1.jpg'] }, { image: 'assets/images/products/2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/2.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Misty Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg', 'assets/images/products/3_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 365, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/3.jpg'] }], store_reviews: [{ image: 'assets/images/products/3_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg'] }, { image: 'assets/images/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/3.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Blanch Dress', cost_price: 248, discount: 20, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg', 'assets/images/products/4_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg'] }], store_reviews: [{ image: 'assets/images/products/4_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg'] }, { image: 'assets/images/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Scarlett Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg', 'assets/images/products/5_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 234, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg'] }], store_reviews: [{ image: 'assets/images/products/5_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg'] }, { image: 'assets/images/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg', 'assets/images/products/6_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 567, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg'] }], store_reviews: [{ image: 'assets/images/products/6_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg'] }, { image: 'assets/images/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg', 'assets/images/products/7_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 137, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg'] }], store_reviews: [{ image: 'assets/images/products/7_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg'] }, { image: 'assets/images/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Smith Dress', cost_price: 98, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg', 'assets/images/products/8_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 236, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg'] }], store_reviews: [{ image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg'] }, { image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Nicola Dress', cost_price: 278, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/9.jpg', 'assets/images/products/9_1.jpg', 'assets/images/products/9_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 982, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/9.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/9.jpg'] }], store_reviews: [{ image: 'assets/images/products/9_2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/9.jpg', 'assets/images/products/9_1.jpg'] }, { image: 'assets/images/products/9.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/9.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Smith Dress', cost_price: 98, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/10.jpg', 'assets/images/products/10_1.jpg', 'assets/images/products/10_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 214, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/10.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/10.jpg'] }], store_reviews: [{ image: 'assets/images/products/10_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/10.jpg', 'assets/images/products/10_1.jpg'] }, { image: 'assets/images/products/10.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/10.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Kinsley Dress', cost_price: 198, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/11.jpg', 'assets/images/products/11_1.jpg', 'assets/images/products/11_2.jpg', 'assets/images/products/11_3.jpg', 'assets/images/products/11_4.jpg', 'assets/images/products/11_5.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 434, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/11.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/11.jpg'] }], store_reviews: [{ image: 'assets/images/products/1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/11.jpg', 'assets/images/products/11_1.jpg'] }, { image: 'assets/images/products/11_2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/1.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] }
        ];
        this.products_1 = [
            { name: 'Bianca Top', cost_price: 128, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/1.jpg', 'assets/images/products/1_1.jpg', 'assets/images/products/1_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/1.jpg', 'assets/images/products/1_1.jpg'] }, { image: 'assets/images/products/1_2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/1.jpg'] }], store_reviews: [{ image: 'assets/images/products/1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/1.jpg', 'assets/images/products/1_1.jpg'] }, { image: 'assets/images/products/1_2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/1.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Scarpetta Dress', cost_price: 198, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/2.jpg', 'assets/images/products/2_1.jpg', 'assets/images/products/2_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 400, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/2.jpg'] }], store_reviews: [{ image: 'assets/images/products/2_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/2.jpg', 'assets/images/products/2_1.jpg'] }, { image: 'assets/images/products/2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/2.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Misty Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg', 'assets/images/products/3_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 365, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/3.jpg'] }], store_reviews: [{ image: 'assets/images/products/3_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg'] }, { image: 'assets/images/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/3.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Blanch Dress', cost_price: 248, discount: 20, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg', 'assets/images/products/4_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg'] }], store_reviews: [{ image: 'assets/images/products/4_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg'] }, { image: 'assets/images/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Scarlett Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg', 'assets/images/products/5_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 234, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg'] }], store_reviews: [{ image: 'assets/images/products/5_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg'] }, { image: 'assets/images/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
        ];
        this.products_2 = [{ name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg', 'assets/images/products/6_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 567, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg'] }], store_reviews: [{ image: 'assets/images/products/6_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg'] }, { image: 'assets/images/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg', 'assets/images/products/7_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 137, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg'] }], store_reviews: [{ image: 'assets/images/products/7_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg'] }, { image: 'assets/images/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Smith Dress', cost_price: 98, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg', 'assets/images/products/8_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 236, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg'] }], store_reviews: [{ image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg'] }, { image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Nicola Dress', cost_price: 278, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/9.jpg', 'assets/images/products/9_1.jpg', 'assets/images/products/9_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 982, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/9.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/9.jpg'] }], store_reviews: [{ image: 'assets/images/products/9_2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/9.jpg', 'assets/images/products/9_1.jpg'] }, { image: 'assets/images/products/9.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/9.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Smith Dress', cost_price: 98, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/10.jpg', 'assets/images/products/10_1.jpg', 'assets/images/products/10_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 214, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/10.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/10.jpg'] }], store_reviews: [{ image: 'assets/images/products/10_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/10.jpg', 'assets/images/products/10_1.jpg'] }, { image: 'assets/images/products/10.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/10.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
        ];
        this.products_3 = [{ name: 'Blanch Dress', cost_price: 248, discount: 20, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg', 'assets/images/products/4_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg'] }], store_reviews: [{ image: 'assets/images/products/4_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg'] }, { image: 'assets/images/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Scarlett Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg', 'assets/images/products/5_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 234, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg'] }], store_reviews: [{ image: 'assets/images/products/5_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg'] }, { image: 'assets/images/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg', 'assets/images/products/6_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 567, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg'] }], store_reviews: [{ image: 'assets/images/products/6_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg'] }, { image: 'assets/images/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg', 'assets/images/products/7_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 137, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg'] }], store_reviews: [{ image: 'assets/images/products/7_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg'] }, { image: 'assets/images/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Smith Dress', cost_price: 98, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg', 'assets/images/products/8_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 236, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg'] }], store_reviews: [{ image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg'] }, { image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
        ];
        this.products_4 = [{ name: 'Misty Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg', 'assets/images/products/3_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 365, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/3.jpg'] }], store_reviews: [{ image: 'assets/images/products/3_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg'] }, { image: 'assets/images/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/3.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Blanch Dress', cost_price: 248, discount: 20, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg', 'assets/images/products/4_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg'] }], store_reviews: [{ image: 'assets/images/products/4_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg'] }, { image: 'assets/images/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Scarlett Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg', 'assets/images/products/5_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 234, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg'] }], store_reviews: [{ image: 'assets/images/products/5_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg'] }, { image: 'assets/images/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg', 'assets/images/products/6_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 567, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg'] }], store_reviews: [{ image: 'assets/images/products/6_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg'] }, { image: 'assets/images/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg', 'assets/images/products/7_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 137, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg'] }], store_reviews: [{ image: 'assets/images/products/7_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg'] }, { image: 'assets/images/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Smith Dress', cost_price: 98, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg', 'assets/images/products/8_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 236, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg'] }], store_reviews: [{ image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg'] }, { image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
        ];
        this.products_5 = [{ name: 'Scarpetta Dress', cost_price: 198, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/2.jpg', 'assets/images/products/2_1.jpg', 'assets/images/products/2_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 400, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/2.jpg'] }], store_reviews: [{ image: 'assets/images/products/2_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/2.jpg', 'assets/images/products/2_1.jpg'] }, { image: 'assets/images/products/2.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/2.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Misty Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg', 'assets/images/products/3_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 365, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/3.jpg'] }], store_reviews: [{ image: 'assets/images/products/3_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/3.jpg', 'assets/images/products/3_1.jpg'] }, { image: 'assets/images/products/3.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/3.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Blanch Dress', cost_price: 248, discount: 20, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg', 'assets/images/products/4_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 1200, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg'] }], store_reviews: [{ image: 'assets/images/products/4_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg', 'assets/images/products/4_1.jpg'] }, { image: 'assets/images/products/4.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/4.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Scarlett Dress', cost_price: 218, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg', 'assets/images/products/5_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 234, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg'] }], store_reviews: [{ image: 'assets/images/products/5_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg', 'assets/images/products/5_1.jpg'] }, { image: 'assets/images/products/5.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/5.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg', 'assets/images/products/6_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 567, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg'] }], store_reviews: [{ image: 'assets/images/products/6_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg', 'assets/images/products/6_1.jpg'] }, { image: 'assets/images/products/6.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/6.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Morrisson Dress', cost_price: 128, discount: 80, offer: true, stock: 69, description: 'sample data', image: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg', 'assets/images/products/7_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 137, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg'] }], store_reviews: [{ image: 'assets/images/products/7_1.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg', 'assets/images/products/7_1.jpg'] }, { image: 'assets/images/products/7.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/7.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
            { name: 'Smith Dress', cost_price: 98, discount: 80, offer: false, stock: 69, description: 'sample data', image: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg', 'assets/images/products/8_2.jpg'], rating_count: 11, store_rating_count: 11, currency: '$', bought: 236, size: 'M', color: 'Black', shipping: 250, rating: 4, store_rating: 18090, store_rate: 3, sold_by: 'seller', specs: 'this is a sample product', reviews: [{ image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg'] }], store_reviews: [{ image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg', 'assets/images/products/8_1.jpg'] }, { image: 'assets/images/products/8.jpg', name: 'sample', comment: 'This is an amazing dress and totally out of budget. Need to sell my only kidney to purchase this one as other kidney is already sold for my iphone...lol', rating: 5, images: ['assets/images/products/8.jpg'] }], sizing: { small: 10, okay: 80, large: 5 }, buyer_guarantee: 'Return all products within 30 days of delivery if they are not up to your satisfaction', sponsored: [] },
        ];
        this.cart = [{ product: this.products_3[1], quantity: 1 },
            { product: this.products_5[3], quantity: 2 }
        ];
        this.recent = this.products_1;
        this.current_product = this.products_1[0];
        this.current_user = {
            fname: 'Tanay',
            uid: 'ALSIOCSIIUAISUC',
            did: 'JIOU-ASBB-C871-0345',
            aid: 'ASBB-ASBB-C871-0345',
            lname: 'Toshniwal',
            email: 'tanaytoshniwal98@gmail.com',
            billing: [{ card_number: '3124', expiry_date: '12/22' }, { card_number: '4564', expiry_date: '03/25' }],
            address: [{ address_line_1: 'ghar', address_line_2: 'ghar', city: 'jaipur', last_name: 'bond', phone_number: 1125532553, zipcode: 12345, country: 'India', first_name: 'James', state: 'Rajasthan' },
                { address_line_1: 'office', address_line_2: 'Office', city: 'Delhi', last_name: 'Holmes', phone_number: 1125532553, zipcode: 12345, country: 'India', first_name: 'Sherlock', state: 'Delhi' }]
        };
        this.wish_cash = {
            currency: '$',
            amount: 0.00,
            history: [{ amount: 10 }, { amount: 20 }]
        };
        this.orders = [{
                product: this.products_1[0],
                amount: 123,
                billing_address: { address_line_1: 'ghar', address_line_2: 'ghar', city: 'jaipur', last_name: 'bond', phone_number: 1125532553, zipcode: 12345, country: 'India', first_name: 'James', state: 'Rajasthan' },
                shipping_address: { address_line_1: 'ghar', address_line_2: 'ghar', city: 'jaipur', last_name: 'bond', phone_number: 1125532553, zipcode: 12345, country: 'India', first_name: 'James', state: 'Rajasthan' },
                delivery_date: new Date(),
                id: 'B102013526',
                order_date: new Date(),
                status: 'Delivered',
                tax: 40
            }, {
                product: this.products_2[0],
                amount: 123,
                billing_address: { address_line_1: 'ghar', address_line_2: 'ghar', city: 'jaipur', last_name: 'bond', phone_number: 1125532553, zipcode: 12345, country: 'India', first_name: 'James', state: 'Rajasthan' },
                shipping_address: { address_line_1: 'ghar', address_line_2: 'ghar', city: 'jaipur', last_name: 'bond', phone_number: 1125532553, zipcode: 12345, country: 'India', first_name: 'James', state: 'Rajasthan' },
                delivery_date: new Date(),
                id: 'B102013526',
                order_date: new Date(),
                status: 'Delivered',
                tax: 40
            }];
    }
};
DataService.ctorParameters = () => [];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/services/functions.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/functions.service.ts ***!
  \***********************************************/
/*! exports provided: FunctionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsService", function() { return FunctionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let FunctionsService = class FunctionsService {
    constructor(dataService, router, toastController, nav, alertController) {
        this.dataService = dataService;
        this.router = router;
        this.toastController = toastController;
        this.nav = nav;
        this.alertController = alertController;
        this.navigationData = [];
        this.faqs = {
            'About Us': "https://fyngram.com/FynGramShop/pages/shop/aboutus/aboutus.jsp",
            'Blog': "https://fyngram.com/FynGramShop/pages/shop/services/services.jsp",
            'Contact Us': "https://fyngram.com/FynGramShop/pages/shop/contact/contact.jsp",
            'Supports': "https://fyngram.com/FynGramShop/pages/shop/support/support.jsp",
            'FAQs': "https://fyngram.com/FynGramShop/pages/shop/faq/faq.jsp",
            'Privacy Policy': "https://fyngram.com/FynGramShop/pages/shop/privacy/privacy.jsp",
            'Terms & Conditions': "https://fyngram.com/FynGramShop/pages/shop/terms/terms.jsp",
            'Return Policy': "https://fyngram.com/FynGramShop/pages/shop/returned_policy/returned_policy.jsp",
        };
    }
    navigate(link, forward) {
        if (forward) {
            this.nav.navigateForward('/' + link);
        }
        else {
            this.router.navigateByUrl('/' + link);
        }
    }
    array(i) {
        const l = [];
        for (let j = 0; j < i; j++) {
            l.push(1);
        }
        return l;
    }
    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                duration: 2100,
                message: message
            });
            toast.present();
        });
    }
    back() {
        // this.nav.goBack();
        this.nav.back();
    }
    date(date) {
        const monthNames = [
            'January', 'February', 'March',
            'April', 'May', 'June', 'July',
            'August', 'September', 'October',
            'November', 'December'
        ];
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }
    update(product) {
        this.dataService.current_product = product;
    }
    removeConform(data) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Are you sure you want to remove this ' + data + '?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (cancel) => {
                            console.log('Confirm Cancel: blah');
                            resolve('cancel');
                        }
                    }, {
                        text: 'Okay',
                        handler: (ok) => {
                            console.log('Confirm Okay');
                            resolve('ok');
                        }
                    }
                ]
            });
            alert.present();
        }));
    }
    setConfirm(data) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Are you sure you want to make this ' + data + ' the default?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (cancel) => {
                            console.log('Confirm Cancel: blah');
                            resolve('cancel');
                        }
                    }, {
                        text: 'Okay',
                        handler: (ok) => {
                            console.log('Confirm Okay');
                            resolve('ok');
                        }
                    }
                ]
            });
            alert.present();
        }));
    }
    calculate(price, discount) {
        price = price - (price * discount / 100);
        return price.toFixed(2);
    }
    processRequest(option, data) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Are you sure you want to ' + option + ' this ' + data + '?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (cancel) => {
                            console.log('Confirm Cancel: blah');
                            resolve('cancel');
                        }
                    }, {
                        text: 'Okay',
                        handler: (ok) => {
                            console.log('Confirm Okay');
                            resolve('ok');
                        }
                    }
                ]
            });
            alert.present();
        }));
    }
    setNavLink(link) {
        this.navlink = link;
    }
    getNavLink() {
        return this.navlink;
    }
    setNavigationData(id, data) {
        this.navigationData[id] = data;
    }
    getNavigationData(id) {
        return this.navigationData[id];
    }
    CalculatePercentage(userAmt) {
        let addedPerc = (parseInt(userAmt) * 0.02);
        let newAmt = parseInt(userAmt) + addedPerc;
        if (parseInt(userAmt) >= 2500) {
            newAmt = parseInt(userAmt) + 100;
        }
        return newAmt;
    }
};
FunctionsService.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
FunctionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], FunctionsService);



/***/ })

}]);
//# sourceMappingURL=default~address-address-module~address-new-new-module~authenticate-authenticate-module~banks-banks-m~dca64810-es2015.js.map