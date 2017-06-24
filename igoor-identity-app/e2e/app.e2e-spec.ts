import { IgoorIdentityAppPage } from './app.po';

describe('igoor-identity-app App', function() {
  let page: IgoorIdentityAppPage;

  beforeEach(() => {
    page = new IgoorIdentityAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
