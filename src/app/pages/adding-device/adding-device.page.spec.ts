import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddingDevicePage } from './adding-device.page';

describe('AddingDevicePage', () => {
  let component: AddingDevicePage;
  let fixture: ComponentFixture<AddingDevicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingDevicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddingDevicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
