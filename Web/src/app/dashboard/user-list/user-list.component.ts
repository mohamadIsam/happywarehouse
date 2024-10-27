import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { User } from '../../shared/model/user';
import { UserService } from '../../shared/services/user.service';
import { PaginatedResponse } from '../../shared/model/paginated-response';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [TranslateModule, RouterLink, NgbPaginationModule],
  templateUrl: 'user-list.component.html',
  styleUrl: 'user-list.component.css',
})
export class UserListComponent implements OnInit {
  paginatedResponse!: PaginatedResponse<User>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(pageNumber: number = 1) {
    this.userService.getUsers(pageNumber).subscribe(res => (this.paginatedResponse = res));
  }
}
