import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TrendingMoviesService {
  private apiUrl = 'https://api.themoviedb.org/3/trending/movie/week?api_key=d055599cc930e178cbbacae8c5f5f582';

  constructor(private http: HttpClient) {}

  getTrendingMovies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
