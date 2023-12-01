import CONFIG from '../../globals/config';

// LIST UNTUK MENU RESTORAN
const listMenu = (items) => {
  // eslint-disable-next-line no-shadow
  let listMenu = '';
  items.forEach((item) => {
    listMenu += `<li>${item.name}</li>`;
  });
  return listMenu;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name || '-'}"
          data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating || '-'}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h3>
      <p>${restaurant.description || '-'}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<h2 class="resto__title">${restaurant.name}</h2>
  <img class="resto__poster lazyload" data-src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>⭐️${restaurant.rating}</p>
  </div>
  <div class="resto__overview">
    <h3>Tentang ${restaurant.name}</h3>
    <p>${restaurant.description}</p>
  </div>

  <div class="restaurant__menu">
  <h3 tabindex="0">Menu Restoran</h3>
  <h4 tabindex="0">Foods</h4>
    <ul tabindex="0">
    ${listMenu(restaurant.menus.foods)}
    </ul>
    <h4 tabindex="0">Drinks</h4>
      <ul tabindex="0">
        ${listMenu(restaurant.menus.drinks)}
      </ul>
  </div>

  <h3 class="title-review">Reviews</h3>

  <div class="detail-review">
    ${restaurant.customerReviews
    .map(
      (review) => `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name">${review.name}</p>

              <p class="review-date">${review.date}</p>
            </div>

            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `,
    )
    .join('')}
    </div>

  <div class="form-review">
            <form autocomplete="on">
              <div class="mb-3">
                <label for="name-input" class="form-label">Name</label>
                <input type="text" class="form-control" id="name-input" minlength="3" placeholder="Your name..." required>
              </div>

              <div class="mb-3">
                <label for="review-input" class="form-label">Review</label>
                <input type="text" class="form-control" id="review-input" minlength="3" placeholder="Your review..." required>
              </div>

              <button id="submit-review" type="submit" class="submit-btn">Submit Review</button>
            </form>
          </div>
`;

const createRestaurantFavoriteTemplate = (restaurant) => `
<div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
           data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${
  restaurant.rating
}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <h4>${restaurant.city}</h4>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantFavoriteTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
