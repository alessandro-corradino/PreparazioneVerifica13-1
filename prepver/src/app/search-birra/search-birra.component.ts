import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { BirraService } from '../birra.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
@Component({
  selector: 'app-search-birra',
  templateUrl: './search-birra.component.html',
  styleUrls: ['./search-birra.component.css']
})
export class SearchBirraComponent implements OnInit {
  routeObs: Observable<ParamMap>;
  birra: any; //Qui salverò la traccia selezionata
  birraServiceObs: any;
   constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BirraService,
    private location: Location) { }

   ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) => {
    console.log(params);
    let birra_nameId = params.get('id'); //Ottengo l'id dai parametri
    console.log(birra_nameId); //Stampo su console
    //spotifyServiceObs va dichiarato
    this.birraServiceObs = this.service.getBirra(birra_nameId);
    this.birraServiceObs.subscribe(this.getData)
  }

  getData = (data) => {

    this.birra = data.birra;

     console.log(this.birra);
  }

  back(): void {
    this.location.back();
  }

}




