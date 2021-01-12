import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BirraService } from '../birra.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string;
  title = 'prepver';
  obsBirra: Observable<Object>;
  results: any;


  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public birra: BirraService) {

  }


  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsBirra = this.birra.searchBirra(this.query);
    this.obsBirra.subscribe((data) => { this.results = data; console.log(this.results) });
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.birra && res.birra.items) {
      this.results = res.birra.items;
    }
  }


}


