import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  private http = inject(HttpClient);

  constructor() {}

  capAmerica: number = 1009220;
  ironMan: number = 1009368;
  hulk: number = 1009351;
  spiderMan: number = 1009610;

  url: string =
    'http://gateway.marvel.com/v1/public/characters?limit=50&offset=500';

  getCharacters() {
    const url = new URL(
      'http://gateway.marvel.com/v1/public/characters?limit=100&offset=1225'
    );
    const now = new Date();
    const timestamp = now.getTime();
    const timestampInSeconds = Math.floor(timestamp / 1000);
    console.log(timestampInSeconds);

    return this.http.get(url.toString(), {
      params: {
        apikey: 'e93dcdde2e628d98a6c61dda4785ba4d',
        ts: 1705621481,
        hash: 'eff22e688506749165d52c595ea64e90',
      },
      headers: {},
    });
  }

  getCharacterInfo() {
    const url = new URL(
      'http://gateway.marvel.com/v1/public/characters/1011136'
    );
    const now = new Date();
    const timestamp = now.getTime();
    const timestampInSeconds = Math.floor(timestamp / 1000);
    console.log(timestampInSeconds);

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
