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
        description:"localhost:3000/nft/GitYucwpNcg6Dx1Y15UQ9TQn8LZMX1uuqQNn8rXxEWNC?name=Saiba&page_size=3&page_number=2" +
            "  pubWallet - обовязкове поле. Вказується Salana wallet, в кверю -  name - якщо заповнене  - фільтрує результат за name. + пагінація",
    })
    @Get('/blockchain/:pubWallet')
    @HttpCode(HttpStatus.OK)
    getAll(@Param('pubWallet') pubWallet: string, @Query('name') name?: string, @Query('page_size') page_size?, @Query('page_number') page_number?) {
        return this.blockchainapiService.blockChainApi(pubWallet, name, page_size, page_number);
    }

}