import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TokenHelperService } from '../../services/token-helper.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [TranslateModule, RouterModule, CommonModule],
  templateUrl: 'side-menu.component.html',
  styleUrl: 'side-menu.component.css',
})
export class SideMenuComponent implements OnInit {

  constructor(protected tokenService: TokenHelperService) { }

  ngOnInit(): void { }
}
