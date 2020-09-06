export interface IRestaurantPreview {
  id: string;
  name: string;
  thumb: string;
  user_rating: {
    aggregate_rating: string;
    rating_text: string;
  };
  location: {
    locality: string;
    city: string;
  };
}
