import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";

import {BlockchainapiModule} from './blockchainapi/blockchainapi.module';

@Module({
    imports: [
        BlockchainapiModule,
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        })
    ],
    controllers: [],
})
export class AppModule {
}
