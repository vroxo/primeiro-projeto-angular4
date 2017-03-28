import { browser, element, by } from 'protractor';

export class PrimeiroProjetoAngular4Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
