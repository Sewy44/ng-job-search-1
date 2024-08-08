import { Component, inject, Signal } from "@angular/core";
import { JobListingService } from "../job-listing.service";
import { JobListing } from "../models";
import { CommonModule } from "@angular/common";
import { JobListingsTableComponent } from "../shared/job-listings-table/job-listings-table.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-job-listings-view",
    standalone: true,
    imports: [CommonModule, JobListingsTableComponent, RouterLink],
    templateUrl: './job-listings-view.component.html',
    styleUrl: './job-listings-view.component.css'
})
export class JobListingsViewComponent {
    protected jobListingService = inject(JobListingService)
    protected data!: Signal<JobListing[]>

    constructor(){
        this.getAllJobs();
    }

    getAllJobs(): void{
        this.data = this.jobListingService.getAllJobs();
    }
}