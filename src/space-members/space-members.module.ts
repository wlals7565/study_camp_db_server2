import { Module } from '@nestjs/common';
import { SpaceMembersService } from './space-members.service';
import { SpaceMembersController } from './space-members.controller';

@Module({
  controllers: [SpaceMembersController],
  providers: [SpaceMembersService],
})
export class SpaceMembersModule {}
