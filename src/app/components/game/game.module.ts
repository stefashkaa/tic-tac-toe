import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game.component';
import { MaterialModule } from '../shared/material.module';

const routes: Routes = [
    { path: 'home', component: GameComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MaterialModule
    ],
    declarations: [GameComponent],
    bootstrap: [GameComponent]
})
export class GameModule { }
