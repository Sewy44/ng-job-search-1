import { CommonModule } from "@angular/common";
import { Component, inject, Signal } from "@angular/core";
import { ToggleFavoriteListingDirective } from "../toggle-favorite-listings.directive";
import { RouterLink } from "@angular/router";
import { FavoriteJobsService } from "../favorite-jobs.service";
import { JobListing } from "../models";

@Component({
    selector: 'app-favorite-jobs-view',
    standalone: true,
    templateUrl: './favorite-jobs-view.component.html',
    styleUrl: './favorite-jobs-view.component.css',
    imports: [CommonModule, ToggleFavoriteListingDirective, RouterLink]
})
export class FavoriteJobsComponent {
    protected favoriteJobsService = inject(FavoriteJobsService);
    protected data!: Signal<JobListing[]>

    constructor(){
        this.getFavoriteJobs()
    }

    getFavoriteJobs(): void {
        
    }
}