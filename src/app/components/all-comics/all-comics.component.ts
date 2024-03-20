import { Component, inject, signal } from '@angular/core';
import { ApiRequestService } from '../../shared/services/api-request.service';
import { Comic } from '../../shared/models/comics.module';
import { ComicsComponent } from '../comics/comics.component';
import { CurrencyPipe } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-all-comics',
  standalone: true,
  imports: [ComicsComponent, CurrencyPipe, RouterLinkWithHref],
  templateUrl: './all-comics.component.html',
  styleUrl: './all-comics.component.css',
})
export class AllComicsComponent {
  ngOnInit() {
    this.getAllComics(300);
  }

  offsets = [300, 400, 500, 600, 700, 800, 900];
  private requestService = inject(ApiRequestService);

  apiRest?: any;
  comics = signal<Comic[]>([]);

  private getAllComics(offset: number) {
    this.requestService.getAllComics(offset).subscribe((resp) => {
      this.apiRest = resp;
      const results = this.apiRest.data.results;
      results.forEach((element: Comic) => {
        this.comics.update((value) => [...value, element]);
      });
      //console.log(this.comics());
    });
  }

  getOtherCharacters(offset: number) {
    this.comics.update(() => []);
    this.getAllComics(offset);
  }
}
