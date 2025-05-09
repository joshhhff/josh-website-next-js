import Utilities from '@/app/services/utilities';
import * as Constants from '../../constants/constants';
import Image from 'next/image';

export default async function Product({params}: {params: Promise<{product: string}>}) {
    const productKeys = Constants.ProductKeys;
    const bannerImage = Utilities.getRandomBannerImage();

    if (!productKeys.hasOwnProperty( (await params).product)) {
        return (
            <div className="page-container" style={{ height: '100vw', width: '100%', }}>
                <div style={{ position: 'relative', textAlign: 'center', color: 'white', height: '50vh' }}>
                    <h1>Product Not Found for {(await params).product}</h1>
                </div>
            </div>
        );
    }

    const product = Constants.ProductKeys[(await params).product as keyof typeof Constants.ProductKeys];
    const title = product.title;
    const price = product.price;
    const content = product.content();

    return (
        <div className="page-container" style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}>
            <div style={{ position: 'relative', textAlign: 'center', color: 'white', height: '50vh' }}>
                <Image src={bannerImage} alt="Banner" layout="fill" objectFit="cover" />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 style={{ fontSize: 50, fontWeight: 'bold' }}>{title}</h1>
                </div>
            </div>
            <p style={{ marginLeft: '5vw', marginTop: '2vw', color: '#b2b2b2' }}>{price}</p>
            {/* Load content related to project that is being viewed */}
            {content}
        </div>
    );
}