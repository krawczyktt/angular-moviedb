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
    this.load();
  }

  private parseData = (data) => data.map(movie => ({
    ...movie,
    year: new Date(movie.release_date).getFullYear(),
  }))

  public onKey = event => this.load(event.target.value);

  public load = (value = '') => (value
    ? this.movieService.search(value)
    : this.movieService.get())
      .subscribe((data: any) => {
        console.log(data);
        this.movieData = this.parseData(data.results);
      });

  ngOnInit() {
  }

}
