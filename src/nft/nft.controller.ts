import {Controller, Get, HttpCode, HttpStatus, Param, Query} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {NftService} from "./nft.service";
import {GetPagination} from "./decorators/get-pagination";
import {Pagination} from "./types/pagination.interface";

@ApiTags('Nfteyez Api')
@Controller('nft')
export class NftController {
    constructor(private nfteyezService: NftService) {
    }

    @Get('/:pubWallet')
    @HttpCode(HttpStatus.OK)
    GetNftsList(@Param('pubWallet') pubWallet: string, @Query('name') name?: string, @Query('page_size') page_size?, @Query('page_number') page_number?) {
        return this.nfteyezService.getNftList(pubWallet, name, page_size, page_number);

    }
}
