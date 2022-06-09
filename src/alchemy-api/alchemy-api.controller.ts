import {Controller, Get, Query} from '@nestjs/common';
import {AlchemyApiService} from "./alchemy-api.service";

@Controller('alchemy-api')
export class AlchemyApiController {
    constructor(private readonly alchemyApiService: AlchemyApiService) {
    }

    @Get('/nft')
    getAll() {
        return this.alchemyApiService.findAll();
    }

    @Get('/nftByOwner')
    getNftByOwner(
        @Query('owner') owner: String,
    ) {
        return this.alchemyApiService.getNftByOwner(owner);
    }
}
