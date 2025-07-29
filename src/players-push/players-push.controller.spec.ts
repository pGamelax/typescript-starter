import { Test, TestingModule } from '@nestjs/testing';
import { PlayersPushController } from './players-push.controller';

describe('PlayersPushController', () => {
  let controller: PlayersPushController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersPushController],
    }).compile();

    controller = module.get<PlayersPushController>(PlayersPushController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
