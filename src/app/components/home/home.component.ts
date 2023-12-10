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
  responsiveOptions: any

  constructor(private moviesService: MoviesService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ]
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
