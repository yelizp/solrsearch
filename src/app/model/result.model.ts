import { Serializable } from "../common/serializable";

export class Result implements Serializable<Result>{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;

    deserialize(json) {
        this.albumId = json.albumId;
        this.id = json.id;
        this.title = json.title;
        this.url = json.url;
        this.thumbnailUrl = json.thumbnailUrl;
        return this;
    }

    serialize() {
        return JSON.stringify(this);
    }
}