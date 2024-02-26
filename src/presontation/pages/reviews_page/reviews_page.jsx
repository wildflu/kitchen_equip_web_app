import ReviewCard from "../../components/cards/review_card/review_card";
import TheButton from "../../components/widgets/button/button";


function ReviewsPage(){
    return(
        <div className="review_page">
            <div className="reviews_page_description">
                <h4>
                    Out Customer Reviews
                </h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Praesentium architecto commodi ea distinctio quaerat. Quaerat et harum 
                    rerum aliquid placeat, obcaecati at voluptas iusto, fuga repellat alias eius aliquam autem.
                </p>
                <TheButton />
            </div>
            <div className="reviews_cads">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </div>
    )
}

export default ReviewsPage;