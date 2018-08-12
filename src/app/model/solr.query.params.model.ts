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
    hl: string = "";            // Highlight (on/off)
    hlFl: string = ""           // Fields to highlight on
    //TODO: Add parameters used for faceting as well

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
        return this;
    }

    serialize() {
        return JSON.stringify(this);
    }

    toQueryString() {
        let query = "";
        if(this.q === undefined || this.q === null || this.q.length === 0) {
            this.q = "*:*";
        }
        query = `q=${this.q}`;
        if(this.qOp !== undefined && this.qOp !== null && this.df.length > 0) {
            query += `&q.op=${this.qOp}`;
        }
        if(this.df !== undefined && this.df !== null && this.df.length > 0) {
            query += `&df=${this.df}`;
        }
        if(this.sow !== undefined && this.sow !== null && this.sow === true) {
            query += `&sow=${this.sow}`;
        }
        if(this.indent !== undefined && this.indent !== null && this.indent.length > 0) {
            query += `&indent=${this.indent}`;
        }
        if(this.wt !== undefined && this.wt === null || this.wt.length === 0) {
            this.wt = "json";
        }
        query += `&wt=${this.wt}`;
        if(this.fl !== undefined && this.fl !== null && this.fl.length > 0) {
            query += `&fl=${this.fl}`;
        }
        if(this.start !== undefined ) {
            query += `&start=${this.start}`;
        }
        if(this.rows !== undefined ) {
            query += `&rows=${this.rows}`;
        }
        if(this.fq !== undefined && this.fq !== null && this.fq.length > 0) {
            query += `&fq=${this.fq}`;
        }
        if(this.hl !== undefined && this.hl !== null && this.hl.length > 0) {
            query += `&hl=${this.hl}`;
        }
        if(this.hlFl !== undefined && this.hlFl !== null && this.hlFl.length > 0) {
            query += `&hl.fl=${this.hlFl}`;
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
}