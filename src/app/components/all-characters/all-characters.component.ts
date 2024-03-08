import { Component, signal, inject } from '@angular/core';
import { ApiRequestService } from '../../shared/services/api-request.service';

@Component({
  selector: 'app-all-characters',
  standalone: true,
  imports: [],
  templateUrl: './all-characters.component.html',
  styleUrl: './all-characters.component.css',
})
export class AllCharactersComponent {
  ngOnInit() {
    this.getAllCharacters();
  }

  private requestService = inject(ApiRequestService);

  apiRes: any;

  private getAllCharacters() {
    this.requestService.getAllCharacters().subscribe((resp) => {
      this.apiRes = resp;
      const results = this.apiRes.data.results;
      console.log(results);
    });
  }
}
