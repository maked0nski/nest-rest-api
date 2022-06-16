import {Controller, Get, HttpCode, HttpStatus, Param} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {NftService} from "./nft.service";

@ApiTags('Nfteyez Api')
@Controller('nft')
export class NftController {
    constructor(private nfteyezService: NftService) {
    }
    @Get('/:pubWallet')
    @HttpCode(HttpStatus.OK)
    GetNftsList(@Param('pubWallet') pubWallet: string){
        return this.nfteyezService.getNftList(pubWallet);
    }
}
