import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TheImdbService {
    url: string
    year: Array<string> = ['2017','2016','2015','2014','2013','2012','2011','2010','2009','2008']
    word: Array<string> = ['a','b','c','d','e','f','an','be','can','do','the','soon','make','new','laugh','go']
    
    constructor(){
         this.url  = 'http://www.theimdbapi.org/api/find/movie?title=then&year=2017' 
         this.compose_api();
    }
  
   fetch_api(composed_url){
        return this.http.get(composed_url).map(res => {
            return res.json()
        })
    }
  compose_api(){
    
    
  }
 
}