import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.scss"]
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;
  rating: number = 0;
  stars = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit() {}

  onStarClicked(rating: number) {
    this.rating = rating;
  }

  isRated(starOrder: number) {
    return this.rating >= starOrder;
  }
}
