import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { TipohabitacionService } from "../shared/tipohabitacion.service"
import { TipoHabitacion } from "../model/tipohabitacion";
import { alert, prompt } from "tns-core-modules/ui/dialogs"

@Component({
    selector: "ns-tipohabitacion",
    templateUrl: "./tipohabitacion.component.html",
})
export class TipohabitacionComponent implements OnInit {


    // Se crea objeto de tipo "Tipo de habitación"

    tipohabitacion: Array<TipoHabitacion>
    constructor(private router: RouterExtensions,
        private TipoHabitacionService: TipohabitacionService) {

    }

    ngOnInit(): void {
        this.TipoHabitacionService.getTipoHabitacion().
            subscribe((result: any) => {
                this.tipohabitacion = result.tipohabitaciones;
            }, (error) => {
                this.alert(error.error.message);
            }
            );
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }


    alert(message: string) {
        return alert({
            title: "Ejemplo Login",
            okButtonText: "OK",
            message: message
        });
    }

    salir() {
        this.router.navigate(["/login", { clearHistory: true }]);
    }

}