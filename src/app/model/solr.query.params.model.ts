import { Serializable } from "../common/serializable";

export class SolrQueryParams implements Serializable<SolrQueryParams> {
    q : string = "";            // The query string
    qOp : string = "";          // Default query operator ("AND" / "OR")
    df : string = "";           // Default field to search
    sow: boolean = false;       // Split on whitespace
    indent : string = "";       // Turn "on" or "off" indentation
    wt : string = "";           // Writer type, could be json, xml,... etc
    fl : string = "";           // Field list separated by comma
    start: number = 0;          // Starting page index 
    rows: number = 10;          // Number of records to be returned
    fq: string = "";            // Filter query e.g. "fq=(catid:90 OR catid:81) AND  priceEng:[38 TO 40]"
    // Highlighting params
    hl: string = "";            // Highlight (on/off)
    hlFl: string = ""           // Fields to highlight on
    // Facet params
    facet:boolean = true;       // enable faceting
    facetLimit: number = -1;    // Facet limit
    facetMinCount: number = 1;  // Facet min count
    facetFields: string[] = ['title'];  // Facet field list separated by comma
    facetFieldLimitMap = new Object(); // Facet field limit

    constructor() {}

    deserialize(json) {
        this.q = json.params.q;
        this.qOp = json.params.q.op;
        this.df = json.params.df;
        this.sow = json.params.sow;
        this.indent = json.params.indent;
        this.wt = json.params.wt;
        this.fl = json.params.fl;
        this.start = json.params.start;
        this.rows = json.params.rows;
        this.fq = json.params.fq;
        this.hl = json.params.hl;
        this.hlFl = json.params["hl.fl"];
        this.facet = json.params.facet;
        this.facetLimit = json.params.facetLimit;
        this.facetFields = JSON.parse(json.params.facetField);
        this.facetMinCount = json.params.facet.facetMinCount;

        return this;
    }

    serialize() {
        return JSON.stringify(this);
    }

    toQueryString() {
        let query = (this.q) ? `q=${this.q}` : "*:*";
        query += (this.qOp) ? `&q.op=${this.qOp}` : "";
        query += (this.df) ? `&df=${this.df}` : "";
        query += (this.sow) ? `&sow=${this.sow}` : "";
        query += (this.indent) ? `&indent=${this.indent}` : "";
        query += (this.wt) ? `&wt=${this.wt}` : "json";
        query += (this.fl) ? `&fl=${this.fl}` : "";
        query += (this.start)? `&start=${this.start}` : "";
        query += (this.rows) ? `&rows=${this.rows}` : "";
        query += (this.fq) ? `&fq=${this.fq}` : "";
        query += (this.hl) ? `&hl=${this.hl}` : "";
        query += (this.hlFl)? `&hl.fl=${this.hlFl}` : "";
        query += (this.facet)? `&facet=${this.facet}` : "";
        query += (this.facetLimit)? `&facet.limit=${this.facetLimit}` : "";
        query += (this.facetMinCount) ? `&facet.mincount=${this.facetMinCount}` : "";
        if(this.facetFields) {
            this.facetFields.forEach(field => query += `&facet.field=${field}`);
            if(this.facetFieldLimitMap) {
                this.facetFields.forEach( field => {
                    let value = this.facetFieldLimitMap[field];
                    if(value) {
                        query += `&f.field.facet.limit=${value}`;
                    }
                });
            }
        }
        return encodeURI(query);
    }

    setQ(value:string) {
        this.q = value;
    }

    setQop(value: string) {
        this.qOp = value;
    }

    setDf(value : string) {
        this.df = value;
    }

    setSow(value : boolean) {
        this.sow = value;
    }

    setIndent(value:string) {
        this.indent = value;
    }

    setWt(value:string) {
        this.wt = value;
    }

    setFl(value:string) {
        this.fl = value;
    }

    setStart(value:number) {
        this.start = value;
    }

    setRows(value:number) {
        this.rows = value;
    }

    setFq(value:string) {
        this.fq = value;
    }

    setHl(value:string) {
        this.hl = value;
    }

    setHlFl(value:string) {
        this.hlFl = value;
    }
    setFacet(value:boolean) {
        this.facet = value;
    }
    setFacetLimit(value:number) {
        this.facetLimit = value;
    }
    addFacetField(value:string) {
        if(this.facetFields === undefined || this.facetFields === null) {
            this.facetFields = [];
        }
        this.facetFields.push(value);
    }
    removeFacetField(value:string) {
        this.facetFields = this.facetFields.filter(field => field !== value).slice(0);
    }
    clearFacetFields() {
        this.facetFields = [];
    }
    setFacetMinCount(value:number) {
        this.facetMinCount = value;
    }
    addFacetFieldLimit(fieldName:string, value:number) {
        this.facetFieldLimitMap[fieldName] = value;
    }
    removeFacetFieldLimit(fieldName:string) {
        this.facetFieldLimitMap[fieldName] = null;
    }
}