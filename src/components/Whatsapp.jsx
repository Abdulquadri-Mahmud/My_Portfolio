import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Whatsapp() {
  return (
    <div className='w-18
     h-18 fixed bottom-10 right-3 flex justify-center items-center animate-spin rounded-full bg-gradient-to-r from-purple-600 to-red-600'>
        <Link to={'https://wa.me/+2347047594667'}>
            <FaWhatsapp className='text-white text-5xl'/>
        </Link>
    </div>
  )
}
