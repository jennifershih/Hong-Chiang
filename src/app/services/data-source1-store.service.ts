import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataSource1Store } from './data-source-1-store';

@Injectable({
  providedIn: 'root'
})
export class DataSource1StoreService {
  public getData(tableName: string): Observable<any[]> {
    return of(DataSource1Store[tableName]);
  }
}
