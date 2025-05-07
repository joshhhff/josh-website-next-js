import Image from "next/image";
import homeImage from "../../public/home.jpg";
import Button from "./components/button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="page-container">
            <div className="landing-title" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Image src={homeImage} alt="Josh Ford" layout="fill" objectFit="cover" />
                <h1 className="slide-in" style={{ position: 'relative', zIndex: 1, color: 'white', fontSize: '3rem', textAlign: 'center' }}>Hi, I'm Josh. A NetSuite Developer</h1>
                <h2 className="slide-in" style={{ position: 'relative', zIndex: 1, color: 'white', fontSize: '1.15rem', marginTop: 10, width: '60%', textAlign: 'center' }}>I build custom software and solutions for businesses running on NetSuite. Feel like your account needs tailoring to your needs? Reach out for a consultation.</h2>
                <div className="buttons slide-in" style={{ zIndex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '18rem', marginTop: 20 }}>
                    <Link href="/projects"><Button text="Recent Projects" buttonColour="white" textColour="black" borderRadius={5} /></Link>
                    <Link href="/contact"><Button text="Contact Me" buttonColour="black" textColour="white" borderRadius={5} /></Link>
                </div>
            </div>
        </div>
    );
}
