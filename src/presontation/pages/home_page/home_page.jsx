import AboutComponent from "../../components/tempates/about_component/about_component";
import GalleryComponent from "../../components/tempates/gallery_component/gallery_component";
import IntroductionComponent from "../../components/tempates/introduction_component/introduction_component";


function HomePage() {
    return(
        <div className="home_page">
            <IntroductionComponent />
            <AboutComponent />
            <GalleryComponent />
        </div>
    )
}

export default HomePage;