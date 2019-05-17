import { Component, OnInit } from '@angular/core';
import { Tile, GameService } from '../../services/game.service';

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
