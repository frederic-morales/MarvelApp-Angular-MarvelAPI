import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  private http = inject(HttpClient);

  getCharacters(id: number) {
    const url = new URL(
      `http://gateway.marvel.com/v1/public/characters/${id.toString()}`
    );
    /*const now = new Date();
    const timestamp = now.getTime();
    const timestampInSeconds = Math.floor(timestamp / 1000);
    console.log(timestampInSeconds);*/

    return this.http.get(url.toString(), {
      params: {
        apikey: 'e93dcdde2e628d98a6c61dda4785ba4d',
        ts: 1705621481,
        hash: 'eff22e688506749165d52c595ea64e90',
      },
      headers: {},
    });
  }

  getCharacterComics(id: number) {
    const url = new URL(
      `http://gateway.marvel.com/v1/public/characters/${id.toString()}/comics?limit=10`
    );
    /*const now = new Date();
    const timestamp = now.getTime();
    const timestampInSeconds = Math.floor(timestamp / 1000);
    console.log(timestampInSeconds);*/

    return this.http.get(url.toString(), {
      params: {
        apikey: 'e93dcdde2e628d98a6c61dda4785ba4d',
        ts: 1705621481,
        hash: 'eff22e688506749165d52c595ea64e90',
      },
      headers: {},
    });
  }

  getAllCharacters() {
    const url = new URL(
      `http://gateway.marvel.com/v1/public/characters?limit=100`
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
