import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  loadingState = 'loading';

  onSwitchState() {
    this.loadingState = 'finished';
  }
}
