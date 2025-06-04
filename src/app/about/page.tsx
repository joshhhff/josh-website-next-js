import javascriptLogo from '../../../public/JavascriptLogo.png'
import typescriptLogo from '../../../public/typescript.svg'
import netsuiteLogo from '../../../public/netsuite.png'
import reactLogo from '../../../public/react.png'
import nextLogo from '../../../public/next.svg'
import flutterLogo from '../../../public/flutter.png'
import dartLogo from '../../../public/DartLogo.png'
import htmlLogo from '../../../public/htmlLogo.webp'
import cssLogo from '../../../public/cssLogo.png'
import cSharpLogo from '../../../public/cSharpLogo.png'
import javaLogo from '../../../public/javaLogo.png'
import dotNetLogo from '../../../public/dotNetLogo.png'
import awsLogo from '../../../public/awsLogo.png'
import firebaseLogo from '../../../public/firebaseLogo.png'
import pythonLogo from '../../../public/pythonLogo.png'
import vscodeLogo from '../../../public/vscode-logo.png'
import SkillsCard from "../components/skills";
import Link from 'next/link'
import Button from '../components/button'
import Footer from '../components/footer'
import ScrollTo from '../components/scroll-to'

export default async function About({ searchParams }: { searchParams?: Promise<{ scrollTo?: string }> }) {
    return (
        <div className="page-container" style={{ height: '100%', width: '100%', paddingTop: '15vh', paddingLeft: '5vw', paddingRight: '5vw' }}>
            {(await searchParams)?.scrollTo && <ScrollTo id={(await searchParams)?.scrollTo as string} />}
            <div className="page-title" style={{ textAlign: 'left', width: '100%' }}>
                <h1 style={{ fontSize: 50, fontWeight: 'bold' }}>About Me</h1>
            </div>

            <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />
            
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, marginRight: '2rem' }}>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                        {`I am a UK based Software Developer primarily focused on NetSuite Development. I am currently a 2nd year Degree Apprentice with an Oracle NetSuite Alliance Partner. I started with designing Advanced PDFs for transactions within NetSuite which uses HTML, progressing to now where I can handle complex customisations and integrations using NetSuite's SuiteScript APIs.`}
                    </p>
                </div>
            </div>

            <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />

            <h2 id='technologies' style={{ fontSize: 30, fontWeight: 'bold', marginTop: '2rem' }}>{"Technologies & Frameworks"}</h2>
            <div className="skills-1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1, marginTop: '1rem' }}>
                    <p>
                        {"I have used a variety of different technologies either in my career or personal projects. NetSuite technologies are my primary focus, along with SuiteScript which is essentially JavaScript but with NetSuite's scripting libraries which allow me to interact with the data within the NetSuite instance."}
                        <br/><br/>
                        {"I also have experience is using frameworks such as React.js and Next.js for building web applications. This website is built using Next.js! Flutter is my choice for mobile development, and one of my current personal projects is a Fitness Tracker app which is built using Flutter."}
                    </p>
                </div>
                <div className="skill-cards" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'flex-end', flex: 2 }}>
                    <SkillsCard image={netsuiteLogo} text="NetSuite" />
                    <SkillsCard image={netsuiteLogo} text="SuiteScript" />
                    <SkillsCard image={reactLogo} text="React.js" />
                    <SkillsCard image={nextLogo} text="Next.js" applyBorderRadius={false} />
                    <SkillsCard image={flutterLogo} text="Flutter" />
                    <SkillsCard image={dotNetLogo} text="ASP.NET Core Razor Pages" />
                    <SkillsCard image={awsLogo} text="Amazon Web Services" />
                    <SkillsCard image={firebaseLogo} text="Firebase" />
                </div>
            </div>

            <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />

            <h2 id='languages' style={{ fontSize: 30, fontWeight: 'bold', marginTop: '2rem' }}>Languages</h2>
            <div className="skills-1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1, marginTop: '1rem' }}>
                    <p>
                        {"90% of all development work I do is in JavaScript, primarily because of using SuiteScript which is JavaScript based. I also have a lot of experience using TypeScript, this website for example is using TypeScript. Another one of my current personal projects is a small Order System which I am building with TypeScript and Next.js."}
                        <br/><br/>
                        {"I also have experience in other languages such as Dart, C#, Java and Python. My main focuses being Dart and C#. I am currently using Dart to build my Fitness Tracker app in Flutter, and I have used C# for a few projects, one of which being a web application in .NET Razor Pages for an Order System oriented towards smaller businesses."}
                    </p>
                </div>
                <div className="skill-cards" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'flex-end', flex: 2 }}>
                    <SkillsCard image={javascriptLogo} text="JavaScript" />
                    <SkillsCard image={typescriptLogo} text="TypeScript" />
                    <SkillsCard image={dartLogo} text="Dart" />
                    <SkillsCard image={cSharpLogo} text="C#" />
                    <SkillsCard image={javaLogo} text="Java" />
                    <SkillsCard image={pythonLogo} text="Python" />
                    <SkillsCard image={htmlLogo} text="HTML" />
                    <SkillsCard image={cssLogo} text="CSS" />
                </div>
            </div>

            <hr style={{ backgroundColor: '#333333', borderTop: '2px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />

            <h2 id='personalProjects' style={{ fontSize: 30, fontWeight: 'bold', marginTop: '2rem' }}>Personal Projects</h2>
            <div className="personal-project">
                <h3 style={{ fontSize: 20, fontWeight: 'bold', marginTop: '2rem' }}>{"NetSuite AI Chatbot"}</h3>
                <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1.5, marginRight: '2rem', marginTop: '1rem' }}>
                        <p style={{ fontSize: 16, lineHeight: '1.8' }}>
                            {`An AI Chatbot which integrates seamlessly with NetSuite. Utilising NetSuite's LLM modules, and integrating with NetSuite's Query module for SuiteQL, this chatbot can answer generic questions or even specific questions about the data within the NetSuite instance.`}
                            <br/><br/>
                        </p>
                        <Link href="/about/aiChatbot" style={{ marginBottom: '1rem' }}>
                            <Button text="More Details" buttonColour="white" textColour="black" borderRadius={5} />
                        </Link>
                    </div>
                    <div className="tech-used" style={{ flex: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                        <SkillsCard image={netsuiteLogo} text="NetSuite" />
                        <SkillsCard image={netsuiteLogo} text="SuiteScript" />
                        <SkillsCard image={javascriptLogo} text="JavaScript" />
                        <SkillsCard image={htmlLogo} text="HTML" />
                    </div>
                </div>
            </div>

            <hr style={{ backgroundColor: '#333333', borderTop: '1px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />

            <div className="personal-project">
                <h3 style={{ fontSize: 20, fontWeight: 'bold', marginTop: '2rem' }}>{"NetSuite SDF - Visual Studio Code Extensions"}</h3>
                <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1.5, marginRight: '2rem', marginTop: '1rem' }}>
                        <p style={{ fontSize: 16, lineHeight: '1.8' }}>
                            {`Recently, I have created a Visual Studio Code extension which allows users to quickly create folders under the src/Objects directory of NetSuite SDF projects. This allows developers to easily group and manage their custom objects.`}
                            <br/><br/>
                        </p>
                        <Link href="/about/sdfVscodeExtension" style={{ marginBottom: '1rem' }}>
                            <Button text="More Details" buttonColour="white" textColour="black" borderRadius={5} />
                        </Link>
                    </div>
                    <div className="tech-used" style={{ flex: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                        <SkillsCard image={typescriptLogo} text="TypeScript" />
                        <SkillsCard image={vscodeLogo} text="Visual Studio Code" />
                    </div>
                </div>
            </div>

            <hr style={{ backgroundColor: '#333333', borderTop: '1px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />

            <div className="personal-project">
                <h3 style={{ fontSize: 20, fontWeight: 'bold', marginTop: '2rem' }}>{"FitDiary"}</h3>
                <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1.5, marginRight: '2rem', marginTop: '1rem' }}>
                        <p style={{ fontSize: 16, lineHeight: '1.8' }}>
                            {`FitDiary is a fitness tracker app which I will eventually release on Android & iOS. The app allows users to track their workouts, set goals, and monitor their progress over time.`}
                            <br/><br/>
                        </p>
                        <Link href="/about/fitDiary" style={{ marginBottom: '1rem' }}>
                            <Button text="More Details" buttonColour="white" textColour="black" borderRadius={5} />
                        </Link>
                    </div>
                    <div className="tech-used" style={{ flex: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                        <SkillsCard image={flutterLogo} text="Flutter" />
                        <SkillsCard image={firebaseLogo} text="Firebase" />
                        <SkillsCard image={dartLogo} text="Dart" />
                    </div>
                </div>
            </div>

            <hr style={{ backgroundColor: '#333333', borderTop: '1px solid #333333', marginTop: '2rem', marginBottom: '2rem' }} />

            <div className="personal-project">
                <h3 style={{ fontSize: 20, fontWeight: 'bold', marginTop: '2rem' }}>{"This website!"}</h3>
                <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1.5, marginRight: '2rem', marginTop: '1rem' }}>
                        <p style={{ fontSize: 16, lineHeight: '1.8' }}>
                            {`This website is built using Next.js and TypeScript! This serves as a portfolio for my projects, skills, experience and personal projects.`}
                            <br/><br/>
                        </p>
                        {/* <Link href="">
                            <Button text="More Details" buttonColour="white" textColour="black" borderRadius={5} />
                        </Link> */}
                    </div>
                    <div className="tech-used" style={{ flex: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                        <SkillsCard image={reactLogo} text="React.js" />
                        <SkillsCard image={nextLogo} text="Next.js" applyBorderRadius={false} />
                        <SkillsCard image={typescriptLogo} text="TypeScript" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
