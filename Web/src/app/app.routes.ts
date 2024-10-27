import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.routes').then(c => c.routes),
        canActivate: [authGuard]
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./login/login.component').then(c => c.LoginComponent),
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
