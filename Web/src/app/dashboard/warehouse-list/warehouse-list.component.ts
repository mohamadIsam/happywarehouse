import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { PaginatedResponse } from '../../shared/model/paginated-response';
import { Warehouse } from '../../shared/model/warehouse';
import { WarehouseService } from '../../shared/services/warehouse.service';
import { PaginationComponent } from 'ngx-bootstrap/pagination';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [TranslateModule, RouterLink, PaginationComponent, NgbPaginationModule],
  templateUrl: 'warehouse-list.component.html',
  styleUrl: 'warehouse-list.component.css',
})
export class WarehouseListComponent implements OnInit {
  paginatedResponse!: PaginatedResponse<Warehouse>;

  constructor(private userService: WarehouseService) { }

  ngOnInit() {
    this.getWarehouses();
  }

  getWarehouses(pageNumber: number = 1) {
    this.userService.getWarehouses(pageNumber).subscribe(res => (this.paginatedResponse = res));
  }
}
