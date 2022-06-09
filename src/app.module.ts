import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';

import {AlchemyApiModule} from './alchemy-api/alchemy-api.module';

@Module({
    imports: [AlchemyApiModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
