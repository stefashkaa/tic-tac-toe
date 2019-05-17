import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameComponent } from './game.component';
import { MaterialModule } from '../shared/material.module';
import { CommonModule } from '@angular/common';
import { GameService } from '../../services/game.service';

const routes: Routes = [
    { path: 'home', component: GameComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        MaterialModule,
        CommonModule
    ],
    declarations: [GameComponent],
    providers: [GameService],
    bootstrap: [GameComponent]
})
export class GameModule { }
