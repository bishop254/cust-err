import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WidgetServService {
  constructor(private http: HttpClient) {}

  load() {
    return this.http
      .get<Record<string, string | number>[]>(
        `https://jsonplaceholder.typicode.com/todoss?_start=0&_limit=3`
      )
      .pipe(
        catchError(() => {
          console.log(
            'Widget Service: Error caught when making API call. Obtained from the interceptor'
          );

          return throwError(() => {
            console.log('Widget service: Rethrow err');
            return new Error('Could not load data');
          });
        })
      );
  }

  addTaskSync(task: Record<string, string>): Record<string, string> | never {
    if (Number(task['id']) === 0) {
      throw Error(`Value zero (0) is not allowed as a task id`);
    }
    return task;
  }
}
