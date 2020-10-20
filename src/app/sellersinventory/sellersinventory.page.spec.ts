import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellersinventoryPage } from './sellersinventory.page';

describe('SellersinventoryPage', () => {
  let component: SellersinventoryPage;
  let fixture: ComponentFixture<SellersinventoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersinventoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellersinventoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
