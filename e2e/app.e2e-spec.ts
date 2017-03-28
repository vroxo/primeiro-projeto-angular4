import { PrimeiroProjetoAngular4Page } from './app.po';

describe('primeiro-projeto-angular4 App', () => {
  let page: PrimeiroProjetoAngular4Page;

  beforeEach(() => {
    page = new PrimeiroProjetoAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
