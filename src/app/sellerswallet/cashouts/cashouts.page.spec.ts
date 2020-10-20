import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CashoutsPage } from './cashouts.page';

describe('CashoutsPage', () => {
  let component: CashoutsPage;
  let fixture: ComponentFixture<CashoutsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashoutsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CashoutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
