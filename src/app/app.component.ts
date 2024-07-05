import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Landpage1Component } from "./landpage1/landpage1.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Landpage1Component]
})
export class AppComponent {
  title = 'my-app';
}
