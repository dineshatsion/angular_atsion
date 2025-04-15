import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-privacypolicy',
  imports: [],
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.css'
})


export class PrivacypolicyComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }
}
