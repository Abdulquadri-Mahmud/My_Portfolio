import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS

export default function TypeWriter() {
    const handleType = () => {
    // access word count number
        console.log()
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    useEffect(() => {
        AOS.init({ duration: 1200 }); // Initialize AOS with animation duration
    }, []); 

    return (
    <div className='App'>
        <h1 data-aos="fade-right" className='text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold leading-tight mb-4'>
            {/* Hello,{' '} */}
        <span>
            {/* Style will be inherited from the parent element */}
            <Typewriter
            words={['Full-Stack Website Developer', 'Mern-Stack Developer']}
            loop={'infinite'}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2500}
            onLoopDone={handleDone}
            // onType={handleType}
            />
        </span>
        </h1>
    </div>
  )
}
