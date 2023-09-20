import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Spell } from '../model/spell';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSpells(){

    return this.http.get<Spell>('https://www.dnd5eapi.co/api/spells').pipe(
      tap(spellObj => console.log('spellone completone', spellObj)),
      map((spellObj:any) => spellObj.results),
      tap(spellResult => console.log('spellone risultone', spellResult))

      // map(redditChildren => redditChildren.map((child: any) => child.data))
    );
  }

}
