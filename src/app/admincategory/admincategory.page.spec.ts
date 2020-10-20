import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmincategoryPage } from './admincategory.page';

describe('AdmincategoryPage', () => {
  let component: AdmincategoryPage;
  let fixture: ComponentFixture<AdmincategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmincategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
