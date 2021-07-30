import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    loadedFeater = 'recipe';

  onNavigate(chosenItem: string) {
      this.loadedFeater = chosenItem;
  }
}
