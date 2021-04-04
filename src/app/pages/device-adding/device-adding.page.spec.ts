import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceAddingPage } from './device-adding.page';

describe('DeviceAddingPage', () => {
  let component: DeviceAddingPage;
  let fixture: ComponentFixture<DeviceAddingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceAddingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceAddingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
