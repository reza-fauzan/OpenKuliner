import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantView {
  // eslint-disable-next-line class-methods-use-this
  getTemplate() {
    return `
      <div class="content">
        <h2 class="favorite__heading">Your Favorite Restaurant</h2>

        <div id="restaurant-search-container">
        <input id="query" type="text" placeholder="Masukan Nama Restoran">
        <span id="search-icon">🔍</span>
            <div id="resto" class="resto">
            </div>
        </div>
      </div>
      
      `;
  }

  // eslint-disable-next-line class-methods-use-this
  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  showRestaurants(restaurants) {
    let html;
    if (restaurants.length > 0) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)),
        '',
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.querySelector('.resto').innerHTML = html;

    document
      .getElementById('restaurant-search-container')
      .dispatchEvent(new Event('restaurants:searched:updated'));

    document.getElementById('resto').dispatchEvent(new Event('restaurants:updated'));
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)),
        '',
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('resto').innerHTML = html;

    document.getElementById('resto').dispatchEvent(new Event('resto:updated'));
  }

  // eslint-disable-next-line class-methods-use-this
  _getEmptyRestaurantTemplate() {
    return `
    <div class="restaurant-item__not__found">
        Tidak ada restaurant untuk ditampilkan
    </div>
    `;
  }
}

export default FavoriteRestaurantView;
