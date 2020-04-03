import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TipohabitacionRoutingModule } from "./tipohabitacion-routing.module";
import { TipohabitacionComponent } from "./tipohabitacion.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TipohabitacionRoutingModule
    ],
    declarations: [
        TipohabitacionComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TipohabitacionModule { }
