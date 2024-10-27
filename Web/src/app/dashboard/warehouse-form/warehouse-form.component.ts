import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LookupService } from '../../shared/services/lookup.service';
import { Lookup } from '../../shared/model/lookup';
import { SelectComponent } from '../../shared/components/select/select.component';
import { WarehouseService } from '../../shared/services/warehouse.service';
import { Warehouse } from '../../shared/model/warehouse';
import { NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemDialogComponent } from '../../shared/components/item-dialog/item-dialog.component';
import { ItemService } from '../../shared/services/item.service';
import { PaginatedResponse } from '../../shared/model/paginated-response';
import { Item } from '../../shared/model/item';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    DatePipe,
    CommonModule,
    SelectComponent,
    NgbPaginationModule
  ],
  templateUrl: 'warehouse-form.component.html',
})
export class WarehouseFormComponent implements OnInit {
  warehouseId!: number;
  submitted: boolean = false;
  warehouseForm = new FormGroup({
    id: new FormControl<number | null>(0),
    name: new FormControl(<string | null>null, Validators.required),
    address: new FormControl<string | null>(null, Validators.required),
    city: new FormControl<string | null>(null, Validators.required),
    countryId: new FormControl<number | null>(null, Validators.required)
  });
  countries: Lookup[] = [];
  paginatedResponse!: PaginatedResponse<Item>;

  constructor(
    private route: ActivatedRoute,
    private lookupService: LookupService,
    private warehouseService: WarehouseService,
    private router: Router,
    private modalService: NgbModal,
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.warehouseId = this.route.snapshot.params['id'];
    this.getCountries();
    this.getWarehouseById();
    this.getItemsByWarehouseId();
  }

  getItemsByWarehouseId(pageNumber: number = 1) {
    if (this.warehouseId)
      this.itemService.getItems(this.warehouseId, pageNumber).subscribe(res => this.paginatedResponse = res);
  }

  getCountries() {
    this.lookupService.getCountries().subscribe(res => {
      this.countries = res;
    })
  }

  get controls() {
    return this.warehouseForm.controls;
  }

  getWarehouseById() {
    if (this.warehouseId) {
      this.warehouseService.getWarehouseById(this.warehouseId).subscribe(warehouse => this.populateUserForm(warehouse));
    }
  }

  populateUserForm(warehouse: Warehouse) {
    this.warehouseForm.patchValue({
      id: warehouse.id,
      address: warehouse.address,
      city: warehouse.city,
      name: warehouse.name,
      countryId: warehouse.countryId
    });
  }

  createItem() {
    const modal = this.modalService.open(ItemDialogComponent);
    modal.componentInstance.warehouseId = this.warehouseId;
    modal.closed.subscribe(res => {
      if (res) {
        this.getItemsByWarehouseId();
      }
    })
  }

  submit() {
    this.submitted = true;
    if (this.warehouseForm.valid) {
      const warehouse = Object.assign(this.warehouseForm.value) as Warehouse;
      if (warehouse.id) {
        this.warehouseService.update(warehouse).subscribe(() => { })
      } else {
        this.warehouseService.create(warehouse).subscribe(() => {
          this.router.navigateByUrl('dashboard/warehouses')
        })
      }
    }
  }
}
