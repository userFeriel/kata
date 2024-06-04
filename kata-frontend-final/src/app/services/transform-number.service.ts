import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

/**
 * @description
 * @class
 */
@Injectable()
export class TransformNumberService {

  private apiUrl = 'http://localhost:9090/kata/api/';

  constructor(private http: HttpClient) { }

  getTransformedNumber(input: number): Observable<string> {
    const url = `${this.apiUrl}` + "transform/" + `${input}`;
    return this.http.get(url, { responseType: 'text' });
  }

}
