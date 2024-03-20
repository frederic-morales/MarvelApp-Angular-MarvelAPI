import { Component, inject, signal } from '@angular/core';
import { ApiRequestService } from '../../shared/services/api-request.service';
import { Serie } from '../../shared/models/comics.module';
import { CurrencyPipe } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-all-series',
  standalone: true,
  imports: [CurrencyPipe, RouterLinkWithHref],
  templateUrl: './all-series.component.html',
  styleUrl: './all-series.component.css',
})
export class AllSeriesComponent {
  ngOnInit() {
    this.getAllSeries(0);
  }

  offsets = [200, 300, 400, 500, 600, 700, 800, 900];
  private requestService = inject(ApiRequestService);

  apiRest?: any;
  series = signal<Serie[]>([]);

  private getAllSeries(offset: number) {
    this.requestService.getAllSeries(offset).subscribe((resp) => {
      this.apiRest = resp;
      const results = this.apiRest.data.results;
      results.forEach((element: Serie) => {
        this.series.update((value) => [...value, element]);
      });
      //console.log(this.series());
    });
  }

  getOtherCharacters(offset: number) {
    this.series.update(() => []);
    this.getAllSeries(offset);
  }
}
