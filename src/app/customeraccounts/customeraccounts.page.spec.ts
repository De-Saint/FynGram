import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomeraccountsPage } from './customeraccounts.page';

describe('CustomeraccountsPage', () => {
  let component: CustomeraccountsPage;
  let fixture: ComponentFixture<CustomeraccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeraccountsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomeraccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
