import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/model/assignment';
import { BaseComponent } from '../../base/base.component';
import { Lesson } from 'src/app/model/lesson.class';
import { AssignmentService } from 'src/app/service/assignment.service';
import { LessonService } from 'src/app/service/lesson.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-assignment-create',
  templateUrl: './assignment-create.component.html',
  styleUrls: ['./assignment-create.component.css']
})
export class AssignmentCreateComponent extends BaseComponent implements OnInit {
  title: string = "Assignment Create";
  assignment: Assignment = new Assignment();
  lesson: Lesson = new Lesson();
  id: number = 0;

  constructor(private assignmentSvc: AssignmentService,
      private lessonSvc: LessonService,
      private router: Router,
      private route: ActivatedRoute,
      private loc: Location,
      protected sysService: SystemService) {
        super(sysService)
       }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.lessonSvc.get(this.id).subscribe(jr => {
      this.lesson = jr.data as Lesson;
    });
  }

  save(): void {
    this.assignment.lesson = this.lesson;
    this.assignmentSvc.save(this.assignment).subscribe(jr => {
      this.router.navigateByUrl("/lessons/assignment/"+this.id);
    })
  }
}
