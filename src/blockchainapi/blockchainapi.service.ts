import {Injectable} from '@nestjs/common';
import * as nfteyez from "@nfteyez/sol-rayz";
// import { FilterOperator, Paginate, PaginateQuery, paginate, Paginated , PaginateConfig} from 'nestjs-paginate'
import {query} from "express";
import {NftInterface} from "./interfaces/nft.interface";
// import {  InjectRepository,Repository, Entity, PrimaryGeneratedColumn, Column } from '@nestjs/typeorm';
// import { Repository, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

var theblockchainapi = require('theblockchainapi');

@Injectable()
export class BlockchainapiService {

    // private paginateConfig: PaginateConfig<NftInterface> = {
    //     /**
    //      * Required: true (must have a minimum of one column)
    //      * Type: (keyof CatEntity)[]
    //      * Description: These are the columns that are valid to be sorted by.
    //      */
    //     sortableColumns: ['mint', 'updateAuthority'],
    //     /**
    //      * Required: false
    //      * Type: [keyof CatEntity, 'ASC' | 'DESC'][]
    //      * Default: [[sortableColumns[0], 'ASC]]
    //      * Description: The order to display the sorted entities.
    //      */
    //     // defaultSortBy: [['name', 'DESC']],
    //     /**
    //      * Required: false
    //      * Type: (keyof CatEntity)[]
    //      * Description: These columns will be searched through when using the search query
    //      * param. Limit search scope further by using `searchBy` query param.
    //      */
    //     // searchableColumns: ['name', 'color'],
    //     /**
    //      * Required: false
    //      * Type: number
    //      * Default: 100
    //      * Description: The maximum amount of entities to return per page.
    //      */
    //     maxLimit: 20,
    //
    //     /**
    //      * Required: false
    //      * Type: number
    //      * Default: 20
    //      */
    //     defaultLimit: 2,
    //
    //     /**
    //      * Required: false
    //      * Type: TypeORM find options
    //      * Default: None
    //      * https://typeorm.io/#/find-optionsfind-options.md
    //      */
    //     where: {color: 'ginger'},
    //
    //     /**
    //      * Required: false
    //      * Type: { [key in CatEntity]?: FilterOperator[] } - Operators based on TypeORM find operators
    //      * Default: None
    //      * https://typeorm.io/#/find-options/advanced-options
    //      */
    //     // filterableColumns: { data.name: [FilterOperator.EQ, FilterOperator.IN] },
    //     /**
    //      * Required: false
    //      * Type: RelationColumn<CatEntity>
    //      * Description: Indicates what relations of entity should be loaded.
    //      */
    //     relations: [],
    //
    //     /**
    //      * Required: false
    //      * Type: boolean
    //      * Description: Disables the global condition of "non-deleted" for the entity with delete date columns.
    //      * https://typeorm.io/select-query-builder#querying-deleted-rows
    //      */
    //     withDeleted: false,
    // }

    async blockChainApi(pubWallet: string, name?: string) {
        try {
            let defaultClient = theblockchainapi.ApiClient.instance;

            let APIKeyID = defaultClient.authentications['APIKeyID'];
            APIKeyID.apiKey = process.env.API_KEY_ID
            let APISecretKey = defaultClient.authentications['APISecretKey'];
            APISecretKey.apiKey = process.env.API_SECRET_KEY

            let apiInstance = new theblockchainapi.SolanaWalletApi();

            // String | The network ID (devnet, mainnet-beta)
            let network = 'mainnet-beta';
            return await apiInstance.solanaGetNFTsBelongingToWallet(network, pubWallet)
                .then((data) => {
                    if (!name) {
                        return data;
                    } else {
                        return data.nfts_metadata.filter(nft => nft.data.name.includes(name));
                    }

                }, (error) => {
                    console.error(error);
                    return error;
                })

        } catch (e) {
            console.log('Failed to fetch metadata');
            return null;
        }

    }

    async nfteyez(walletPublicKey: string) {

        try {
            const publicAddress = await nfteyez.resolveToWalletAddress({
                text: walletPublicKey
            });
            console.log("publicAddress - " + publicAddress)

            const nftArray = await nfteyez.getParsedNftAccountsByOwner({
                publicAddress:publicAddress
            });


            return nftArray

        } catch (error) {
            console.log("Error thrown, while fetching NFTs", error.message);
        }
    }

}
