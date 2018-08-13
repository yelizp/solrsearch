import { Serializable } from "../common/serializable";

export class FacetCounts implements Serializable<FacetCounts> {
    fields: FacetField[] = [];

    constructor() { }

    deserialize(json) {
        this.fields = json["facet_counts"]["facet_fields"].map(json => new FacetField().deserialize(json));
        return this;
    }

    serialize() {
        return JSON.stringify(this);
    }
}

export class FacetField implements Serializable<FacetField> {
    fieldName: string = "";
    fieldValueMap: Object = new Object();
    constructor() { };

    deserialize(json) {
        this.fieldName = json[0];
        //TODO: Add key value mapping 
        /*
        {
            "responseHeader":{
              "status":0,
              "QTime":2,
              "params":{
                "q":"*:*",
                "facet.limit":"20",
                "facet.field":"title_str",
                "f.title_str.facet.limit":"10",
                "facet.mincount":"1",
                "rows":"0",
                "facet":"true",
                "wt":"json"}},
            "response":{"numFound":5000,"start":0,"docs":[]
            },
            "facet_counts":{
              "facet_queries":{},
              "facet_fields":{
                "title_str":[
                  "a aliquam quia",1,
                  "a at voluptatem",1,
                  "a aut ipsum fuga atque eos",1,
                  "a corrupti rerum laudantium dicta modi distinctio aspernatur",1,
                  "a deleniti esse dolores distinctio et voluptate qui",1,
                  "a deleniti quae exercitationem aut et reprehenderit",1,
                  "a deserunt amet odit voluptatem hic",1,
                  "a dolore sint praesentium provident ipsam totam sed",1,
                  "a ea culpa eius",1,
                  "a eius molestiae cupiditate",1]},
              "facet_ranges":{},
              "facet_intervals":{},
              "facet_heatmaps":{}}}
              */
        return this;
    }

    serialize() {
        return JSON.stringify(this);
    }
}