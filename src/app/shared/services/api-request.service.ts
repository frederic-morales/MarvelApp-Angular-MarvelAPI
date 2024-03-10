import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  private http = inject(HttpClient);

  getCharacters(id: number) {
    const url = new URL(
      `https://gateway.marvel.com/v1/public/characters/${id.toString()}`
    );

    return this.http.get(url.toString(), {
      params: {
        apikey: 'e93dcdde2e628d98a6c61dda4785ba4d',
        ts: 1705621481,
        hash: 'eff22e688506749165d52c595ea64e90',
      },
      headers: {},
    });
  }

  getAllCharacters(offset: number) {
    const url = new URL(
      `https://gateway.marvel.com/v1/public/characters?limit=100&offset=${offset}`
    );
    return this.http.get(url.toString(), {
      params: {
        apikey: 'e93dcdde2e628d98a6c61dda4785ba4d',
        ts: 1705621481,
        hash: 'eff22e688506749165d52c595ea64e90',
      },
      headers: {},
    });
  }

  getComic(comicId: string) {
    const url = new URL(
      `https://gateway.marvel.com/v1/public/comics/${comicId}`
    );
    return this.http.get(url.toString(), {
      params: {
        apikey: 'e93dcdde2e628d98a6c61dda4785ba4d',
        ts: 1705621481,
        hash: 'eff22e688506749165d52c595ea64e90',
      },
      headers: {},
    });
  }

  getSerie(serieId: string) {
    const url = new URL(
      `https://gateway.marvel.com/v1/public/series/${serieId}`
    );
    return this.http.get(url.toString(), {
      params: {
        apikey: 'e93dcdde2e628d98a6c61dda4785ba4d',
        ts: 1705621481,
        hash: 'eff22e688506749165d52c595ea64e90',
      },
      headers: {},
    });
  }
}
