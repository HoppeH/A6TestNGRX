import { SimenloggModule } from './simenlogg.module';

describe('SimenloggModule', () => {
  let simenloggModule: SimenloggModule;

  beforeEach(() => {
    simenloggModule = new SimenloggModule();
  });

  it('should create an instance', () => {
    expect(simenloggModule).toBeTruthy();
  });
});
