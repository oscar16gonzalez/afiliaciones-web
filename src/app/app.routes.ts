import { RouterModule, Routes } from "@angular/router";
import { MembershipComponent } from "./components/membership/membership.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { LoginComponent } from './components/auth/login/login.component';

const APP_ROUTES: Routes = [
    { path: "register", component : RegisterComponent },
    { path: "membership", component : MembershipComponent },
    { path: "login", component: LoginComponent},
    // { path: "home", loadChildren: "./home/home.module#HomeModule" },
    // { path: "about", loadChildren: "./about/about.module#AboutModule" },
    // { path: "contact", loadChildren: "./contact/contact.module#ContactModule" },
    { path: "**", redirectTo: "/register" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);