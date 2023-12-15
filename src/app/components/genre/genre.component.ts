import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../service/movies.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Movie} from "../../models/movie";
import {MoviesResponse} from "../../models/movies-response";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html'
})
export class GenreComponent implements OnInit {

  id!: number;
  title!: string;
  loading: boolean = true;
  moviesGenre: Array<Movie> = [];

  constructor(
    private moviesService: MoviesService,
    private router: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.title = params["name"];
      this.getMoviesByGenre(this.id)
    });
  }

  getMoviesByGenre(id: number) {
    this.moviesService.getMoviesByGenre(id).subscribe((res: MoviesResponse) => {
      this.moviesGenre = res.results.filter(movie => {
        return movie.backdrop_path != null;
      });
      this.loading = false;
    });
  }
}
