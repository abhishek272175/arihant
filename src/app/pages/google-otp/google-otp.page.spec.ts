import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GoogleOtpPage } from './google-otp.page';

describe('GoogleOtpPage', () => {
  let component: GoogleOtpPage;
  let fixture: ComponentFixture<GoogleOtpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleOtpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GoogleOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
