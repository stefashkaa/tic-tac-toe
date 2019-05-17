import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    private matSnackBarConfig: MatSnackBarConfig;

    constructor(public readonly snackBar: MatSnackBar,
        private zone: NgZone) {
        this.matSnackBarConfig = new MatSnackBarConfig();
        this.matSnackBarConfig.duration = 2500;
        this.matSnackBarConfig.horizontalPosition = 'center';
        this.matSnackBarConfig.verticalPosition = 'bottom';
    }

    public success(message: string): void {
        this.matSnackBarConfig.panelClass = ['logger', 'logger-success'];
        this.openSnackBar(message);
        console.info(message);
    }

    public error(message: string): void {
        this.matSnackBarConfig.panelClass = ['logger', 'logger-error'];
        this.openSnackBar(message);
        console.warn(message);
    }

    private openSnackBar(message: string): void {
        this.zone.run(() => {
            this.snackBar.open(message, null, this.matSnackBarConfig);
        });
    }
}
