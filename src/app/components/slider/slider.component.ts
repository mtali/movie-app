import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {MoviesService} from "../../service/movies.service";
import {delay} from "rxjs";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('fade', [
      transition('void => *', [style({opacity: 0}), animate('300ms', style({opacity: 1}))]),
      transition('* => void', [style({opacity: 1}), animate('300ms', style({opacity: 0}))]),
    ])
  ]
})
export class SliderComponent implements OnInit {
  movieData: Movie[] = [];
  current: number = 0;


  constructor(private moviesService: MoviesService) {

  }

  ngOnInit() {
    this.getNowPlayingMovies(1);
    // this.sliderTimer();
  }

  getNowPlayingMovies(page: number) {
    this.moviesService.getNowPlaying(page).pipe(delay(800)).subscribe(res => {
      this.movieData = res.results;
    });
  }

  sliderTimer() {
    setInterval(() => {
      if (this.movieData.length > 0) {
        this.current = ++this.current % this.movieData.length;
      }
    }, 5000);
  }
}
