import { ChangeDetectionStrategy, Component, inject, Input } from "@angular/core";
import { JobListing } from "../models";
import { RouterLink } from "@angular/router";
import { ToggleFavoriteListingDirective } from "../toggle-favorite-listings.directive";
import { FavoriteJobsService } from "../favorite-jobs.service";

@Component({
    selector: 'app-job-listings-table',
    standalone: true,
    templateUrl: './job-listings-table.component.html',
    styleUrl: './job-listings-table.component.css',
    imports: [RouterLink, ToggleFavoriteListingDirective],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobListingsTableComponent{

protected favoriteJobsService = inject(FavoriteJobsService);

    @Input({required: true})
    jobListingsData!: JobListing[];

    @Input()
    isLoading = false;
}