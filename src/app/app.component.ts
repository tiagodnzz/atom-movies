import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <loading></loading>
    <router-outlet></router-outlet>
    <footer-default></footer-default>
  `,
  styles: []
})
export class AppComponent {
}
