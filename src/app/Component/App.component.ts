import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: '../Template/App.component.html',
  styleUrls: ['../Template/App.component.css']
})
export class AppComponent {
  constructor(private router: Router) { }
  
  onClick() {
   // this.router.navigate(['/component-two', 456]);
  }
}
