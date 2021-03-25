import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewTicketPage } from './view-ticket.page';

describe('ViewTicketPage', () => {
  let component: ViewTicketPage;
  let fixture: ComponentFixture<ViewTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
