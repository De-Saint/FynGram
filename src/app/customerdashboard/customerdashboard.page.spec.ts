import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerdashboardPage } from './customerdashboard.page';

describe('CustomerdashboardPage', () => {
  let component: CustomerdashboardPage;
  let fixture: ComponentFixture<CustomerdashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerdashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerdashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
