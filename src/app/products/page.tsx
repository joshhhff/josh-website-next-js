/* import Image from "next/image";
import homeImage from '../../../public/home.jpg'
import Button from "../components/button";
import Link from "next/link"; */
import { redirect } from "next/navigation";


export default function Products() {
    // Redirect to home page
    // This is a temporary solution until the products page is ready
    redirect('/');
    
    return (
        {/* <div className="page-container">
            <div className="landing-title" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            
            <Image src={homeImage} alt="Josh Ford" layout="fill" objectFit="cover" />
            <h1 className="slide-in" style={{ position: 'relative', zIndex: 1, color: 'white', fontSize: '2.5rem', textAlign: 'center' }}>{"Products coming soon..."}</h1>
            <div className="buttons slide-in" style={{ zIndex: 1, display: 'flex', justifyContent: 'center', width: '100%', marginTop: 20 }}>
                <Link href="/"><Button text="Home" buttonColour="white" textColour="black" borderRadius={5} /></Link>
            </div>
            </div>
        </div> */}
    )
}