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
<<<<<<< HEAD
      brand: 'fa-github',
      link: 'https://github.com/frederic-morales',
    },
    {
      brand: 'fa-instagram',
      link: 'https://www.instagram.com/smoraless_fa/',
    },
    {
      brand: 'fa-linkedin',
      link: 'https://www.linkedin.com/in/frederic-soc-morales-8a1745261/',
    },
    {
      brand: 'fa-twitter',
      link: 'https://www.instagram.com/smoraless_fa/',
=======
    img: 'fa-github',
    link: "https://github.com/frederic-morales"
    },
    {
    img: 'fa-instagram',
    link: "https://www.instagram.com/smoraless_fa/"
    },
    {
    img: 'fa-linkedin',
    link: "https://www.linkedin.com/in/frederic-soc-morales-8a1745261/"
    },
    {
      img: 'fa-twitter',
      link: "https://www.instagram.com/smoraless_fa/"
>>>>>>> 140cacc26cb95607111c9f7d102ff7ebbaa77400
    },
  ];
}
