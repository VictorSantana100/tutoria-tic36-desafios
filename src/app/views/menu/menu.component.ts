import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ButtonComponent } from '../../components/button/button.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CardComponent,
    HeaderComponent,
    ButtonComponent,
    NgFor
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
   cardData = [
    {categorie: 'X-Vegan', description: 'Pão, salada e mais salada'},
    {categorie: 'X-Fitnnes', description: 'Pão, salada e mais salada'},
    {categorie: 'X-Infarto', description: 'Pão, salada e mais salada'},
  ]
}
