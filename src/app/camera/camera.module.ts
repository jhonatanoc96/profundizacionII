import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CameraRoutingModule } from "./camera-routing.module";
import { CameraComponent } from "./camera.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CameraRoutingModule
    ],
    declarations: [
        CameraComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CameraModule { }
