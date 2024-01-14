import { Test, TestingModule } from '@nestjs/testing';
import { SpaceMembersController } from './space-members.controller';
import { SpaceMembersService } from './space-members.service';

describe('SpaceMembersController', () => {
  let controller: SpaceMembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpaceMembersController],
      providers: [SpaceMembersService],
    }).compile();

    controller = module.get<SpaceMembersController>(SpaceMembersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
