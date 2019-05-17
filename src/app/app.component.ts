import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { browser } from './util/browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        console.log('AppComponent was loaded');
    }

    public get cssClassList(): string[] {
        const res = new Array<string>();

        if (browser.isMobile()) {
            res.push('app-mobile');
        }

        return res;
    }
}
