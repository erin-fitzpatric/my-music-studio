import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { LessonService } from 'src/app/service/lesson.service';
import { SystemService } from 'src/app/service/system.service';
import { Lesson } from 'src/app/model/lesson.class';
import { Assignment } from 'src/app/model/assignment';
import { JsonResponse } from 'src/app/model/json-response.class';
import { AssignmentService } from 'src/app/service/assignment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lesson-assignment',
  templateUrl: './lesson-assignment.component.html',
  styleUrls: ['./lesson-assignment.component.css']
})
export class LessonAssignmentComponent extends BaseComponent implements OnInit {
  titleOne: String = "Lesson";
  titleTwo: String = "Assignments";
  lesson: Lesson = new Lesson;
  assignments: Assignment[] = [];
  id: number = 0;
  jr: JsonResponse;
  constructor(private assignmentSvc: AssignmentService,
    protected sysSvc: SystemService,
    private lessonSvc: LessonService,
    private route: ActivatedRoute,
    private router: Router) {
    super(sysSvc);
  }
  ngOnInit() {
    super.ngOnInit();
    this.sysSvc.checkLogin();
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.getAssignment();
  }
  getAssignment() {
    this.lessonSvc.get(this.id).subscribe(jr => {
      this.lesson = jr.data as Lesson;
    });
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.assignmentSvc.listAssignmentsById(this.id).subscribe(jr => {
      this.assignments = jr.data as Assignment[];
    });
  }
  delete(assignmentId: number) {
    this.assignmentSvc.delete(assignmentId).subscribe(jr => {
      this.getAssignment();
    });
  }
}
