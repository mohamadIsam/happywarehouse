import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SideMenuComponent } from '../shared/components/side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';
import { TokenHelperService } from '../shared/services/token-helper.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        SideMenuComponent
    ],
    templateUrl: 'dashboard.component.html',
    styleUrl: 'dashboard.component.css'
})

export class DashboardComponent implements OnInit {

    isOpen: boolean = false;

    constructor(private tokenService: TokenHelperService) { }

    ngOnInit() {
        this.tokenService.decodeJwt();
    }
}