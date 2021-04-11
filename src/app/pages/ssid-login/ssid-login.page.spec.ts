import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SsidLoginPage } from './ssid-login.page';

describe('SsidLoginPage', () => {
  let component: SsidLoginPage;
  let fixture: ComponentFixture<SsidLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsidLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SsidLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
