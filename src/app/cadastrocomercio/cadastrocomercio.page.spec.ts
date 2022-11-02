import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastrocomercioPage } from './cadastrocomercio.page';

describe('CadastrocomercioPage', () => {
  let component: CadastrocomercioPage;
  let fixture: ComponentFixture<CadastrocomercioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrocomercioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrocomercioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
