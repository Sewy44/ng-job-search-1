import { CommonModule } from "@angular/common";
import { Component, inject, Signal } from "@angular/core";
import { FavoriteJobsService } from "../favorite-jobs.service";
import { JobListing } from "../models";
import { JobListingsTableComponent } from "../shared/job-listings-table/job-listings-table.component";
import { RouterLink } from "@angular/router";
import { JobListingService } from "../job-listing.service";

@Component({
    selector: 'app-favorite-jobs-view',
    standalone: true,
    templateUrl: './favorite-jobs-view.component.html',
    styleUrl: './favorite-jobs-view.component.css',
    imports: [CommonModule, JobListingsTableComponent, RouterLink]
})
export class FavoriteJobsViewComponent {
    protected favoriteJobsService = inject(FavoriteJobsService);
    protected jobListingService = inject(JobListingService)
    protected data!: Signal<JobListing[]>

    constructor(){
        this.getFavoriteJobs()
    }

    getFavoriteJobs(): void {
        this.data = this.jobListingService.getFavoriteJobs();
    }
}