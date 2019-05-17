import { Injectable } from '@angular/core';

Injectable({
    providedIn: 'root'
});
export class GameService {
    private board: number[] = [];
    public table: Tile[] = [];

    private computerSymbol = -1;
    // 1 or -1
    // 1="X", -1="O"
    // computer = O
    private gameRunning = true;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.table = [];
        this.gameRunning = true;
        for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
                this.table.push({color: 'white', text: '', x: i, y: j});
            }
        }
    }

    private isFull(): boolean {
        for (let i = 0; i < 9; i++) {
            if (this.board[i] === 0) {
                return false;
            }
        }
        return true;
    }

    public clickCell(x: number, y: number): void {
        const index: number = 3 * (x - 1) + (y - 1);
        if (!this.gameRunning) {
            alert('Game over');
            return;
        }
        if (this.board[index] === this.computerSymbol) {
            alert('The computer protecting this box!');
            return;
        }
        if (this.board[index] === -this.computerSymbol) {
            alert('already played');
            return;
        }
        this.draw(index);
    }

    private draw(index: number): void {
        this.table[index].color = '#25bfc4';
        this.table[index].text = 'X';
        this.board[index] = 1;
        if (this.win(this.board) === 1) {
            this.gameRunning = false;
            alert('You have won!');
            return;
        }
        if (this.isFull()) {
            this.gameRunning = false;
            alert('Draw match');
        } else {
            const v = this.minmax(-1, true);
            this.board[v] = -1;
            this.table[v].color = '#fac95f';
            this.table[v].text = 'O';
            if (this.win(this.board) === -1) {
                this.gameRunning = false;
                alert('You have lost!');
            } else {
                if (this.isFull()) {
                    this.gameRunning = false;
                    alert('Draw match');
                }
            }
        }
    }

    private win(board: number[]): number {
        let b = board[1];
        if (board[0] === b && b === board[2] && b !== 0) { return b; }
        b = board[4];
        if (board[3] === b && b === board[5] && b !== 0) { return b; }
        b = board[7];
        if (board[6] === b && b === board[8] && b !== 0) { return b; }
        b = board[3];
        if (board[0] === b && b === board[6] && b !== 0) { return b; }
        b = board[4];
        if (board[1] === b && b === board[7] && b !== 0) { return b; }
        b = board[5];
        if (board[2] === b && b === board[8] && b !== 0) { return b; }
        b = board[4];
        if (board[0] === b && b === board[8] && b !== 0) { return b; }
        if (board[2] === b && b === board[6] && b !== 0) { return b; }
        return 0;
    }

    private minmax(currentPlayer: number, root: boolean): number {
        const winner = this.win(this.board);
        if (winner !== 0) {
            if (currentPlayer === -1) {
                return winner;
            } else {
                return -winner;
            }
        }
        // possible moves
        const possibleMoves: number[] = [];
        for (let i = 0; i < 9; i++) {
            if (this.board[i] === 0) {
                possibleMoves.push(i);
            }
        }
        const n: number = possibleMoves.length;
        if (n === 0) {
            return 0;
        }
        let which = -1;
        let v = 100;
        for (let j = 0; j < n; j++) {
            const move = possibleMoves[j];
            // play
            this.board[move] = currentPlayer;
            const m = -this.minmax(-currentPlayer, false);
            this.board[move] = 0;
            if (m < v) {
                v = m;
                which = move;
            }
        }
        if (root) {
            return which;
        } else {
            return v;
        }
    }
}

export interface Tile {
    color: string;
    text: string;
    x: number;
    y: number;
}
