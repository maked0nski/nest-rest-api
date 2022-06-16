import {NFT} from "./nft.interface";

export interface Pagination  {
    skip?:number;
    limit?:number;
    sort?:{ field:string, by:"ASC" | "DESC" }[];
    search?:[];
}