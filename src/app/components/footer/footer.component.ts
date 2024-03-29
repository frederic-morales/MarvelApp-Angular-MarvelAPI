import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  redes = [
    {
      img: 'fa-github',
      link: 'https://github.com/frederic-morales',
    },
    {
      img: 'fa-instagram',
      link: 'https://www.instagram.com/smoraless_fa/',
    },
    {
      img: 'fa-linkedin',
      link: 'https://www.linkedin.com/in/frederic-soc-morales-8a1745261/',
    },
    {
      img: 'fa-twitter',
      link: 'https://www.instagram.com/smoraless_fa/',
    },
  ];
}
