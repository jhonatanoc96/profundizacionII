import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { FeaturedService } from "../shared/featured.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Featured",
    templateUrl: "./featured.component.html",
    styleUrls: ['./featured.component.css']

})
export class FeaturedComponent implements OnInit {

    greenSelected = false;
    redSelected = false;

    constructor(private routerExtensions: RouterExtensions, private featuredService: FeaturedService) {

    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    encenderLedRojo() {
        this.cambiarEstado("red", 1);
    }

    apagarLedRojo() {
        this.cambiarEstado("red", 0);
    }

    encenderLedVerde() {
        this.cambiarEstado("green", 1);
    }

    apagarLedVerde() {
        this.cambiarEstado("green", 0);
    }


    cambiarEstado(color: string, accion: number) {

        //Subscribir promesa
        this.featuredService.cambiarEstado(
            {
                state: accion
            }, color
        ).subscribe((result: any) => {
            console.log(result);

            console.log("subscribe");

        }, (error) => {
            console.log("error");
            this.alert(error.error.message);
        }

        );

    }

    alert(message: string) {
        return alert({
            title: "Cambiar Estado",
            okButtonText: "OK",
            message: message
        });
    }

}
