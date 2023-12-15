import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../service/movies.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Cast} from "../../models/cast";
import {MovieCreditsResponse} from "../../models/movie-credits-response";
import {Video} from "../../models/video";
import {VideosResponse} from "../../models/videos-response";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit {
  public id!: number;
  movie: any;
  casts: Cast[] = [];
  responsiveOptions: any
  video: Video | null = null;
  relatedVideos: any

  constructor(
    private moviesService: MoviesService,
    private router: ActivatedRoute
  ) {
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
    this.router.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.getMovie(this.id);
      this.getCasts(this.id);
      this.getVideos(this.id);
    })
  }


  getMovie(id: number) {
    this.moviesService.getMovie(id).subscribe((res) => {
      this.movie = res;
    });
  }

  getCasts(movieId: number) {
    this.moviesService.getMovieCredits(movieId).subscribe((res: MovieCreditsResponse) => {
      this.casts = res.cast;
    })
  }

  getVideos(movieId: number) {
    this.moviesService.getMovieVideos(movieId).subscribe(((res: VideosResponse) => {
      this.video = res.results[0];
      this.relatedVideos = res.results;
    }));
  }

  openDialogVideo(item: Video) {

  }
}
