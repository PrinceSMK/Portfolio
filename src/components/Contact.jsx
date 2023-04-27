import React from 'react'

function Contact() {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
      

            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact</p>
                    <p className='py-6'>Submit this form to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center '>
                    <form action="https://getform.io/f/3b83180b-56fd-44ba-87af-fc80cac5f805" method="POST" className='flex flex-col w-full md:w-1/2 '>
                        <input type="text" name='name' placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type="text" name='email' placeholder='Enter Your E-mail' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name="message" placeholder='Please Enter your message'  rows="10" className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button className='group text-white w-fit px-6 py-3 my-8 flex items-center rounded-md bg-gradient-to-r from from-blue-600  to-red-600 cursor-pointer hover:scale-110 duration-300'>Wanna Chat</button>
                    </form>
                </div> 


            </div>



    </div>
  )
}

export default Contact
