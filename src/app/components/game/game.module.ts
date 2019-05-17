import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GameComponent } from './game.component';
import { MaterialModule } from '../shared/material.module';
import { GameService } from '../../services/game.service';
import { LoggerService } from '../../services/logger.service';

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
    providers: [GameService, LoggerService],
    bootstrap: [GameComponent]
})
export class GameModule { }
