import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-confirm-dialog',
    standalone: true,
    imports: [TranslateModule],
    templateUrl: 'confirm-dialog.component.html'
})

export class ConfirmDialogComponent implements OnInit {

    constructor(private modalService: NgbActiveModal) { }

    ngOnInit() { }

    approve() {
        this.modalService.close(true);
    }

    dismiss() {
        this.modalService.close(false);
    }
}