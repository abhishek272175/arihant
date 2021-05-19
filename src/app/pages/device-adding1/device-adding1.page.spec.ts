import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceAdding1Page } from './device-adding1.page';

describe('DeviceAdding1Page', () => {
  let component: DeviceAdding1Page;
  let fixture: ComponentFixture<DeviceAdding1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceAdding1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceAdding1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
