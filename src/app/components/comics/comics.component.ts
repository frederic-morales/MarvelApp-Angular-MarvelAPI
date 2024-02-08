import { Component, inject, signal } from '@angular/core';
import { ApiRequestService } from '../../shared/services/api-request.service';
import { Comic } from '../../shared/models/comics.module';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-comics',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.css',
})
export class ComicsComponent {
  ngOnInit() {
    this.getComic();
  }

  private requestService = inject(ApiRequestService);
  apiResp!: any;
  comic = signal({
    thumbnail: {
      extension: '',
      path: '',
    },
    id: 0,
    title: '',
    characters: {
      items: [
        {
          name: '',
        },
      ],
    },
    modified: '',
    creators: {
      available: 0,
      items: [
        { name: '', role: '' },
        { name: '', role: '' },
        { name: '', role: '' },
      ],
    },
    prices: [
      {
        price: 0,
      },
    ],
  });

  getComic() {
    this.requestService.getComic(21280).subscribe((resp) => {
      this.apiResp = resp;
      this.comic.set(this.apiResp.data.results[0]);
      console.log(this.comic());
    });
  }
}
