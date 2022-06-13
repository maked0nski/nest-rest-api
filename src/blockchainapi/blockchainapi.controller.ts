import {Controller, Get, Param, Query,} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";

import {BlockchainapiService} from "./blockchainapi.service";

@ApiTags('Block Chain Api')
@Controller('blockchainapi')
export class BlockchainapiController {

    constructor(private blockchainapiService: BlockchainapiService) {
    }

    @ApiOperation({
        summary: 'Get All NFT from Solana. Tray this account Solana in Base58 format : "3yFwqXBfZY4jBVUafQ1YEXw189y2dN3V5KQq9uzBDy1E"',
        description:"pubWallet - обовязкове поле. Вказується Salana wallet,  name - якщо заповнене  - фільтрує результат за ndt.data.name. ",

    })

    @Get('/:pubWallet')
    getAll(@Param('pubWallet') pubWallet: string, @Query('name') name?: string) {
        return this.blockchainapiService.blockChainApi(pubWallet, name);
    }

}