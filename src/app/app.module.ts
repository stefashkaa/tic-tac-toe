import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from './components/shared/material.module';
import { AppComponent } from './app.component';
import { GameModule } from './components/game/game.module';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        RouterModule.forRoot(routes),
        GameModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
