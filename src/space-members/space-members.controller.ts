import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpaceMembersService } from './space-members.service';
import { CreateSpaceMemberDto } from './dto/create-space-member.dto';
import { UpdateSpaceMemberDto } from './dto/update-space-member.dto';

@Controller('space-members')
export class SpaceMembersController {
  constructor(private readonly spaceMembersService: SpaceMembersService) {}

  @Post()
  create(@Body() createSpaceMemberDto: CreateSpaceMemberDto) {
    return this.spaceMembersService.create(createSpaceMemberDto);
  }

  @Get()
  findAll() {
    return this.spaceMembersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spaceMembersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpaceMemberDto: UpdateSpaceMemberDto,
  ) {
    return this.spaceMembersService.update(+id, updateSpaceMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spaceMembersService.remove(+id);
  }
}
