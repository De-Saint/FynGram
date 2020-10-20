import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellersdashboardPage } from './sellersdashboard.page';

describe('SellersdashboardPage', () => {
  let component: SellersdashboardPage;
  let fixture: ComponentFixture<SellersdashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersdashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellersdashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
