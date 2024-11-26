import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';
import Apple from '@/app/public/Apple.png';
import Google from "@/app/public/google.png";
import Microsoft from '@/app/public/microsoft.png';
import Slack from '@/app/public/slack.png';
import Work from '@/app/public/Work.png';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="w-full">
      <Navbar />

      {/* Hero Section */}
      <Section
        title="Get More Done with whitespace"
        text="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks."
        bgColor="#1e3a8a"
        textColor="#ffffff"
        buttonLabel="Try Whitepace Free"
      />

      {/* Project Management Section */}
      <Section
        title="Project Management"
        text="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app."
        bgColor="#f3f4f6"
        textColor="#111827"
        buttonLabel="Get Started"
      />

      {/* Work Together Section */}
      <Section
        title="Work Together"
        text="With whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others."
        imageSrc={Work} // Dynamic image passed as prop
        reverse = {false}
        bgColor="#e5e7eb"
        textColor="#1f2937"
        buttonLabel="Try It Now"
      />

      {/* Use as Extension Section */}
      <Section
        title="Use as Extension"
        text="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
        bgColor="#1e3a8a"
        textColor="#ffffff"
        buttonLabel="Let's Go"
      />

      {/* Customize Section */}
      <Section
        title="Customize it to your needs"
        text="Customize the app with plugins, custom themes, and multiple text editors. Or create your own scripts using the Extension API."
        reverse = {false}
        bgColor="#f3f4f6"
        textColor="#111827"
        buttonLabel="Let's Go"
      />

      {/* Work Section */}
      
        <div className='w-[1920px] h-[574px] py-[140px] px-[220px]  bg-[#043873]'>
        <div className='w-[1481px] h-[294px] gap-[60px] flex flex-col items-center '>
        <h1 className='w-[1064px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-white'>Your work, everywhere you are </h1>
        <p className='w-[1064px] h-[60px] font-normal text-lg leading-[30px] tracking-[-2%] text-center text-white'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
      <button className=' text-white w-[200px] h-[63px] rounded-lg py-5 px-10 flex gap-[10px] bg-[#4F9CF9]'>Try Taskey< FaArrowRight /></button>
       </div>
       </div>

      {/* Sponsors Section */}
      <div className="w-full px-[140px] py-[100px] bg-white text-center">
        <h1 className="text-[72px] font-bold leading-[87.14px] mb-[60px]">
          Our Sponsors
        </h1>
        <div className="flex justify-around items-center gap-8">
          <Image src={Apple} alt="Apple" width={55} height={68} />
          <Image src={Microsoft} alt="Microsoft" width={287} height={68} />
          <Image src={Slack} alt="Slack" width={280} height={71} />
          <Image src={Google} alt="Google" width={211} height={69} />
        </div>
      </div>

      <Footer />
    </div>
  );
}