import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../service/movies.service";

@Component({
  selector: 'app-genres-list',
  templateUrl: './genre-list.component.html'
})
export class GenreListComponent implements OnInit {

  genres: any;
  loader: boolean = true;

  constructor(private moviesService: MoviesService) {

  }

  ngOnInit() {
    this.moviesService.getGenres().subscribe((res: any) => {
      this.genres = res.genres;
      this.loader = false;
      console.log(res);
    })
  }
}
