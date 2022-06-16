import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";

import {BlockchainapiModule} from './blockchainapi/blockchainapi.module';
import { NftModule } from './nft/nft.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        BlockchainapiModule,
        NftModule,
    ],
    controllers: [],
})
export class AppModule {
}
