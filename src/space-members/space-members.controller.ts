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
}
