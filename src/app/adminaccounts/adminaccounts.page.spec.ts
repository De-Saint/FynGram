import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminaccountsPage } from './adminaccounts.page';

describe('AdminaccountsPage', () => {
  let component: AdminaccountsPage;
  let fixture: ComponentFixture<AdminaccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaccountsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminaccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
