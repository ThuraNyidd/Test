import FooterCurve from "../components/FooterCurve"
import Footer from "../components/footer/Footer"
import Menu from "../components/menu/Menu"
import PartnersComponent from '../components/partners'
import Head from "next/head"
const Partners = () => {
    return (
        <>
            {/* <Head>
                <title>Partner</title>
                <meta name="description" content="Smilax Global Co.,Ltd." />
                <meta name="keywords" content="Aung Khine Tun, Aung Tun, Zarchi Khin Kyaw, Smilax Global, 
Professional, Professional Service, Magic, Developers, Business Development,
Marketing, Human Resource, Admin, Web Developers, IT, Security, Designer"></meta>
            </Head> */}
            <Head>
                <title>Our Partners - Smilax Global Co.,Ltd.</title>
                <meta name="description" content="Discover our valuable partners at Smilax Global Co.,Ltd." />
                <meta name="keywords" content="Our Partners, Smilax Global, Professional Service, Business Development, Marketing, Human Resource, Web Developers, IT, Security, Designer" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Smilax Global Co.,Ltd." />
                <link rel="canonical" href="https://smilaxglobal.com/partners" />
            </Head>
            <Menu />
            <div className="mb-10">
                <PartnersComponent />
            </div>

            <FooterCurve />
            <Footer />
        </>
    )
}
export default Partners