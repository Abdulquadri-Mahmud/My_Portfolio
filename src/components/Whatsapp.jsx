import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Whatsapp() {
  return (
    <div className='w-18 z-20 h-18 fixed bottom-4 right-4 flex justify-center items-center animate-spin rounded-full bg-green-500'>
        <Link to={'https://wa.me/+2349034831368'}>
            <FaWhatsapp className='text-white text-5xl'/>
        </Link>
    </div>
  )
}
