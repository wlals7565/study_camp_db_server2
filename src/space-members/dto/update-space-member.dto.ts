import { PartialType } from '@nestjs/mapped-types';
import { CreateSpaceMemberDto } from './create-space-member.dto';

export class UpdateSpaceMemberDto extends PartialType(CreateSpaceMemberDto) {}
