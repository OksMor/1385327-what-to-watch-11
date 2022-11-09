import { Review } from '../../types/types';

type FilmReviewsProps = {
  reviews: Review[];
}

const getReview = (review: Review): JSX.Element => (
  <div className="review" key={review.id}>
    <blockquote className="review__quote">
      <p className="review__text">{review.comment}</p>
      <footer className="review__details">
        <cite className="review__author">{review.user.name}</cite>
        <time className="review__date" dateTime={review.date}>{(new Date(review.date)).toLocaleDateString('en-us', {year: 'numeric', month: 'long', day: 'numeric'})}</time>
      </footer>
    </blockquote>
    <div className="review__rating">{review.rating}</div>
  </div>
);


function FilmReviews(props: FilmReviewsProps): JSX.Element { //Возвращает список комментариев для фильма с идентификатором filmId...
  const { reviews } = props;
  const reviewsArray = Object.values(reviews);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewsArray.slice(reviewsArray.length / 2, reviewsArray.length).map((review) => getReview(review))}
      </div>
      <div className="film-card__reviews-col">
        {reviewsArray.slice(0, reviewsArray.length / 2).map((review) => getReview(review))}
      </div>
    </div>
  );
}

export default FilmReviews;
