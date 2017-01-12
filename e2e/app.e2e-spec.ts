import { AngMaterialPage } from './app.po';

describe('ang-material App', function() {
  let page: AngMaterialPage;

  beforeEach(() => {
    page = new AngMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
