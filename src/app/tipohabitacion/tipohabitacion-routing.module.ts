import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TipohabitacionComponent } from "./tipohabitacion.component";

const routes: Routes = [
    { path: "", component: TipohabitacionComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class TipohabitacionRoutingModule { }
