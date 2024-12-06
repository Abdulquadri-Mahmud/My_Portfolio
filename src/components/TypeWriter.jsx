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
        <h1 data-aos="fade-right" className='text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold leading-tight mb-4'>
            Hello,{' '}
        <span>
            {/* Style will be inherited from the parent element */}
            <Typewriter
            words={['I\'m  AdeyemiCODE', 'I\'m Frontend Website Developer', 'Also a MERN Stack Developer']}
            loop={'infinite'}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
            onLoopDone={handleDone}
            // onType={handleType}
            />
        </span>
        </h1>
    </div>
  )
}
