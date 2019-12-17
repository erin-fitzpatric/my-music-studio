import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Assignment } from '../model/assignment';
import { JsonResponse } from '../model/json-response.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  url: string = "http://localhost:8080/assignments/";
  constructor(private http: HttpClient) { }
  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url + id) as Observable<JsonResponse>;
  }
  save(assignment: Assignment): Observable<JsonResponse> {
    return this.http.post(this.url, assignment) as Observable<JsonResponse>;
  }
  update(assignment: Assignment): Observable<JsonResponse> {
    return this.http.put(this.url, assignment) as Observable<JsonResponse>;
  }
  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(this.url + id) as Observable<JsonResponse>;
  }
  listAssignmentsById(id: number): Observable<JsonResponse> {
    return this.http.get(this.url + "/assignments-for-lesson/" + id) as Observable<JsonResponse>
  }
}