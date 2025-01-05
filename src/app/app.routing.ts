import { Routes, RouterModule } from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ProjetsPageComponent} from "./pages/projets-page/projets-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {BdCV0BhmPageComponent} from "./pages/projets-page/project/bd-c-v0-bhm-page/bd-c-v0-bhm-page.component";
import {Error404Component} from "./pages/errors/error-404/error-404.component";
import {ErrorDevComponent} from "./pages/errors/error-dev/error-dev.component";

const routes: Routes = [
  {path: "Accueil", component: HomePageComponent},
  {path: "Contact", component: ContactPageComponent},
  {path: "Passions", component: ErrorDevComponent},
  {path: "Parcours", component: ErrorDevComponent},
  {path: "Projets", children: [
    {path: "", component: ProjetsPageComponent},
    {path: "BdC_v0_Bischheim", component: BdCV0BhmPageComponent},
    {path:"**", redirectTo: ""},
  ]},
  {path: '', redirectTo: "Accueil", pathMatch: 'full'},
  {path: "**", component: Error404Component},
];

export const appRoutingModule = RouterModule.forRoot(routes);
