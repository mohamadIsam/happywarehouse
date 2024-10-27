import { inject } from '@angular/core';
import {
    CanActivateFn,
    Router,
} from '@angular/router';
import { TokenHelperService } from '../services/token-helper.service';

export const authGuard: CanActivateFn = (route, state) => {
    const token = localStorage.getItem('token');
    const tokenHelperService = inject(TokenHelperService);
    if (token && !tokenHelperService.isExpired) return true;
    else {
        const router = inject(Router);
        router.navigateByUrl('login');
        localStorage.clear();
    }
    return false;
};