import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmininventoryPage } from './admininventory.page';

describe('AdmininventoryPage', () => {
  let component: AdmininventoryPage;
  let fixture: ComponentFixture<AdmininventoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmininventoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmininventoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
