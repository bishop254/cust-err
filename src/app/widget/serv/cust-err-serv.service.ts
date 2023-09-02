import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable()
export class CustErrServ implements ErrorHandler {
  constructor(private snack: MatSnackBar, private zone: NgZone) {}

  handleError(error: unknown): void {
    this.zone.run(() => {
      this.snack.open('Custom Err Serv: Error is being handled', 'Close', {
        duration: 2000,
      });
    });
    console.log(error);
  }
}
