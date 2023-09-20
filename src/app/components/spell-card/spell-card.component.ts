import { Component, Input } from '@angular/core';
import { Spell } from 'src/app/model/spell';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-spell-card',
  templateUrl: './spell-card.component.html',
  styleUrls: ['./spell-card.component.scss'],
})
export class SpellCardComponent {
  constructor(public data: DataService){}

  @Input() spells?: Spell;

}
