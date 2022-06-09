import {Module} from '@nestjs/common';
import {AlchemyApiController} from './alchemy-api.controller';
import {AlchemyApiService} from './alchemy-api.service';
import {HttpModule} from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    controllers: [AlchemyApiController],
    providers: [AlchemyApiService]
})
export class AlchemyApiModule {
}
