import { Component, Input, inject, signal } from '@angular/core';
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
  @Input() comicId?: string;

  ngOnInit() {
    if (this.comicId) {
      this.getComic(this.comicId);
    }
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
      items: [{ name: '', role: '' }],
    },
    prices: [
      {
        price: 0,
      },
    ],
  });

  getComic(id: string) {
    this.requestService.getComic(id).subscribe((resp) => {
      this.apiResp = resp;
      this.comic.set(this.apiResp.data.results[0]);
      console.log(this.comic());
    });
  }
}
