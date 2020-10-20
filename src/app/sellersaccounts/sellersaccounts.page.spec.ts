import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellersaccountsPage } from './sellersaccounts.page';

describe('SellersaccountsPage', () => {
  let component: SellersaccountsPage;
  let fixture: ComponentFixture<SellersaccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersaccountsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellersaccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
