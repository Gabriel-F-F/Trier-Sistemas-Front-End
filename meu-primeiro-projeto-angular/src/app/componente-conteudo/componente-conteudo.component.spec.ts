import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteConteudoComponent } from './componente-conteudo.component';

describe('ComponenteConteudoComponent', () => {
  let component: ComponenteConteudoComponent;
  let fixture: ComponentFixture<ComponenteConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteConteudoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
