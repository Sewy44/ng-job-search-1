import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ToggleFavoriteListingDirective } from "../toggle-favorite-listings.directive";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-favorite-jobs-view',
    standalone: true,
    templateUrl: './favorite-jobs.component.html',
    styleUrl: './favorite-jobs.component.css',
    imports: [CommonModule, ToggleFavoriteListingDirective, RouterLink]
})
export class FavoriteJobsComponent {

}