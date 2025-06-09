import { Component, OnInit } from '@angular/core';
import { TrendingMoviesService } from './trending-movies.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.html',
  styleUrl: './trending-movies.css',
  standalone: true,
  imports: [CommonModule]
})
export class TrendingMovies implements OnInit {
  movies: any[] = [];
  loading = true;
  error = '';

  constructor(private trendingMoviesService: TrendingMoviesService) {}

  ngOnInit() {
    this.trendingMoviesService.getTrendingMovies().subscribe({
      next: (data) => {
        console.log('API result:', data); // Debug: log API result
        this.movies = data.results || [];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load trending movies.';
        this.loading = false;
      }
    });
  }

  logout() {
    // Optionally clear any user state here
    window.location.href = '/user';
  }

}
