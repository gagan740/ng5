import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goals']);
  private _url: string = '/assets/data.json';
  goal = this.goals.asObservable();

  constructor(private http: HttpClient) { }

  changeGoal(goal) {
    this.goals.next(goal);
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }

}
