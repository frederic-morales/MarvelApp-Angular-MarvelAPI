import { Component, Input, inject, signal } from '@angular/core';
import { ApiRequestService } from '../../shared/services/api-request.service';
import { Comic } from '../../shared/models/comics.module';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css',
})
export class SeriesComponent {
  @Input() serieId?: string;

  ngOnInit() {
    if (this.serieId) {
      this.getSerie(this.serieId);
    }
  }

  private requestService = inject(ApiRequestService);
  apiResp!: any;
  serie = signal({
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
  });
  getSerie(id: string) {
    this.requestService.getSerie(id).subscribe((resp) => {
      console.log(resp);
      this.apiResp = resp;
      this.serie.set(this.apiResp.data.results[0]);
      console.log(this.serie());
    });
  }
}
