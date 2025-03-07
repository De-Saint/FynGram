import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BanksPage } from './banks.page';

describe('BanksPage', () => {
  let component: BanksPage;
  let fixture: ComponentFixture<BanksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BanksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
