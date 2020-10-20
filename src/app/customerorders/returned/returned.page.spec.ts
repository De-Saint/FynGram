import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReturnedPage } from './returned.page';

describe('ReturnedPage', () => {
  let component: ReturnedPage;
  let fixture: ComponentFixture<ReturnedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
