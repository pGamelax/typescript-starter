import { Test, TestingModule } from '@nestjs/testing';
import { PlayersPushService } from './players-push.service';

describe('PlayersPushService', () => {
  let service: PlayersPushService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayersPushService],
    }).compile();

    service = module.get<PlayersPushService>(PlayersPushService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
