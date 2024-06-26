import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  movieTitle = ""

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((x)=> {
      this.movieTitle = x["movieTitle"]
    })
  }

}
