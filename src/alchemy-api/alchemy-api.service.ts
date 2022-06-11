import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {map, Observable} from "rxjs";

import * as solanaWeb3 from '@solana/web3.js';

const crypto = require('crypto');

@Injectable()
export class AlchemyApiService {

    private readonly connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));

    constructor(private httpService: HttpService) {}

    findAll(owner: string): Observable<any> {

        let url = `${process.env.ALCHEMY_BASE_URL}/${process.env.ALCHEMY_API_KEY}/getNFTs?owner=${owner}`;

        return this.httpService.get(url)
            .pipe(
                map(response => response.data.nfts)
            )
    }



    GetAllTockenBySolana(account: string): Observable<any> {
        let url = `${process.env.SOLANA_BASE_URL}/account/tokens?account=${account}`;
        // console.log(url);
        return this.httpService.get(url)
            .pipe(
                map(response => response.data)
            )
    }

    async solana(_account: string) {
        let solanaWallet = new solanaWeb3.PublicKey(_account);

        // console.log('solanaWallet.encode()', solanaWallet.encode());
        // console.log("solanaWallet-", solanaWallet);
        // console.log("toBase58", solanaWallet.toBase58());

        let connection = new solanaWeb3.Connection(
            solanaWeb3.clusterApiUrl('devnet'),
            'confirmed',
        );

        let account = await connection.getAccountInfo(solanaWallet);
        console.log("account", account);

        return account
    }

}
