import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";

import {BlockchainapiModule} from './blockchainapi/blockchainapi.module';
import { NftModule } from './nft/nft.module';
import {AlchemyApiModule} from "./alchemy-api/alchemy-api.module";


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        BlockchainapiModule,
        NftModule,
        AlchemyApiModule
    ],
    controllers: [],
})
export class AppModule {
}
