import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellersprofilePage } from './sellersprofile.page';

describe('SellersprofilePage', () => {
  let component: SellersprofilePage;
  let fixture: ComponentFixture<SellersprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellersprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
