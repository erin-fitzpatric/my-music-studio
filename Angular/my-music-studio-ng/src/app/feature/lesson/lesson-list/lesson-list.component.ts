import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { LessonService } from 'src/app/service/lesson.service';
import { Lesson } from 'src/app/model/lesson.class';
import { SystemService } from 'src/app/service/system.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { JsonResponse } from 'src/app/model/json-response.class';
import { AssignmentService } from 'src/app/service/assignment.service';
import { Assignment } from 'src/app/model/assignment';
import { from, forkJoin } from 'rxjs';
import { switchMap, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent extends BaseComponent implements OnInit {
  title: string = "Lesson List";
  lessons: Lesson[] = [];
  id: number = 0;
  jr: JsonResponse;
  constructor(private lessonSvc: LessonService,
    private assignmentSvc: AssignmentService,
    private router: Router,
    private route: ActivatedRoute,
    private loc: Location,
    protected sysSvc: SystemService) {
    super(sysSvc);
  }
  ngOnInit() {
    super.ngOnInit();
    this.sysSvc.checkLogin();
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.lessonSvc.list().subscribe(jr => {
      this.lessons = jr.data as Lesson[];
      console.log(this.lessons);
    });
  }
  delete(lessonId: number) {
    this.assignmentSvc.listAssignmentsById(lessonId).subscribe(jr => {
      let assignments = jr.data as Assignment[];
      forkJoin(...assignments.map(a =>
        this.assignmentSvc.delete(a.id)
      )).subscribe(jr => {
        this.lessonSvc.delete(lessonId).subscribe(jr => {
          this.lessonSvc.list().subscribe(jr => {
            this.lessons = jr.data as Lesson[];
            console.log(this.lessons);
          });
        })
      })
    });
  }
}
