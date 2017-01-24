import { Angular2InjectionTestingPage } from './app.po';

describe('angular2-injection-testing App', function() {
  let page: Angular2InjectionTestingPage;

  beforeEach(() => {
    page = new Angular2InjectionTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
