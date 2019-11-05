import { Component, OnInit } from '@angular/core';
import {LivreService} from '../Services/Livres.service';
import {Livre} from '../models/livre.model';
import {Item} from '../models/item.model';
import {VolumeInfo} from '../models/volumeInfo.model';
import {Router} from '@angular/router';

@Component({
  selector: 'adz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
livres: Livre;
  title = '';
infos: VolumeInfo[];

  constructor(private livreService: LivreService,
              private router: Router) { }

  ngOnInit() {
  }
  onKey(event: any) {
    this.title = event.target.value ;
      this.router.navigate(['/gallery/'+ this.title]);
  }

}
