import { AngularJs2Page } from './app.po';

describe('angular-js2 App', () => {
  let page: AngularJs2Page;

  beforeEach(() => {
    page = new AngularJs2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
