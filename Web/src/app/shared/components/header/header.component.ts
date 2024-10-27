import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { TokenHelperService } from '../../services/token-helper.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.css',
})
export class HeaderComponent implements OnInit {
  show: boolean = false;
  userName!: string;
  showNavbarMenu: boolean = false;

  constructor(
    private router: Router,
    private tokenHelperService: TokenHelperService
  ) { }

  ngOnInit(): void {
    this.userName = this.tokenHelperService.name;
  }

  showMenu() {
    this.show = !this.show;
  }

  showNavbar() {
    this.showNavbarMenu = !this.showNavbarMenu;
  }

  navigateToHome() {
    this.router.navigateByUrl(``);
  }

  navigateToAccountSettigs() {
    this.router.navigateByUrl(`dashboard/user`);
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
