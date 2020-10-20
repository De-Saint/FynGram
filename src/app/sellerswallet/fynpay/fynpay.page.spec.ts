import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FynpayPage } from './fynpay.page';

describe('FynpayPage', () => {
  let component: FynpayPage;
  let fixture: ComponentFixture<FynpayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FynpayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FynpayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
