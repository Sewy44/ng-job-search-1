import { Directive, HostBinding, HostListener, inject, Input } from "@angular/core";
import { FavoriteJobsService } from "./favorite-jobs.service";
import { JobListingId } from "./models";

@Directive({
    selector: '[appToggleFavoriteListing]',
    standalone: true
})
export class toggleFavoriteListingDirective {
    private favoriteJobsService = inject(FavoriteJobsService);

    @Input({required: true})
    favoriteListingId!: JobListingId;

    @HostListener('click')
    toggleFavoriteListing() {
        this.favoriteJobsService.toggleFavoriteJobListing(this.favoriteListingId);
    }

    @HostBinding('class.highlight')
    get isFavoriteListing() {
        return this.favoriteJobsService.favoriteListings().includes(this.favoriteListingId);
    }
}