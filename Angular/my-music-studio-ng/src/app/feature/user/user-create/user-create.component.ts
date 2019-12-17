import { User } from 'src/app/model/user.class';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent extends BaseComponent implements OnInit {
  title: string = "User Create";
  user: User = new User();

  constructor(private userSvc: UserService,
    private router: Router,
    protected sysSvc: SystemService) {
      super(sysSvc);
     }

  ngOnInit() {
    super.ngOnInit();
    this.sysSvc.checkLogin();
  }

  save(): void {
    this.userSvc.save(this.user).subscribe(jr => {
      console.log("saved user...");
      console.log(this.user);
      this.router.navigateByUrl("/users/list");
    });
  }
}
