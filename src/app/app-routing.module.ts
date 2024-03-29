import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginComponent } from './autenticacion/login/login.component';

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    // { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "tipohabitacion", loadChildren: () => import("~/app/tipohabitacion/tipohabitacion.module").then((m) => m.TipohabitacionModule) },
    { path: "camara", loadChildren: () => import("~/app/camera/camera.module").then((m) => m.CameraModule) },
    { path: "featured", loadChildren: () => import("~/app/featured/featured.module").then((m) => m.FeaturedModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule) },
    { path: "login", component: LoginComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
