import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movieData: Array<any>;

  constructor(private movieService: MovieService) {
    movieService.get().subscribe((data: any) => {
      this.movieData = data
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
