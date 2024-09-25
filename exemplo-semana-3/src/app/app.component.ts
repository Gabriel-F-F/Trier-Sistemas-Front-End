import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SubcomponenteComponent } from './subcomponente/subcomponente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'exemplo-semana-3';

  @ViewChild("minhaDiv") minhaDiv!: ElementRef;
  @ViewChild("meuSubComponente") meuSubComponente!: SubcomponenteComponent;

  ngAfterViewInit(): void {
    console.log(this.minhaDiv);
    this.minhaDiv.nativeElement.style.backgroundColor = "yellow";
    this.meuSubComponente.title = "Injetando String pelo Pai!";
    this.meuSubComponente.logaValor();
  }
}
