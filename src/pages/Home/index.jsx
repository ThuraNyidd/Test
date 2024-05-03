import Menu from '../../components/menu/Menu'
import HomeBodyComponent from '../../components/HomeBody/HomeBody'
import FooterCurve from "../../components/FooterCurve"
import Projects from "../../components/Projects"
import SlidingImages from "../../components/SlidingImages"
import Footer from "../../components/footer/Footer"
const HomePage = () => {
    return (
        <div>
            <Menu />
            <HomeBodyComponent />
            <Projects />
            <SlidingImages />
            <FooterCurve />
            <Footer />
        </div>
    )
}
export default HomePage