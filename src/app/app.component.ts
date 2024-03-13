import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayComponent } from './play/play.component';
import { StartComponent } from './start/start.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayComponent, StartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'memory-game';
}
