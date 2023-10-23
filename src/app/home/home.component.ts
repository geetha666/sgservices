import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  similarItems = [
    // Add your list of similar items here
    { title: 'Item 1', description: 'Description 1', image: 'item1.jpg' },
    { title: 'Item 2', description: 'Description 2', image: 'item2.jpg' },
    // Add more items as needed
  ];




  sliderConfig = {
    slidesToShow: 3, // Number of items to display at once
    slidesToScroll: 1, // Number of items to scroll at a time
    arrows: true, // Show navigation arrows
    dots: true, // Show pagination dots
  };
}
