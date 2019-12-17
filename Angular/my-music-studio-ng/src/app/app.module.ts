import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { SortPipe } from './pipe/sort.pipe';
import { BaseComponent } from './feature/base/base.component';
import { MenuComponent } from './core/menu/menu.component';
import { LessonListComponent } from './feature/lesson/lesson-list/lesson-list.component';
import { LessonEditComponent } from './feature/lesson/lesson-edit/lesson-edit.component';
import { LessonCreateComponent } from './feature/lesson/lesson-create/lesson-create.component';
import { LessonAssignmentComponent } from './feature/lesson/lesson-assignment/lesson-assignment.component';
import { AssignmentCreateComponent } from './feature/assignment/assignment-create/assignment-create.component';
import { AssignmentEditComponent } from './feature/assignment/assignment-edit/assignment-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserListComponent,
    UserEditComponent,
    UserLoginComponent,
    SortPipe,
    BaseComponent,
    MenuComponent,
    LessonListComponent,
    LessonEditComponent,
    LessonCreateComponent,
    LessonAssignmentComponent,
    AssignmentCreateComponent,
    AssignmentEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
