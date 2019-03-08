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
  private debounce: number;

  constructor(private movieService: MovieService) {
    this.searchQuery = 'ok';
    this.load();
  }

  private parseData = (data) => data.map(movie => ({
    ...movie,
    year: new Date(movie.release_date).getFullYear(),
  }))

  public onKey = event => {
    clearTimeout(this.debounce);
    this.debounce = setTimeout(
      () => this.load(event.target.value),
      250,
    );
  }

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
