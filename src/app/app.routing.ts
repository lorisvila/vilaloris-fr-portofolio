import { Routes, RouterModule } from "@angular/router";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ProjetsPageComponent} from "./pages/projets-page/projets-page.component";
import {Error404Component} from "./pages/errors/error-404/error-404.component";
import { ParcoursPageComponent } from "./pages/parcours-page/parcours-page.component";

const routes: Routes = [
  {path: "Accueil", component: HomePageComponent},
  {path: "Parcours", component: ParcoursPageComponent},
  {path: "Projets", component: ProjetsPageComponent},
  {path: '', redirectTo: "Accueil", pathMatch: 'full'},
  {path: "**", component: Error404Component},
];

export const appRoutingModule = RouterModule.forRoot(routes);
