import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opts',
  templateUrl: './opts.page.html',
  styleUrls: ['./opts.page.scss'],
})
export class OptsPage implements OnInit {

  darkMode = true;

  constructor() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }

  ngOnInit() {
  }

  change() {
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = !this.darkMode;

    document.body.classList.toggle( 'dark' );

  }

}
