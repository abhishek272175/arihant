import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SwitchesPage } from './switches.page';

describe('SwitchesPage', () => {
  let component: SwitchesPage;
  let fixture: ComponentFixture<SwitchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
