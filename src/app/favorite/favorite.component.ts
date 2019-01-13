import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.scss"]
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;
  rating: number = 0;
  savedRating: number;
  stars = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit() {}

  onStarClicked(rating: number) {
    if (rating === this.savedRating) {
      this.rating = 0;
      this.savedRating = 0;
    } else {
      this.rating = rating;
      this.savedRating = rating;
    }
  }

  onStarMouseEnter(rating: number) {
    this.savedRating = this.rating;
    this.rating = rating;
  }

  onStarMouseLeave() {
    this.rating = this.savedRating;
  }

  isRated(starOrder: number) {
    return this.rating >= starOrder;
  }
}
