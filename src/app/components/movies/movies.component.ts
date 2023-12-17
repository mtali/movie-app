import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../service/movies.service";
import {delay} from "rxjs";
import {Movie} from "../../models/movie";
import {MoviesResponse} from "../../models/movies-response";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

  loading: boolean = true;
  searchQuery: string = "";
  topRatedMovies: Movie[] = [];
  totalResults: number = 0;
  searchResults: Movie[] = [];
  first: number = 0;

  constructor(private moviesService: MoviesService) {
  }


  ngOnInit() {
    this.getTopRatedMovies(1);
  }

  getTopRatedMovies(page: number) {
    this.loading = true;
    this.moviesService.getTopRatedMovies(page).pipe(delay(800)).subscribe((res: MoviesResponse) => {
      this.topRatedMovies = this.shuffle(res.results);
        this.totalResults = res.total_results;
        this.loading = false;
      }
    );
  }

  searchMovies() {
    this.loading = true;
    if (!this.searchResults) {
      this.loading = false;
      this.searchResults = [];
    } else {
      this.moviesService.searchMovies(this.searchQuery).subscribe(res => {
        this.searchResults = res.results.filter(movie => {
          return movie.backdrop_path != null
        });
        this.loading = false;
      })
    }
  }

  onPageChange(event: any) {
    const page = event.page + 1;
    this.getTopRatedMovies(page);
  }

  private shuffle<T>(array: T[]): T[] {
    const shuffledArray = array.slice();
    let currentIndex = shuffledArray.length;
    let randomIndex: number
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[currentIndex]];
    }
    return shuffledArray;
  }
}
