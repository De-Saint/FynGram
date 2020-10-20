import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellerswalletPage } from './sellerswallet.page';

describe('SellerswalletPage', () => {
  let component: SellerswalletPage;
  let fixture: ComponentFixture<SellerswalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerswalletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellerswalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
