import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-error-404',
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.css'
})
export class Error404Component {
  progress: number;

  constructor(
      router: Router,
  ) {
    this.progress = 0;
    const duration = 3000; // 3 seconds
    const interval = 30; // Update every 30ms
    const increment = (100 / (duration / interval)); // Amount to increase per interval

    const StartURL = router.url

    const timer = setInterval(() => {
      this.progress += increment;
      if (this.progress >= 100) {
        this.progress = 100; // Cap progress at 100%
        clearInterval(timer); // Stop the interval
        if (router.url == StartURL) {
          router.navigate(['/'])
        }
      }
    }, interval);
  }

}
