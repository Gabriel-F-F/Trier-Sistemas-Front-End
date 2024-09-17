import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFormularioComponent } from './componente-formulario.component';

describe('ComponenteFormularioComponent', () => {
  let component: ComponenteFormularioComponent;
  let fixture: ComponentFixture<ComponenteFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
