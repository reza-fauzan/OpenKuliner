import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import PostReview from '../../utils/post-review';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    // LIKE

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      FavoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.city,
      },
    });

    // FORM
    const btnSubmitReview = document.querySelector('#submit-review');
    const nameInput = document.querySelector('#name-input');
    const reviewInput = document.querySelector('#review-input');

    btnSubmitReview.addEventListener('click', async (e) => {
      e.preventDefault();

      // eslint-disable-next-line no-bitwise
      if ((nameInput.value !== '') & (reviewInput.value !== '')) {
        await PostReview(url, nameInput.value, reviewInput.value);
        nameInput.value = '';
        reviewInput.value = '';
      } else {
        // eslint-disable-next-line no-undef
        initAlertError("Name and Review can't be empty");
      }
    });
  },
};

export default Detail;
