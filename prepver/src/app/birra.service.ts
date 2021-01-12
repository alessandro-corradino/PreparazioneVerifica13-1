import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BirraService {

  constructor(private http: HttpClient) { }

    searchBirra(query: string) {
      const url = `https://api.punkapi.com/v2/beers?beer_name=${query}`;
      let obsBirra = this.http.get(url);
      console.log(obsBirra);
      return obsBirra;
  //Ritorno un observable ai componenti che richiedono il servizio
    }
      getBirra(id: string) {
      const url = `https://api.punkapi.com/v2/beers/${id}`;
      console.log(this.http.get(url));
      return this.http.get(url,);
    }
}




