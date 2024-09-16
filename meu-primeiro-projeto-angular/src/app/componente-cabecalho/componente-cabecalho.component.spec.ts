import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCabecalhoComponent } from './componente-cabecalho.component';

describe('ComponenteCabecalhoComponent', () => {
  let component: ComponenteCabecalhoComponent;
  let fixture: ComponentFixture<ComponenteCabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteCabecalhoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponenteCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
