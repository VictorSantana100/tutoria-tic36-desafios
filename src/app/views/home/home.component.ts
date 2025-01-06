import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ContainerImgComponent } from '../../components/container-img/container-img.component';
import { Router } from '@angular/router'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ButtonComponent,
    ContainerImgComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // constructor(private router: Router) {
  //   console.log('Componente Home carregado');
  // }
  
  navegarParaMenu(){
    console.log('Botão clicado!');
    // this.router.navigate(['/menu']); 
  }
}
