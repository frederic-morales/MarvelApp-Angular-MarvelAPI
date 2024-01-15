import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent {
  images: string[] = [
    'https://is1-ssl.mzstatic.com/image/thumb/ZypiNEdbU0wwCF0GMJ3zoA/1200x675mf.jpg', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfLLLJrHPKlgd5WsVv2sU-DgCDMg-Ry_K_BQ&usqp=CAU', 
    'https://es.web.img3.acsta.net/r_654_368/newsv7/20/05/07/12/52/3980724.jpg', 
    'Item 4', 
    'Item 5'
  ];

  nextSlide() {
    const wrapper = document.querySelector('.carousel-wrapper');
    if (wrapper) {
      wrapper.scrollLeft += wrapper.clientWidth;
    }
  }
  
  prevSlide() {
    const wrapper = document.querySelector('.carousel-wrapper');
    if (wrapper) {
      wrapper.scrollLeft -= wrapper.clientWidth;
    }
  }

}
