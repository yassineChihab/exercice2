import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie.Model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {
    movie!:Movie


  constructor(private movieService:MoviesService,private route:ActivatedRoute,private router: Router){}
  ngOnInit(): void {
    this.getMovie();
  }
  getMovie(){
    this.movieService.getSingleMovie(this.route.snapshot.params['id']).subscribe({
            next:(data)=>{
              this.movie=data;
            },error:err=>{
              console.log(err)
            }
    })
  }

}
