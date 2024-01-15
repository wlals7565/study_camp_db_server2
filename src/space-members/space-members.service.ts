import { ConflictException, Injectable } from '@nestjs/common';
import { CreateSpaceMemberDto } from './dto/create-space-member.dto';
import { UpdateSpaceMemberDto } from './dto/update-space-member.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SpaceMember } from './entities/space-member.entity';
import { Repository } from 'typeorm';
import { SpaceMemberRole } from './types/space-member-role.type';

@Injectable()
export class SpaceMembersService {
  constructor(
    @InjectRepository(SpaceMember)
    private spaceMemberRepository: Repository<SpaceMember>,
  ) {}

  //Public 영역
  // 흐름: 학습공간을 찾는다.(Space에서 이루어져야 함.) -> 유저를 생성한다.(여기서) create와 save-> 유저를 학습공간에 넣는다.(Space에서)
  // TODO: Role는 어떻게 확인할거냐? 참 생각할거 많네. 
  //학습공간의 멤버를 생성합니다. 유저 정보와 학습 공간 스펙은 현 서비스에서 다루는게 옳지 않다고 생각해 이를 이용하는 모듈에 값을 리턴합니다.
  createSpaceMember(role: SpaceMemberRole){
    let spaceMember = this.spaceMemberRepository.create({role});
    return spaceMember;
  }

  // 학습 공간 저장은 현 서비스에서 하는게 맞다고 판단해 현 서비스에서 저장합니다.
  async saveSpaceMember(spaceMember: SpaceMember){
    //검증 해야할 것 이미 있는 멤버인가? 멤버가 실제로 존재하는가? 
    try {
      await this.spaceMemberRepository.save(spaceMember);
    }
   catch(error){
    throw new ConflictException("서버 에러 발생")
  }
}
  //추방기능도 만들어야 하나?
  //Private 영역
}
