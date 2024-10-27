import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    const token = localStorage.getItem('token');
    if (token) return true;
    else {
        const router = inject(Router);
        router.navigateByUrl('login');
        localStorage.clear();
    }
    return false;
};