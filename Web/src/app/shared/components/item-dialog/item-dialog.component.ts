import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from '../../model/item';

@Component({
    selector: 'app-item-dialog',
    standalone: true,
    imports: [TranslateModule, ReactiveFormsModule],
    templateUrl: 'item-dialog.component.html'
})
export class ItemDialogComponent implements OnInit {

    itemId!: number;
    warehouseId!: number;
    submitted: boolean = false;
    error: any;

    itemForm = new FormGroup({
        id: new FormControl<number>(0),
        name: new FormControl<string | null>(null, Validators.required),
        sku: new FormControl<string | null>(null),
        qty: new FormControl<number | null>(1, [Validators.required, Validators.min(1)]),
        costPrice: new FormControl<number | null>(null, [Validators.required]),
        mSRPPrice: new FormControl<number | null>(null, [Validators.required]),
        warehouseId: new FormControl<number | null>(null, [Validators.required]),
    });

    constructor(private itemService: ItemService, private modalService: NgbActiveModal) { }

    ngOnInit() {
        this.controls.warehouseId.setValue(this.warehouseId);
        if (this.itemId)
            this.controls.id.setValue(this.itemId);
    }

    get controls() {
        return this.itemForm.controls;
    }

    dismiss() {
        this.modalService.dismiss();
    }

    submit() {
        this.submitted = true;
        console.log(this.itemForm, this.itemForm.valid)
        if (this.itemForm.valid) {
            const item = Object.assign(this.itemForm.value) as Item;
            this.itemService.create(item).subscribe(res => {
                this.modalService.close(true)
            })
        }
    }
}