import './Home.css';
import MyNav from '../Componenet/Nav/MyNav';
import Section from '../Componenet/Section/Section';
import Cources from '../Componenet/Cources/Cources';
import Footer from '../Componenet/Footer/Footer';

export default function Home(){
    return(
        <>
            <MyNav />
            <Section />
            <Cources />
            <Footer />

        </>
    )
}