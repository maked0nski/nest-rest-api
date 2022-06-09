import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {map, Observable} from "rxjs";

import { createAlchemyWeb3 } from "@alch/alchemy-web3";

import {config} from "../config/config";

@Injectable()
export class AlchemyApiService {

    constructor(private httpService: HttpService) {}

    findAll(): Observable<any> {

        let url = `${config.baseURL}/${config.apiKey}/getNFTs/?owner=${config.ownerAddr}`;

        return this.httpService.get(url)
            .pipe(
            map(response => response.data)
        )
    }


    async getAll() {
        const web3 = createAlchemyWeb3(
            `${config.baseURL}/${config.apiKey}`
        );
        return await web3.alchemy.getNfts({owner: `${config.ownerAddr}`})
    }
}
