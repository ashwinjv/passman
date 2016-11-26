import { PassmanPage } from './app.po';

describe('passman App', function() {
  let page: PassmanPage;

  beforeEach(() => {
    page = new PassmanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
