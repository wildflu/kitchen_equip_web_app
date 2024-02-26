import AboutComponent from "../../components/tempates/about_component/about_component";
import ContactComponent from "../../components/tempates/contact_component/contact_component";
import GalleryComponent from "../../components/tempates/gallery_component/gallery_component";
import IntroductionComponent from "../../components/tempates/introduction_component/introduction_component";
import ReviewsComponent from "../../components/tempates/reviews_component/reviews_component";
import StayUpdatedComponent from "../../components/tempates/stay_updated/stay_updated";


function HomePage() {
    return(
        <div className="home_page">
            <IntroductionComponent />
            <AboutComponent />
            <GalleryComponent />
            <ReviewsComponent />
            <StayUpdatedComponent />
            <ContactComponent />
        </div>
    )
}

export default HomePage;