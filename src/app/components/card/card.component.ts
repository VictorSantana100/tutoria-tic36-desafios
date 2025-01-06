import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() category = '';
  @Input() description = '';
  @Input() img = null;
}
