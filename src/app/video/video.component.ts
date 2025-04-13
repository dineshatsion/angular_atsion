    import { NgFor } from '@angular/common';
    import { Component, AfterViewInit } from '@angular/core';
    import { DomSanitizer, SafeResourceUrl  } from '@angular/platform-browser';

    @Component({
      selector: 'app-video',
      imports: [NgFor],
      templateUrl: './video.component.html',
      styleUrl: './video.component.css'
    })
    export class VideoComponent implements AfterViewInit {

      carousel: HTMLElement | null = null;
      videoUrls: SafeResourceUrl[];

      constructor(private sanitizer: DomSanitizer) {
      this.videoUrls = [
        'https://www.youtube.com/embed/66ZBOqaHyho',
        'https://www.youtube.com/embed/Y9aGu-fp1JA',
        'https://www.youtube.com/embed/X4YpCUk5FeQ',
        'https://www.youtube.com/embed/kSKFhkfq5hg',
        'https://www.youtube.com/embed/91mJXAKrji0',
        'https://www.youtube.com/embed/2AjCxlXUrSk'
      ].map(url => this.sanitizer.bypassSecurityTrustResourceUrl(url));
    } 


      ngAfterViewInit() {
        this.carousel = document.getElementById('carousel');
      }

      scrollLeft() {
        this.carousel?.scrollBy({ left: -350, behavior: 'smooth' });
      }

      scrollRight() {
        this.carousel?.scrollBy({ left: 350, behavior: 'smooth' });
      }
    }
