import Image from 'next/image';
import * as Constants from '../../constants/constants';
import Utilities from '@/app/services/utilities';
import Footer from '@/app/components/footer';

export default async function PersonalProject({params}: {params: Promise<{personalProject: string}>}) {
    const projectKeys = Constants.PersonalProjectsKeys;
    const bannerImage = await Utilities.getRandomBannerImage();

    console.log('Project:', (await params).personalProject);

    if (!projectKeys.hasOwnProperty((await params).personalProject)) {
        return (
            <div className="page-container" style={{ height: '100vw', width: '100%', }}>
                <div style={{ position: 'relative', textAlign: 'center', color: 'white', height: '50vh' }}>
                    <Image src={bannerImage} alt="Banner" layout="fill" objectFit="cover" />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        <h1>Project Not Found for {(await params).personalProject}</h1>
                    </div>
                </div>
            </div>
        );
    }

    const project = Constants.PersonalProjectsKeys[(await params).personalProject as keyof typeof Constants.PersonalProjectsKeys];
    const title = typeof project === 'string' ? project : project.title;
    const date = typeof project === 'string' ? '' : project.date;
    const content = typeof project === 'string' ? null : project.content();

    return (
        <div className="page-container" style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }}>
            <div style={{ position: 'relative', textAlign: 'center', color: 'white', height: '50vh' }}>
                <Image src={bannerImage} alt="Banner" layout="fill" objectFit="cover" />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1 style={{ fontSize: 35, fontWeight: 'bold' }}>{title}</h1>
                </div>
            </div>
            <p style={{ marginLeft: '5vw', marginTop: '2vw', color: '#b2b2b2' }}>{date}</p>
            {/* Load content related to project that is being viewed */}
            {content}
           {/*  <Footer /> */}
            <div className='projects-footer-container' style={{ paddingLeft: '4.5rem', paddingRight: '4.5rem' }}>
                <Footer />
            </div>
        </div>
    );
}