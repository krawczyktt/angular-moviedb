import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movieData: Array<any>;
  public dataLength: Number;
  public searchQuery: string;

  constructor(private movieService: MovieService) {
    this.searchQuery = 'ok';
    this.load();
  }

  public onKey = event => this.load(event.target.value);

  public load = (value = '') => (value
    ? this.movieService.search(value)
    : this.movieService.get())
      .subscribe((data: any) => {
        console.log(data);
        this.movieData = data.results;
        this.dataLength = data.length;
      });

  ngOnInit() {
  }

}
