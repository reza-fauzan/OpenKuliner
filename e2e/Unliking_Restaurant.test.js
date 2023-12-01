const assert = require('assert');
const { async } = require('regenerator-runtime');

Feature('Unliking Restaurant');

Scenario('Unlike a restaurant from favorite list', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant__title a');

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto');

  const likedCardTitle = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstRestaurantTitle, likedCardTitle);

  I.seeElement('.restaurant-item__content');
  I.click(likedCardTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item__not__found');
});
