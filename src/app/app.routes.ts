import { Routes } from "@angular/router";
import { JobListingsViewComponent } from "./job-listings-view/job-listings-view.component";
import { FavoriteJobsViewComponent } from "./favorite-jobs-view/favorite-jobs-view.component";

export const routes: Routes = [
    {path: "", component: JobListingsViewComponent},
    {path: "favorites", component: FavoriteJobsViewComponent}
];

