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

    @Get('/nft1')
    getNft1(@Query('owner') owner: String) {
        console.log(owner)
        return this.alchemyApiService.getAll();
    }
}
