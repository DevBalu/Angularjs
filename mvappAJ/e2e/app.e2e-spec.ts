import { MvappAJPage } from './app.po';

describe('mvapp-aj App', () => {
  let page: MvappAJPage;

  beforeEach(() => {
    page = new MvappAJPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
