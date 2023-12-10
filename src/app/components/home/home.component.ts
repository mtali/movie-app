import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../service/movies.service";
import {delay} from "rxjs";
import {MoviesResponse} from "../../models/movies-response";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  loading: boolean = true;
  nowPlaying: Movie[] = [];

  constructor(private moviesService: MoviesService) {

  }

  ngOnInit() {
    this.trendingMovies(1)
  }

  trendingMovies(page: number) {
    this.moviesService.getNowPlaying(page).pipe(delay(2000)).subscribe((res: MoviesResponse) => {
      this.nowPlaying = res.results;
      this.loading = false;
    });
  }

}
