import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { SystemService } from 'src/app/service/system.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { JsonResponse } from 'src/app/model/json-response.class';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends BaseComponent implements OnInit {
  title: string = "User-List";
  users: User[] = [];
  id: number = 0;
  jr: JsonResponse;

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
    this.userSvc.list().subscribe(jr => {
      this.users = jr.data as User[];
      console.log(this.users);
    });
  }

  delete(userId: number) {
    this.userSvc.delete(userId).subscribe(jr => {
      this.userSvc.list().subscribe(jr => {
        this.users = jr.data as User[];
        console.log(this.users);
      });
    })
  }
}
