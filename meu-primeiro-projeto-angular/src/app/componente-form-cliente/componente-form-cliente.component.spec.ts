import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFormClienteComponent } from './componente-form-cliente.component';

describe('ComponenteFormClienteComponent', () => {
  let component: ComponenteFormClienteComponent;
  let fixture: ComponentFixture<ComponenteFormClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteFormClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteFormClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
