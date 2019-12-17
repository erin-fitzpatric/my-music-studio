import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Lesson } from 'src/app/model/lesson.class';
import { LessonService } from 'src/app/service/lesson.service';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { Location } from '@angular/common';
import { User } from 'src/app/model/user.class';

@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.css']
})
export class LessonEditComponent extends BaseComponent implements OnInit {
  title: string = "Lesson Edit";
  lesson: Lesson = new Lesson();
  id: number = 0;
  users: User[] = [];
  constructor(private lessonSvc: LessonService,
    private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private loc: Location,
    protected sysSvc: SystemService) {
    super(sysSvc);
  }
  ngOnInit() {
    super.ngOnInit();
    this.sysSvc.checkLogin();
    // populate list of users
    this.userSvc.list().subscribe(jr => {
      this.users = jr.data as User[];
    });
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.lessonSvc.get(this.id).subscribe(jr => {
      this.lesson = jr.data as Lesson;
    });
  }
  save(): void {
    this.lessonSvc.save(this.lesson).subscribe(jr => {
      this.router.navigateByUrl("/lessons/list");
    })
  }
  backClicked() {
    this.loc.back();
  }
  compUser(a: User, b: User): boolean {
    return a && b && a.id === b.id;
  }
}
