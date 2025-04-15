import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  imports: [],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }
}
