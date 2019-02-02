import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movieData: Array<any>;
  public searchQuery: string;

  constructor(private movieService: MovieService) {
    this.searchQuery = 'ok';
    
    this.movieService = movieService;
  }

  public onKey = event => this.load(event.target.value);

  public load = value => this.movieService
    .get(value)
    .subscribe((data: any) => { console.log(data); this.movieData = data });

  ngOnInit() {
  }

}
