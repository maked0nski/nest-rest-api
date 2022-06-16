import {Controller, Get, HttpCode, HttpStatus, Param, Query,} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
// import { FilterOperator, Paginate, PaginateQuery, paginate, Paginated , PaginateConfig} from 'nestjs-paginate'

import {BlockchainapiService} from "./blockchainapi.service";

@ApiTags('Block Chain Api')
@Controller('api')
export class BlockchainapiController {

    constructor(private blockchainapiService: BlockchainapiService) {
    }

    @ApiOperation({
        summary: 'Платний Варіант !!!  Get All NFT from Solana. Tray this account Solana in Base58 format : "3yFwqXBfZY4jBVUafQ1YEXw189y2dN3V5KQq9uzBDy1E"',
        description:"pubWallet - обовязкове поле. Вказується Salana wallet,  name - якщо заповнене  - фільтрує результат за ndt.data.name. ",

    })
    @Get('/blockchain/:pubWallet')
    @HttpCode(HttpStatus.OK)
    getAll(@Param('pubWallet') pubWallet: string, @Query('name') name?: string) {
        return this.blockchainapiService.blockChainApi(pubWallet, name);
    }

    @ApiOperation({
        summary: 'Безкоштовний варіант !!!  Get All NFT from Solana. Tray Solana: "3yFwqXBfZY4jBVUafQ1YEXw189y2dN3V5KQq9uzBDy1E"',
        description:"pubWallet - обовязкове поле. Вказується Salana wallet",

    })
    @Get('/nfteyez/:pubWallet')
    @HttpCode(HttpStatus.OK)
    async test(@Param('pubWallet') pubWallet: string) {
        return this.blockchainapiService.nfteyez(pubWallet)
    }



}