import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { WelocmePageComponent } from "./layouts/welocme-page/welocme-page.component";
import { LoginComponent } from "./layouts/login/login.component";
import { RegisterComponent } from "./layouts/register/register.component";
import { ResetPasswordComponent } from "./layouts/reset-password/reset-password.component";

const routes: Routes = [
  {
    path: "",
    component:WelocmePageComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:RegisterComponent
  },
  {
    path:"reset",
    component:ResetPasswordComponent
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "home",
        loadChildren: () => import ("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
      }
    ]
  }, {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/auth-layout/auth-layout.module").then(m => m.AuthLayoutModule)
      }
    ]
  },
  {
    path: "**",
    component:WelocmePageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
