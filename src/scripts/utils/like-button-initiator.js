import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  // eslint-disable-next-line no-shadow
  async init({ likeButtonContainer, FavoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = FavoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    // const likeButton = document.querySelector('#likeButton');
    const likeButton = this._likeButtonContainer.querySelector('#likeButton');

    // likeButton.addEventListener('click', async () => {
    //   await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
    //   await this._renderButton();
    // });
    if (likeButton) {
      likeButton.addEventListener('click', async () => {
        await this._favoriteRestaurants.putRestaurant(this._restaurant);
        await this._renderButton();
      });
    } else {
      console.error('Element #likeButton not found in _renderLike');
    }
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    // const likeButton = document.querySelector('#likeButton');

    // Update to querySelector inside _renderLiked container
    const likeButton = this._likeButtonContainer.querySelector('#likeButton');

    // likeButton.addEventListener('click', async () => {
    //   await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
    //   await this._renderButton();
    // });

    // Ensure the likeButton is found
    if (likeButton) {
      likeButton.addEventListener('click', async () => {
        await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
        await this._renderButton();
      });
    } else {
      console.error('Element #likeButton not found in _renderLiked');
    }
  },
};

export default LikeButtonInitiator;
