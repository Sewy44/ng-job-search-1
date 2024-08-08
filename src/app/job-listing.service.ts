import { inject, Injectable, signal, Signal } from "@angular/core";
import { JobListing } from "./models";
import { toObservable } from '@angular/core/rxjs-interop';
import { FavoriteJobsService } from "./favorite-jobs.service";
import { combineLatestWith, map } from "rxjs";

@Injectable({
providedIn: 'root'
})
export class JobListingService {
    private getting = signal(false);
    readonly isGettingJobs = this.getting.asReadonly();
    private jobListingResults = signal<JobListing[]>([]);
    private favoriteListingResults = signal<JobListing[]>([])
    private favorites$ = toObservable(inject(FavoriteJobsService).favoriteListings);
    private jobListingResultsObervable = toObservable(this.jobListingResults);


    filteredJobListings$ = this.jobListingResultsObervable.pipe(
      combineLatestWith(this.favorites$),
      map(([jobListings, favoriteListings]) => {
        const test = jobListings.filter(job => favoriteListings.includes(job.id))
        this.favoriteListingResults.set(test);
      })
    );    

    getAllJobs(): Signal<JobListing[]>{
      fetch('/jobs').then(response => response.json()).then((data: JobListing[]) => {
        this.jobListingResults.set(data);
        this.getting.set(false);
      })
       return this.jobListingResults.asReadonly()
    }

    getFavoriteJobs(): Signal<JobListing[]>{
        return this.favoriteListingResults.asReadonly()
    }
}

