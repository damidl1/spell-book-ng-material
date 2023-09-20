import { Component, OnInit } from '@angular/core';
import { Spell } from 'src/app/model/spell';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent implements OnInit {

  spells: Spell[] = []

  constructor(public data: DataService){}

  ngOnInit(): void {
    this.data.getSpells().subscribe(spellResult => {
    this.spells = spellResult;
    console.log('Arrayone spellone', spellResult);

      // for (const post of this.posts) {
      //   post.isFavourite = this.storage.isFavourite(post)
      // }
    });
  }

}
