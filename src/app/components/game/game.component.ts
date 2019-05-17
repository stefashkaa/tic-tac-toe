import { Component, OnInit } from '@angular/core';

import { GameService } from '../../services/game.service';
import { Tile } from '../../core/tile';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
    private tiles: Tile[] = this.gameService.table;

    constructor(private readonly gameService: GameService) {
    }

    ngOnInit(): void {
        console.log('GameComponent was loaded');
    }

    private clickCell(x: number, y: number): void {
        this.gameService.clickCell(x, y);
    }
}
