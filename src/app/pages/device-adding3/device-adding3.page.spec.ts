import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceAdding3Page } from './device-adding3.page';

describe('DeviceAdding3Page', () => {
  let component: DeviceAdding3Page;
  let fixture: ComponentFixture<DeviceAdding3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceAdding3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceAdding3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
