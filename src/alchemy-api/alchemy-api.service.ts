import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {map, Observable} from "rxjs";

import {createAlchemyWeb3} from "@alch/alchemy-web3";
import * as solanaWeb3 from '@solana/web3.js';

@Injectable()
export class AlchemyApiService {

    constructor(private httpService: HttpService) {
    }

    findAll(): Observable<any> {

        let url = `${process.env.ALCHEMY_BASE_URL}/${process.env.ALCHEMY_API_KEY}/getNFTs/?owner=${process.env.OWNER}`;

        return this.httpService.get(url)
            .pipe(
                map(response => response.data)
            )
    }


    async getNftByOwner(owner: String) {
        const web3 = createAlchemyWeb3(
            `${process.env.ALCHEMY_BASE_URL}/${process.env.ALCHEMY_API_KEY}`
        );
        return await web3.alchemy.getNfts({owner: `${owner}`})
    }

    async solana() {
        return solanaWeb3
    }
}
