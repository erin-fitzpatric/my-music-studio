import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { Lesson } from '../model/lesson.class';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  url: string = "http://localhost:8080/lessons/";
  constructor(private http: HttpClient) { }
  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }
  get(id: number): Observable<JsonResponse>{
    return this.http.get(this.url+id) as Observable<JsonResponse>;
  }
  save(lesson: Lesson): Observable<JsonResponse> {
    return this.http.post(this.url, lesson) as Observable<JsonResponse>;
  }
  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(this.url+id) as Observable<JsonResponse>;
  }
  completed(lesson: Lesson): Observable<JsonResponse> {
    return this.http.put(this.url+"completed", lesson) as Observable<JsonResponse>;
  }
  missed(lesson: Lesson): Observable<JsonResponse> {
    return this.http.put(this.url+"missed", lesson) as Observable<JsonResponse>;
  }
  listUpcoming(id: number): Observable<JsonResponse> {
    return this.http.get(this.url + 'list-upcoming/' + id) as Observable<JsonResponse>;
  }
}

