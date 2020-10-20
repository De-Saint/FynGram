import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerwalletPage } from './customerwallet.page';

describe('CustomerwalletPage', () => {
  let component: CustomerwalletPage;
  let fixture: ComponentFixture<CustomerwalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerwalletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerwalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
