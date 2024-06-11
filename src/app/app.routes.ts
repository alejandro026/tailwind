import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/auth/login/login.component';

export const routes: Routes = [
    {
        path: "admin",
        component: AdminComponent,
        // children: [
        //   { path: "dashboard", component: DashboardComponent },
        //   { path: "settings", component: SettingsComponent },
        //   { path: "tables", component: TablesComponent },
        //   { path: "maps", component: MapsComponent },
        //   { path: "", redirectTo: "dashboard", pathMatch: "full" },
        // ],
      },
      {
        path: "",
        component: LoginComponent
      }
];
