import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from './service/search.service';
import { Result } from './model/result.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
/*
  searchResults:Result[] = [];

  constructor(private searchService :SearchService) {
    this.searchService.getData().subscribe(data =>{
      this.searchResults = data.map(json=> new Result().deserialize(json))
      console.log(data);
    });
  }
*/
  constructor() {}
  ngOnInit() {

  }
}
