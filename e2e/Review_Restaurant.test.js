const { async } = require('regenerator-runtime');

Feature('Review Restaurant');

Scenario('Post comment user to review restaurant', async ({ I }) => {
  I.amOnPage('/#/home');

  I.seeElement('.restaurant__title a');
  const firstTitle = locate('.restaurant__title a').first();
  I.click(firstTitle);

  I.seeElement('#name-input');
  I.seeElement('#review-input');
  I.seeElement('#submit-review');

  I.fillField('#name-input', 'Robot');
  I.fillField('#review-input', 'Excuse me i just robot');
  I.click('#submit-review');

  I.see('Robot', '.review-name');
  I.see('Excuse me i just robot', '.review-body');
});
