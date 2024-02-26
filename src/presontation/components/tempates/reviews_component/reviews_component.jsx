import ReviewCard from "../../cards/review_card/review_card";
import TheButton from "../../widgets/button/button";


function ReviewsComponent() {
    return(
        <div className="reviews_component">
            <div className="reviews_component_description">
                <h4>Out Customer Reviews</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nemo.
                </p>
            </div>
            <div className="reviews_component_reviews">
                <ReviewCard />
                <ReviewCard />
            </div>
            <TheButton />
        </div>
    )
}
export default ReviewsComponent;