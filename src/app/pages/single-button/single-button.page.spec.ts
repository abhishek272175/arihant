import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleButtonPage } from './single-button.page';

describe('SingleButtonPage', () => {
  let component: SingleButtonPage;
  let fixture: ComponentFixture<SingleButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleButtonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
