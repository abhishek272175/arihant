import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceAdding2Page } from './device-adding2.page';

describe('DeviceAdding2Page', () => {
  let component: DeviceAdding2Page;
  let fixture: ComponentFixture<DeviceAdding2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceAdding2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceAdding2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
