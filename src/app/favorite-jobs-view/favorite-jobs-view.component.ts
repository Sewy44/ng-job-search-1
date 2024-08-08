import { CommonModule } from "@angular/common";
import { Component, inject, Signal } from "@angular/core";
import { ToggleFavoriteListingDirective } from "../toggle-favorite-listings.directive";
import { FavoriteJobsService } from "../favorite-jobs.service";
import { JobListing } from "../models";
import { JobListingsTableComponent } from "../shared/job-listings-table/job-listings-table.component";

@Component({
    selector: 'app-favorite-jobs-view',
    standalone: true,
    templateUrl: './favorite-jobs-view.component.html',
    styleUrl: './favorite-jobs-view.component.css',
    imports: [CommonModule, ToggleFavoriteListingDirective, JobListingsTableComponent]
})
export class FavoriteJobsViewComponent {
    protected favoriteJobsService = inject(FavoriteJobsService);
    protected data!: Signal<JobListing[]>

    constructor(){
        this.getFavoriteJobs()
    }

    getFavoriteJobs(): void {
        this.data = this.favoriteJobsService.getFavoriteJobs()
    }
}