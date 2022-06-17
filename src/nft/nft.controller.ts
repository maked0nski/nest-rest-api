import {Controller, Get, HttpCode, HttpStatus, Param, Query} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {NftService} from "./nft.service";

@ApiTags('Nfteyez Api')
@Controller('nft')
export class NftController {
    constructor(private nfteyezService: NftService) {
    }

    @ApiOperation({
        summary: 'Безкоштовний варіант !!!  Get All NFT from Solana. Tray Solana: "3yFwqXBfZY4jBVUafQ1YEXw189y2dN3V5KQq9uzBDy1E"',
        description:"localhost:3000/nft/GitYucwpNcg6Dx1Y15UQ9TQn8LZMX1uuqQNn8rXxEWNC?name=Saiba&page_size=3&page_number=2" +
            "  pubWallet - обовязкове поле. Вказується Salana wallet, в кверю -  name - якщо заповнене  - фільтрує результат за ndt.data.name. + пагінація",
    })
    @Get('/:pubWallet')
    @HttpCode(HttpStatus.OK)
    GetNftsList(@Param('pubWallet') pubWallet: string, @Query('name') name?: string, @Query('page_size') page_size?, @Query('page_number') page_number?) {
        return this.nfteyezService.getNftList(pubWallet, name, page_size, page_number);

    }
}
