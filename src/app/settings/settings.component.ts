import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Rfid } from "../model/rfid";
import { SettingsService } from "../shared/settings.service";
import { RouterExtensions } from "nativescript-angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs"
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "Settings",
    templateUrl: "./settings.component.html",
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    //Array para mostrar en la vista
    rfid: Array<Rfid>
    //variable para guardar el valor que se lee
    rfidLeido = "";
    //Variable para almacenar el valor que se va a guardar en BBDD
    nuevo = "";

    constructor(private router: RouterExtensions,
        private settingsService: SettingsService) {

    }

    ngOnInit(): void {
        this.settingsService.getRfid().
            subscribe((result: any) => {
                this.rfid = result.rfids;
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
            title: "RFID",
            okButtonText: "OK",
            message: message
        });
    }

    write() {
        dialogs.prompt({
            title: "RFID",
            message: "Mensaje para escribir sobre la tarjeta.",
            okButtonText: "OK",
            cancelButtonText: "Cancelar",
            inputType: dialogs.inputType.text
        }).then(r => {
            //Subscribir promesa
            this.settingsService.writeRfid({
                texto: r.text
            }
            ).subscribe((result: any) => {
                this.alert("Se ha escrito sobre la tarjeta: " + result.respuesta);
            }, (error) => {
                this.alert(error.error.message);
            }
            );

        });
    }

    read() {

        //Subscribir promesa
        this.settingsService.readRfid().
            subscribe((result: any) => {
                this.nuevo = result.respuesta.split("|");

                this.alert("Se ha leído la tarjeta: \n" + "ID: " + this.nuevo[0] + 
                "\n TEXTO: " + this.nuevo[1]);
            }, (error) => {
                this.alert(error.error.message);
            }
            );

    }

    add() {

        dialogs.confirm({
            title: "RFID",
            message: "¿Desea almacenar el registro en la base de datos?",
            okButtonText: "Ok",
            cancelButtonText: "Cancelar",
        }).then(result => {

            

            if (result == true) {

                //Subscribir promesa ---- LEER RFID
                this.settingsService.readRfid().
                    subscribe((data: any) => {

                        this.nuevo = data.respuesta.split("|");

                        //ALMACENAR REGISTRO
                        this.settingsService.addRfid({
                            identificador: this.nuevo[0],
                            texto: this.nuevo[1]
                        }).subscribe((data2: any) => { 
                            this.nuevo = "";
                        }, (error2) => {
                            console.log("falló almacenar registro")
                            this.nuevo = "";
                        }

                        );

                    }, (error) => {
                        this.alert(error.error.message);
                    }
                    );
            } else {
                // NO HACER NADA
            }

        });

    }


}
