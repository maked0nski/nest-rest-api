import {Controller, Get, Query} from '@nestjs/common';
import {ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {AlchemyApiService} from "./alchemy-api.service";

@ApiTags('Alchemy-api')
@Controller('alchemy-api')
export class AlchemyApiController {

    constructor(private readonly alchemyApiService: AlchemyApiService) {
    }

    @ApiOperation({summary: 'getNFTs from alchemy API by owner. owner: [string] address for NFT owner (can be in ENS format!).  tray this owner value: "0x9eef2e4511390ce4"'})
    @ApiOkResponse({
        status: 200,
        schema: {
            example: [
                {
                    "contract": {
                        "name": "Gaia",
                        "address": "0x8b148183c28ff88f",
                        "externalDomain": "ballerz.xyz",
                        "contractMetadata": {
                            "storagePath": "Gaia.CollectionStoragePath",
                            "publicPath": "Gaia.CollectionPublicPath",
                            "publicCollectionName": "Gaia.CollectionPublic"
                        }
                    },
                    "id": {
                        "tokenId": "13348",
                        "tokenMetadata": {
                            "uuid": "83699066"
                        }
                    },
                    "title": "Bryson DeChambeau - Vegas, Baby!",
                    "description": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV",
                    "media": [
                        {
                            "uri": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W",
                            "mimeType": "image"
                        }
                    ],
                    "metadata": {
                        "metadata": [
                            {
                                "name": "mintNumber",
                                "value": "3543"
                            },
                            {
                                "name": "video",
                                "value": "ipfs://QmS5UE3fAYSgpsAXgS6wAqAJc2v7gRxN6QFLxZ92FNZ1Y6"
                            },
                            {
                                "name": "templateID",
                                "value": "9926"
                            },
                            {
                                "name": "title",
                                "value": "Bryson DeChambeau - Vegas, Baby!"
                            },
                            {
                                "name": "type",
                                "value": "Golf"
                            },
                            {
                                "name": "description",
                                "value": "Commemorating Bryson DeChambeau’s November 26, 2021 event in Las Vegas, NV"
                            },
                            {
                                "name": "img",
                                "value": "ipfs://QmScvqCQ8PouGdPECBbE9DznAAZaTYT7ekkbyNkKYhTq3W"
                            },
                            {
                                "name": "series",
                                "value": "Bryson DeChambeau - Vegas, Baby!"
                            },
                            {
                                "name": "setID",
                                "value": "4"
                            },
                            {
                                "name": "editions",
                                "value": "5000"
                            },
                            {
                                "name": "item",
                                "value": "1"
                            },
                            {
                                "name": "location",
                                "value": "Las Vegas, NV"
                            }
                        ]
                    }
                }]
        }
    })
    @Get('/nft')
    getAll(@Query('owner') owner?: string) {
        return this.alchemyApiService.findAll(owner);
    }

    @ApiOperation({summary: 'get Solana Account Info. Tray this account Solana in Base58 format : "3yFwqXBfZY4jBVUafQ1YEXw189y2dN3V5KQq9uzBDy1E"',})
    @Get('/solana')
    getSol(@Query('account') account: string) {

        return this.alchemyApiService.solana(account);
    }

    @ApiOperation({summary: 'Get All Tocken. Tray this account Solana in Base58 format : "3yFwqXBfZY4jBVUafQ1YEXw189y2dN3V5KQq9uzBDy1E"',})
    @Get('/GetAllTockenBySolana')
    GetAllTockenBySolana(@Query('account') account?: string) {
        return this.alchemyApiService.GetAllTockenBySolana(account);
    }

    @ApiOperation({summary: 'Get All NFT. With metaplex. Tray this account Solana in Base58 format : "3yFwqXBfZY4jBVUafQ1YEXw189y2dN3V5KQq9uzBDy1E"',})
    @Get("/getNft")
    getNft(@Query('account') account?: string): Promise<any[]> {
        return this.alchemyApiService.sonataNFT(account)
    }
}
