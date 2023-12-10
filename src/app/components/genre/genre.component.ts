import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../service/movies.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html'
})
export class GenreComponent implements OnInit {

  id!: number;
  title!: string;
  loading: boolean = true;
  moviesGenre: any;

  constructor(
    private moviesService: MoviesService,
    private router: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.title = params["name"];
      console.log(this.id, this.title)
      this.getMoviesByGenre(this.id)
    });
  }

  getMoviesByGenre(id: number) {
    this.moviesService.getMoviesByGenre(id).subscribe((res: any) => {
      console.log(res)
      this.moviesGenre = res.results;
      this.loading = false;
    });
  }
}
