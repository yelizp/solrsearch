import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../service/search.service';
import { Result } from '../model/result.model'
import { SolrResponse } from '../model/solr.response.model';
import { SolrQueryParams } from '../model/solr.query.params.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input('searchText') searchText : string;
  showSpinner:Boolean = false;
  searchResults:Result[] = [];
  filteredResults:Result[] = [];
  pageSize:number = 10;
  totalPages:number = 0;
  pageIndex:number = 0;
  
  constructor(private searchService :SearchService) { 
    this.searchText = ""
  }

  ngOnInit() {
    /*
    this.searchService.getData().subscribe(data =>{
      this.searchResults = data.map(json=> new Result().deserialize(json));
      console.log(data);
    });
    */
    this.searchService.search(new SolrQueryParams()).subscribe(data=> {
      let response = new SolrResponse().deserialize(data);
      this.totalPages = response.body.numFound / response.header.params.rows ;
      this.pageIndex= response.header.params.start;
      this.pageSize = response.header.params.rows ;
      this.searchResults = response.body.docs;
      this.filteredResults = this.searchResults.slice(0);
      console.log(data);
    });
  }

  search() {
    this.showSpinner = true;
/*    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
 */ 
    //this.filteredResults = this.searchResults.filter(result=> result.title.indexOf(this.searchText.toLocaleLowerCase()) > 0);
    let params = new SolrQueryParams();
    params.rows = this.pageSize;
    params.start = this.pageIndex;
    params.q = this.searchText;

    this.searchService.search(params).subscribe(data=> {
      let response = new SolrResponse().deserialize(data);
      this.totalPages = response.body.numFound / response.header.params.rows ;
      this.pageIndex= response.header.params.start;
      this.pageSize = response.header.params.rows ;
      this.searchResults = response.body.docs;
      this.filteredResults = this.searchResults.slice(0);
      console.log(data);
    });

    this.showSpinner = false;
  }

  pageEvent(event) {
    this.pageIndex=event.pageIndex;
    this.pageSize = event.pageSize;
    this.search();
    console.log(event);
  }
}
