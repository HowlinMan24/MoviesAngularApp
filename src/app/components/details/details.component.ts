import {Component, OnInit, OnChanges, AfterContentInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {

  movieId = ''

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((x) => {
      this.movieId = x["id"]

      console.log("Movie Id = " + this.movieId)
    })
  }

  ngOnChanges(): void {
    console.log('ngOnChanges called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
  }
}
