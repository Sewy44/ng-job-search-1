import { RouterModule, Routes } from "@angular/router";
import { JobListingsViewComponent } from "./job-listings-view/job-listings-view.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
    {path: "", component: JobListingsViewComponent},
    {path: "favorites", component: FavoriteJobsComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
    exports: [RouterModule]
})

export class AppRoutingModule{}
