import { BikeSearchPage } from './app.po';

describe('bike-search App', () => {
  let page: BikeSearchPage;

  beforeEach(() => {
    page = new BikeSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
