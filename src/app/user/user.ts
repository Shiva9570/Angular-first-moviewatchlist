import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [RouterModule, FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  email = '';
  password = '';
  private auth = inject(Auth);
  private router = inject(Router);

  signInWithGoogle() {
    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then(result => {
        // Redirect to trending-movies page after successful login
        this.router.navigate(['/trending-movies']);
      })
      .catch(error => {
        alert('Google sign-in failed: ' + error.message);
      });
  }

  signInWithEmail() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        alert('Login successful! Redirecting to trending movies...');
        this.router.navigate(['/trending-movies']);
      })
      .catch(error => {
        alert('Login failed: ' + error.message);
      });
  }

  redirectToAppleSignIn() {
    this.router.navigate(['/apple-signin']);
  }

  logout() {
    window.location.href = '/user';
  }
}
