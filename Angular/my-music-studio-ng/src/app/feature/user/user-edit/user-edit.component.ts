import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent extends BaseComponent implements OnInit {
  title: string = "User Edit";
  user: User = new User();
  id: number = 0;

  constructor(private userSvc: UserService,
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
    this.userSvc.get(this.id).subscribe(jr => {
      this.user = jr.data as User;
    });
  }

  save(): void {
    this.userSvc.save(this.user).subscribe(jr => {
      console.log("edited user...");
      console.log(jr);
      console.log(this.user);
      this.router.navigateByUrl("/users/list");
    });
  }
  backClicked(){
    this.loc.back();
  }
}
