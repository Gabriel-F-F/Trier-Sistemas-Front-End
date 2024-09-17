import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteListClienteComponent } from './componente-list-cliente.component';

describe('ComponenteListClienteComponent', () => {
  let component: ComponenteListClienteComponent;
  let fixture: ComponentFixture<ComponenteListClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteListClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteListClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
