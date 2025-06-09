import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',
  styleUrl: './signup.css',
  standalone: true,
  imports: [FormsModule]
})
export class Signup {
  email = '';
  password = '';
  private auth = inject(Auth);
  private router = inject(Router);

  signUp() {
    // Email and password regex validation
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=]{8,}$/;
    if (!emailRegex.test(this.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!passwordRegex.test(this.password)) {
      alert('Password must be at least 8 characters long and contain at least one letter and one number.');
      return;
    }
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        alert('Sign up successful! Redirecting to trending movies...');
        this.router.navigate(['/trending-movies']);
      })
      .catch(error => {
        alert('Sign up failed: ' + error.message);
      });
  }

  signInWithGoogle() {
    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then(() => {
        this.router.navigate(['/trending-movies']);
      })
      .catch(error => {
        alert('Google sign-in failed: ' + error.message);
      });
  }

  logout() {
    window.location.href = '/user';
  }
}
