import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';

import {AlchemyApiModule} from './alchemy-api/alchemy-api.module';
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [AlchemyApiModule,
    ConfigModule.forRoot({
        envFilePath: `.${process.env.NODE_ENV}.env`
    })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
