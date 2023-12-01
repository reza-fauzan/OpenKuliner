import RestaurantDbSource from '../data/restaurantdb-source';

const PostReview = async (url, name, review) => {
  const dataInput = {
    id: url.id,
    name,
    review,
  };

  const reviewContainer = document.querySelector('.detail-review');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newReview = `
    <div class="detail-review-item">
      <div class="review-header">
        <p class="review-name">${name}</p>

        <p class="review-date">${date}</p>
      </div>

      <div class="review-body">
        ${review}
      </div>
    </div>
    `;

  try {
    const response = await RestaurantDbSource.postRestaurantReview(dataInput);
    if (response) {
      reviewContainer.innerHTML += newReview;
    }
  } catch (error) {
    console.error(`Error posting restaurant review: ${error}`);
  }
};

export default PostReview;
