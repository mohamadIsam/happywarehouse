import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./dashboard.component').then(c => c.DashboardComponent),
        loadChildren: () => [
            {
                path: 'users',
                loadComponent: () => import("./user-list/user-list.component").then(c => c.UserListComponent)
            },
            {
                path: 'user/:id',
                loadComponent: () => import("./user-form/user-form.component").then(c => c.UserFormComponent)
            },
            {
                path: 'user',
                loadComponent: () => import("./user-form/user-form.component").then(c => c.UserFormComponent)
            },
            {
                path: 'warehouses',
                loadComponent: () => import("./warehouse-list/warehouse-list.component").then(c => c.WarehouseListComponent)
            },
            {
                path: 'warehouse/:id',
                loadComponent: () => import("./warehouse-form/warehouse-form.component").then(c => c.WarehouseFormComponent)
            },
            {
                path: 'warehouse',
                loadComponent: () => import("./warehouse-form/warehouse-form.component").then(c => c.WarehouseFormComponent)
            },
            {
                path: 'log',
                loadComponent: () => import("./log-files/log-files.component").then(c => c.LogFilesComponent)
            },
            {
                path: '',
                redirectTo: 'warehouses',
                pathMatch: 'full'
            }
        ]
    }
];