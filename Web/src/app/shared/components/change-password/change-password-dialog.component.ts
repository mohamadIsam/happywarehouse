import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ShowHidePasswordDirective } from '../directive/show-password.directive';
import { matchValidator } from '../../validations/validations';
import { AuthService } from '../../services/auth.service';
import { TokenHelperService } from '../../services/token-helper.service';
import { ChangePassword } from '../../model/change-password';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule, ShowHidePasswordDirective],
  templateUrl: 'change-password-dialog.component.html',
})
export class ChangePasswordDialogComponent implements OnInit {
  submitted: boolean = false;
  changePasswordForm = new FormGroup(
    {
      id: new FormControl(null),
      currentPassword: new FormControl(null, [Validators.required]),
      newPassword: new FormControl(null, [Validators.required]),
      repeatPassword: new FormControl(null, [Validators.required]),
    },
    {
      validators: [matchValidator('newPassword', 'repeatPassword')],
    }
  );
  userId: any;
  error: any

  constructor(
    private modalService: NgbModal,
    private authService: AuthService,
    private tokenHelperService: TokenHelperService,
  ) { }

  ngOnInit() {
    this.controls.id.setValue(this.userId)
  }

  get controls() {
    return this.changePasswordForm.controls;
  }

  dismiss() {
    this.modalService.dismissAll();
  }

  submit() {
    if (this.changePasswordForm.invalid) {
      this.submitted = true;
      return;
    }
    const userPassword = Object.assign(
      this.changePasswordForm.value
    ) as ChangePassword;

    this.changePassword(userPassword);
  }

  changePassword(userPassword: ChangePassword) {
    this.authService.changePassword(userPassword).subscribe({
      next: (res) => {
        if (res) {
          localStorage.setItem('token', res);
          this.tokenHelperService.decodeJwt();
        }
        this.dismiss();
      },
      error: err => {
        this.error = JSON.parse(err.error)
      }
    });
  }
}
