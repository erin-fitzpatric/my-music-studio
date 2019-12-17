import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { Lesson } from 'src/app/model/lesson.class';
import { User } from 'src/app/model/user.class';
import { LessonService } from 'src/app/service/lesson.service';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-lesson-create',
  templateUrl: './lesson-create.component.html',
  styleUrls: ['./lesson-create.component.css']
})
export class LessonCreateComponent extends BaseComponent implements OnInit {
  title: string = "Lesson Create";
  lesson: Lesson = new Lesson();
  users: User[] = [];

  constructor(private lessonSvc: LessonService,
              private userSvc: UserService,
              private router: Router,
              protected sysSvc: SystemService) {
                super(sysSvc);
               }

  ngOnInit() {
    super.ngOnInit();
    this.sysSvc.checkLogin();
    //populate list of users
    this.userSvc.list().subscribe(jr => {
      this.users = jr.data as User[];
      console.log("users: ", this.users);
    });
  }

  save(): void {
    console.log("attempting to save a lesson:", this.lesson);
    this.lessonSvc.save(this.lesson).subscribe(jr => {
      console.log("saved lesson...");
      console.log(this.lesson);
      this.router.navigateByUrl("/lessons/list");
    })
  }
}
