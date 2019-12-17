import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/feature/base/base.component';
import { MenuItem } from 'src/app/model/menu-item.class';
import { SystemService } from 'src/app/service/system.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseComponent implements OnInit {
  menuItems: MenuItem[] = [];
  constructor(protected sysSvc: SystemService) {
    super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit();
    this.sysSvc.checkLogin();
    
    if (this.sysSvc.isAdmin()) {
      this.menuItems = [
        new MenuItem("Users", "/users/list", "Users List"),
        new MenuItem("Lessons", "/lessons/list", "Lessons List"),
        new MenuItem("Login", "/users/login", "Login"),
      ];
    }
  }
}
