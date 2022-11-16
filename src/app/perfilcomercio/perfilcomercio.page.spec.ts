import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilcomercioPage } from './perfilcomercio.page';

describe('PerfilcomercioPage', () => {
  let component: PerfilcomercioPage;
  let fixture: ComponentFixture<PerfilcomercioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilcomercioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilcomercioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
