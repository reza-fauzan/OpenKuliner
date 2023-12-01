/* eslint-disable no-new */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantFavoriteTemplate } from '../templates/template-creator';
import FavoriteRestaurantView from './liked-restaurants/favorite-restaurant-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantView();

const Like = {
  async render() {
    // return `
    //         <div class="content">
    //             <h2 class="favorite__heading">Your Favorite Restaurants</h2>
    //             <div id="resto" class="resto"></div>
    //         </div>
    //     `;

    return view.getTemplate();
  },

  async afterRender() {
    // const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    // const restoContainer = document.querySelector('#resto');

    // // eslint-disable-next-line no-shadow
    // restaurant.forEach((restaurant) => {
    //   restoContainer.innerHTML += createRestaurantFavoriteTemplate(restaurant);
    // });
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Like;
