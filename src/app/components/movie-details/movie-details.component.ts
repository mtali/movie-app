import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../service/movies.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit {
  public id!: number;
  public video!: boolean;
  movie: any;
  loading: boolean = true;

  constructor(
    private moviesService: MoviesService,
    private router: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.getMovie(this.id);
    })
  }


  getMovie(id: number) {
    this.moviesService.getMovie(id).subscribe((res) => {
      this.movie = res;
      console.log(res);
    });
  }
}
