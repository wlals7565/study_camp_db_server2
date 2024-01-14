import { Injectable } from '@nestjs/common';
import { CreateSpaceMemberDto } from './dto/create-space-member.dto';
import { UpdateSpaceMemberDto } from './dto/update-space-member.dto';

@Injectable()
export class SpaceMembersService {
  create(createSpaceMemberDto: CreateSpaceMemberDto) {
    return 'This action adds a new spaceMember';
  }

  findAll() {
    return `This action returns all spaceMembers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spaceMember`;
  }

  update(id: number, updateSpaceMemberDto: UpdateSpaceMemberDto) {
    return `This action updates a #${id} spaceMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} spaceMember`;
  }
}
