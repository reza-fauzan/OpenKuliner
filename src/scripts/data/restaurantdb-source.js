import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async restaurantList() {
    try {
      const response = await fetch(API_ENDPOINT.HOME);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(`Error fetching restaurant list: ${error}`);
      throw error;
    }
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postRestaurantReview(data) {
    try {
      const response = await fetch(API_ENDPOINT.FORM_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      console.error(`Error posting restaurant review: ${error}`);
      throw error;
    }
  }
}

export default RestaurantDbSource;
