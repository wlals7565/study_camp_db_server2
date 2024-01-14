import { Test, TestingModule } from '@nestjs/testing';
import { SpaceMembersService } from './space-members.service';

describe('SpaceMembersService', () => {
  let service: SpaceMembersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpaceMembersService],
    }).compile();

    service = module.get<SpaceMembersService>(SpaceMembersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
