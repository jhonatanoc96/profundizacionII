import { Component, OnInit } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from "nativescript-angular/router";
import { User } from "../../model/user";
import { LoginService } from "../../shared/login.service";
import { setString } from "tns-core-modules/application-settings";
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";



@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  isBusy = false;

  constructor(private routerExtensions: RouterExtensions, private loginService: LoginService, private page: Page) {
    this.user = new User();
    this.page.actionBarHidden = true;
  }

  ngOnInit(): void {
    this.user = new User();
  }

  isLoggingIn = true;

  toggleForm() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  submit() {
    if (this.isLoggingIn) {

      this.isBusy = true;

      // Perform the login
      if (!this.user.email || !this.user.pass) {
        this.alert("Debe ingresar un correo y una contraseña");
        return;
      }
      //Subscribir promesa
      this.loginService.autenticar(
        {
          email: this.user.email,
          password: this.user.pass
        }
      ).subscribe((result: any) => {
        console.log(result);
        console.log(result.token.access_token);
        setString("token", result.token.access_token);

        this.isBusy = false;
        this.routerExtensions.navigate(["/home"], { clearHistory: true }); //Limpiar el historial para deshabilitar el back

      }, (error) => {
        this.alert(error.error.message);
        this.isBusy = false;
      }

      );
    } else {
      // Perform the registration
    }
  }

  alert(message: string) {
    return alert({
      title: "Ejemplo Login",
      okButtonText: "OK",
      message: message
    });
  }

  forgotPassword() {
    prompt({
      title: "Recordar Contraseña",
      message: "Ingrese el correo electrónico que usaste para registrarte en la aplicación para restablecer la contraseña.",
      defaultText: "",
      okButtonText: "Ok",
      cancelButtonText: "Cancelar"
    }).then((data) => {
      if (data.result) {
        // Call the backend to reset the password
        alert({
          title: "Sistema de Control de Moteles",
          message: "Tu contraseña se restableció correctamente.",
          okButtonText: "Ok"
        })
      }
    });
  }

  onBusyChanged(args: EventData) {
    let indicator: ActivityIndicator = <ActivityIndicator>args.object;
    console.log("indicator.busy changed to: " + indicator.busy);
  }

}

