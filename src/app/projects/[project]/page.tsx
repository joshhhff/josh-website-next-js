import Image from 'next/image';
import * as Constants from '../../constants/constants';
import Utilities from '@/app/services/utilities';
import Footer from '@/app/components/footer';

export default async function Project({params}: {params: Promise<{project: string}>}) {
    const projectKeys = Constants.ProjectKeys;
    const bannerImage = Utilities.getRandomBannerImage();

    if (!projectKeys.hasOwnProperty((await params).project)) {
        return (
            <div className="page-container" style={{ height: '100vw', width: '100%', }}>
                <div style={{ position: 'relative', textAlign: 'center', color: 'white', height: '50vh' }}>
                    <Image src={bannerImage} alt="Banner" layout="fill" objectFit="cover" />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <h1>Project Not Found for {(await params).project}</h1>
                    </div>
                </div>
            </div>
        );
    }

    const project = Constants.ProjectKeys[(await params).project as keyof typeof Constants.ProjectKeys];
    const title = typeof project === 'string' ? project : project.title;
    const content = typeof project === 'string' ? null : project.content();
    const date = typeof project === 'string' ? '' : project.date;
    const timeSpent = typeof project === 'string' ? '' : project.timeSpent;

    return (
        <div className="page-container" style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}>
            <div style={{ position: 'relative', textAlign: 'center', color: 'white', height: '50vh' }}>
                <Image src={bannerImage} alt="Banner" layout="fill" objectFit="cover" />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 style={{ fontSize: 35, fontWeight: 'bold' }}>{title}</h1>
                </div>
            </div>
            <p style={{ marginLeft: '5vw', marginTop: '2vw', color: '#b2b2b2' }}>{date} - {timeSpent}</p>
            {/* Load content related to project that is being viewed */}
            {content}
            {/*  <Footer /> */}
            <div style={{ paddingLeft: '4.5rem', paddingRight: '4.5rem' }}>
                <Footer />
            </div>
        </div>
    );
}