import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from '../model/result.model'
import { SolrResponse } from '../model/solr.response.model';
import { SolrQueryParams } from '../model/solr.query.params.model';

//https://youtu.be/fh2GyYQcuxU
@Injectable()
export class SearchService {
    serviceUrl = 'http://localhost:8983/solr/metapedia';

    constructor(private http:HttpClient) {}

    public getData() {
        //return this.http.get<Result[]>('https://jsonplaceholder.typicode.com/photos');        
        return this.http.get<SolrResponse[]>(this.serviceUrl + '/select?q=*:*');
    }

    public search(query: SolrQueryParams) {
        let url = this.serviceUrl + '/select?' + query.toQueryString();
        console.log(url);
        return this.http.get<SolrResponse[]>(url);
    }
}