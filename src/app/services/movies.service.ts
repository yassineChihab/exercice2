import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie.Model';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  host="http://localhost:3000/";
  
  constructor(private http:HttpClient) { }

  getAllMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.host+'movies');
  }
  getSingleMovie(id:number):Observable<Movie>{
    return this.http.get<Movie>(this.host+'movies/'+id);
  }

  getFavMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.host+'movies?favourite=true');
  }

  searchMovies(keyword:string):Observable<Movie[]>{
    return this.http.get<Movie[]>(this.host+"movies?title_like="+keyword);
  }
  likeMovie(movie:Movie):Observable<Movie>{
    movie.favourite=!movie.favourite;
    return this.http.put<Movie>(this.host+"movies/"+movie.id,movie);
   
    
  }
}
