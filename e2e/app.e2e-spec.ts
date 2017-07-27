import { MyNewsstandPage } from './app.po';

describe('my-newsstand App', () => {
  let page: MyNewsstandPage;

  beforeEach(() => {
    page = new MyNewsstandPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
