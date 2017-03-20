import { BlankAngularAppPage } from './app.po';

describe('angular-cli-app App', function() {
  let page: BlankAngularAppPage;

  beforeEach(() => {
    page = new BlankAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
