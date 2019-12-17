import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { LessonListComponent } from './feature/lesson/lesson-list/lesson-list.component';
import { LessonCreateComponent } from './feature/lesson/lesson-create/lesson-create.component';
import { LessonEditComponent } from './feature/lesson/lesson-edit/lesson-edit.component';
import { LessonAssignmentComponent } from './feature/lesson/lesson-assignment/lesson-assignment.component';
import { AssignmentEditComponent } from './feature/assignment/assignment-edit/assignment-edit.component';
import { AssignmentCreateComponent } from './feature/assignment/assignment-create/assignment-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'users/login', component: UserLoginComponent },
  { path: 'users/list', component: UserListComponent },
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'lessons/list', component: LessonListComponent },
  { path: 'lessons/create', component: LessonCreateComponent },
  { path: 'lessons/assignment/:id', component: LessonAssignmentComponent },
  { path: 'lessons/edit/:id', component: LessonEditComponent },
  { path: 'assignments/edit/:id', component: AssignmentEditComponent },
  { path: 'assignments/create/:id', component: AssignmentCreateComponent },
  { path: '**', component: UserListComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
