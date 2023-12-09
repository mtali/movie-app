import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../service/movies.service";
import {GenresResponse} from "../../models/genres-response";
import {Genre} from "../../models/genre";

@Component({
  selector: 'app-genres-list',
  templateUrl: './genre-list.component.html'
})
export class GenreListComponent implements OnInit {

  genres: Genre[] = [];
  loader: boolean = true;

  constructor(private moviesService: MoviesService) {

  }

  ngOnInit() {
    this.moviesService.getGenres().subscribe((res: GenresResponse) => {
      this.genres = res.genres;
      this.loader = false;
    })
  }
}
