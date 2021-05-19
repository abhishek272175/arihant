import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArihantDemoPage } from './arihant-demo.page';

describe('ArihantDemoPage', () => {
  let component: ArihantDemoPage;
  let fixture: ComponentFixture<ArihantDemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArihantDemoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArihantDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
