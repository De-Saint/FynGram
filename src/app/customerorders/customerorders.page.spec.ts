import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerordersPage } from './customerorders.page';

describe('CustomerordersPage', () => {
  let component: CustomerordersPage;
  let fixture: ComponentFixture<CustomerordersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerordersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerordersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
