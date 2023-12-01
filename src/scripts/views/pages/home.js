import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `

    <section id="hero" class="hero">
        <h1>Discover Restaurant & Delicious Food</h1>
        <p>
            Some top restaurant for dining out or in!
        </p>
    </section>
        
        <div class="information">
            <h2 class="content__heading">Explore Restaurants</h2>
            <div id="restaurants" class="restaurants"></div>
        </div>
        `;
  },

  async afterRender() {
    const restaurantsApi = await RestaurantDbSource.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsApi.restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
