import { LibraryMSPage } from './app.po';

describe('library-ms App', () => {
  let page: LibraryMSPage;

  beforeEach(() => {
    page = new LibraryMSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
