import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Assignment } from 'src/app/model/assignment';
import { AssignmentService } from 'src/app/service/assignment.service';
import { LessonService } from 'src/app/service/lesson.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-assignment-edit',
  templateUrl: './assignment-edit.component.html',
  styleUrls: ['./assignment-edit.component.css']
})
export class AssignmentEditComponent extends BaseComponent implements OnInit {
  title: string = "Assignment Edit";
  assignment: Assignment = new Assignment();
  id: number = 0;

  constructor(private assignmentSvc: AssignmentService,
    private lessonsSvc: LessonService,
    private router: Router,
    private route: ActivatedRoute,
    private loc: Location,
    protected sysService: SystemService) {
    super(sysService)
  }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.assignmentSvc.get(this.id).subscribe(jr => {
      this.assignment = jr.data as Assignment;
    });
  }
  save(): void {
    this.assignmentSvc.save(this.assignment).subscribe(jr => {
      this.router.navigateByUrl("/lessons/assignment/" + this.assignment.lesson.id);
    });
  }
}
