import Image from 'next/image'

import Newsletter from '../../components/Newsletter'
import chef from '../../public/chef_contact.png'


export default function Contact (){
  return (
    <div className='fcontainer'>
      <div className='border-2 border-b-emerald-500'>
        <h1 className='text-center'>Contact Us</h1>
        <p className='text-center opacity-70'>Want to collaborate, ask or just say hi? Feel free to email us below.</p>
        <div className='flex h-full items-center border-2 border-red-400'>
          <div className='w-1/4 h-max flex justify-center bg-gradient-to-t from-sky-100 rounded-[30px]'>
            <Image src={chef} />
          </div>
          <div className='w-3/4 p-20 border-2 border-pink-500'>
            <form action="/" method="post" className='space-y-4'>
              <div className='w-full flex space-x-6'>
                <div className='flex flex-col w-1/2'>
                  <label for="first" classNamopactiy-50 e='capitalize'>Name</label>
                  <input type="text" id="name" name="name" placeholder='Enter your name...' className='p-3 border-2 border-gray-200 rounded-[16px]' />
                </div>
                <div className='flex flex-col w-1/2'>
                  <label for="last" classNameopactiy-50 ='capitalize'>Email</label>
                  <input type="text" id="email" name="email" placeholder='Enter your email...' className='p-3 border-2 border-gray-200 rounded-[16px]' />
                </div>
              </div>
              <div className='flex flex-col w-full'>
                <label for="last" className='opactiy-50 capitalize'>Subject</label>
                <input type="subject" id="email" name="subject" placeholder='Enter your subject...' className='p-3 border-2 border-gray-200 rounded-[16px]' />
              </div>
              <div className='flex flex-col w-full'>
                <label for="last" className='capitalize'>Message</label>
                <textarea id="message" name="message" placeholder='Enter your message...' className='px-2 py-2 h-60 border-2 border-gray-200 rounded-[16px]' />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
        <Newsletter />
      </div>
    </div>
  )
}