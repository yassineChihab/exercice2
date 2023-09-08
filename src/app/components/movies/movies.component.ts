import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie.Model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies!:Movie[];
  errorMessage!:string;

  constructor(private movieService:MoviesService,private router:Router){}


  ngOnInit(): void {
    this.HandleGetAllMovies();
  }

  HandleGetAllMovies(){
    this.movieService.getAllMovies().subscribe({
      next: (data)=>{
            this.movies=data
      },error: err=>{
        this.errorMessage=err;
        console.log(err);
      }
    })
  }
  HandleFavouriteMovies(){
    this.movieService.getFavMovies().subscribe({
      next: (data)=>{
            this.movies=data
      },error: err=>{
        this.errorMessage=err;
        console.log(err);
      }
    })
  }
  onSearch(value:any){
    this.movieService.searchMovies(value.keyword).subscribe({
      next:(data)=>{
        this.movies=data;
      },error: err=>{
        this.errorMessage=err;
        console.log(err);
      }
    })
  }
  handleLikeMovie(movie:Movie){
    this.movieService.likeMovie(movie).subscribe({
      next:(data)=>{
        movie.favourite=data.favourite;
      }
    })
  }
  handleShowDetail(movie:Movie){
      this.router.navigateByUrl('editMovie/'+movie.id);
  }
}
