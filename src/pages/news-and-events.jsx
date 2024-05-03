import FooterCurve from "../components/FooterCurve"
import Footer from "../components/footer/Footer"
import Menu from "../components/menu/Menu"
import NewsAndEventComponent from '../components/newsAndEventsComponent'
import Head from "next/head"
const NewsAndEvents = () => {
    return (
        <>
            {/* <Head>
                <title>News and Event</title>
                <meta name="description" content="Smilax Global Co.,Ltd." />
                <meta name="keywords" content="Aung Khine Tun, Aung Tun, Zarchi Khin Kyaw, Smilax Global, 
Professional, Professional Service, Magic, Developers, Business Development,
Marketing, Human Resource, Admin, Web Developers, IT, Security, Designer"/>

            </Head> */}
            <Head>
                <title>News and Events - Smilax Global Co.,Ltd.</title>
                <meta name="description" content="Stay updated with the latest news and events at Smilax Global Co.,Ltd." />
                <meta name="keywords" content="News and Events, Smilax Global, Professional Service, Business Development, Marketing, Human Resource, Web Developers, IT, Security, Designer" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Smilax Global Co.,Ltd." />
                <link rel="canonical" href="https://smilaxglobal.com/news-and-events" />
            </Head>
            <Menu />
            <NewsAndEventComponent />
            <FooterCurve />
            <Footer />
        </>

    )
}
export default NewsAndEvents