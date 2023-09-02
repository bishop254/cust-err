import { Component } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { WidgetServService } from './serv/widget-serv.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent {
  tasks$!: Observable<Record<string, string | number>[]>;
  error: Error | null = null;

  constructor(private widgetData: WidgetServService) {}

  ngOnInit(): void {
    this.tasks$ = this.widgetData.load().pipe(
      map((resp) => {
        return resp;
      }),
      catchError((err) => {
        console.log('Widget Comp: Error caught from component');
        this.error = err;
        return throwError(() => {
          console.log('Rethrown to Global');
          this.tasks$ = of([]);
          return err;
        });
      })
    );
  }

  addTask() {
    // unreliable method
    // console.log(this.error?.stack?.length);

    try {
      setTimeout(() => {
        this.widgetData.addTaskSync({ id: '0', title: 'New Task' });
      }, 1000);
    } catch (error) {
      if (error instanceof Error) {
        this.error = error;
      }
    }
  }
}
