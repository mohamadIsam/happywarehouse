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
import { UserService } from '../../shared/services/user.service';
import { emailValidator } from '../../shared/validations/validations';
import { User } from '../../shared/model/user';
import { LookupService } from '../../shared/services/lookup.service';
import { Lookup } from '../../shared/model/lookup';
import { SelectComponent } from '../../shared/components/select/select.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChangePasswordDialogComponent } from '../../shared/components/change-password/change-password-dialog.component';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    DatePipe,
    CommonModule,
    SelectComponent,
    NgbModule
  ],
  templateUrl: 'user-form.component.html',
})
export class UserFormComponent implements OnInit {
  userId!: number;
  submitted: boolean = false;
  userForm = new FormGroup({
    id: new FormControl(0),
    fullName: new FormControl<string | null>(null, [Validators.required]),
    roleId: new FormControl<number | null>(null, Validators.required),
    email: new FormControl<string | null>(null, [
      Validators.required,
      emailValidator(),
    ]),
    isActive: new FormControl<boolean>(true, [Validators.required]),
  });
  roles: Lookup[] = [];
  error: any;

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private lookupService: LookupService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    this.getRoles();
    this.getUser();
  }

  getRoles() {
    this.lookupService.getRoles().subscribe(res => {
      this.roles = res;
    })
  }

  get controls() {
    return this.userForm.controls;
  }

  getUser() {
    if (this.userId) {
      this.userService.getUserById(this.userId).subscribe(user => this.populateUserForm(user));
    }
  }

  populateUserForm(user: User) {
    this.userForm.patchValue({
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      roleId: user.roleId,
      isActive: user.isActive,
    });
  }

  openChangePassword() {
    const modal = this.modalService.open(ChangePasswordDialogComponent)
    modal.componentInstance.userId = this.userId;
  }

  deleteUser() {
    const modal = this.modalService.open(ConfirmDialogComponent)
    modal.result.then(approve => {
      if (approve) {
        this.userService.delete(this.userId).subscribe(() => {
          this.router.navigateByUrl('dashboard/users')
        })
      }
    })
  }

  get isAdmin() {
    return this.roles.find(item => item.id == this.controls.roleId.value)?.name == 'Admin'
  }

  submit() {
    this.submitted = true;
    if (this.userForm.valid) {
      const user = Object.assign(this.userForm.value) as User;
      if (user.id) {
        this.userService.update(user).subscribe(() => { })
      } else {
        this.userService.create(user).subscribe({
          next: () => {
            this.router.navigateByUrl('dashboard/users')
          }, error: err => {
            try {
              this.error = JSON.parse(err.error)
            } catch (ex) {
              this.error = err.error;
            }
          }
        })
      }
    }
  }
}
