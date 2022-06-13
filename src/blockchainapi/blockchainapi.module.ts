import { Module } from '@nestjs/common';
import {HttpModule} from "@nestjs/axios";

import { BlockchainapiService } from './blockchainapi.service';
import { BlockchainapiController } from './blockchainapi.controller';

@Module({
  imports: [HttpModule],
  providers: [BlockchainapiService],
  controllers: [BlockchainapiController]
})
export class BlockchainapiModule {}
