import { Serializable } from "../common/serializable";
import { SolrQueryParams } from "./solr.query.params.model";
import { Result } from "./result.model";

export class SolrResponse implements Serializable<SolrResponse>{
    header : SolrResponseHeader = null;
    body : SolrResponseBody = null;

    deserialize(json) {
        this.header = new SolrResponseHeader().deserialize(json);
        this.body = new SolrResponseBody().deserialize(json);
        return this;
    }

    serialize() {
        return JSON.stringify(this);
    }
}

export class SolrResponseHeader implements Serializable<SolrResponseHeader> {
    zkConnected : boolean = false;
    status : number = 0;
    qtime : number = 0;
    params : SolrQueryParams = null;

    deserialize(json) {
        this.zkConnected = json.responseHeader.zkConnected;
        this.status = json.responseHeader.status;
        this.qtime = json.responseHeader.QTime;
        this.params = new SolrQueryParams().deserialize(json.responseHeader);
        return this;
    }

    serialize() {
        return JSON.stringify(this);
    }
}

export class SolrResponseBody implements Serializable<SolrResponseBody> {
    numFound : number = 0;
    start : number = 0;
    end : number = 0;
    maxScore : number = 0;
    docs : Result[] = [];

    deserialize(json) {
        this.numFound = json.response.numFound;
        this.start = json.response.start;
        this.end = json.response.end;
        this.maxScore = json.response.maxScore;
        this.docs = json.response.docs.map(json=> new Result().deserialize(json));
        return this;
    }

    serialize() {
        return JSON.stringify(this);
    }
}