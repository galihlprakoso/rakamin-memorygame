import { Component } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  images: string[]=[
    "https://www.svgrepo.com/show/288987/fire.svg",
    "https://freesvg.org/storage/img/thumb/1362589065.png",
    "https://www.svgrepo.com/show/288987/fire.svg",
    "https://freesvg.org/storage/img/thumb/1362589065.png"
  ]
}
