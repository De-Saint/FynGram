import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminwalletPage } from './adminwallet.page';

describe('AdminwalletPage', () => {
  let component: AdminwalletPage;
  let fixture: ComponentFixture<AdminwalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminwalletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminwalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
