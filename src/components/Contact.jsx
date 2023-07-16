import React from 'react'

function Contact() {
  return (
    <div name="contact" className='pt-[315%] md:pt-[103%] xl:pt-[60%] lg:pt-[75%] pb-96 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
      

            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl  inline border-b-4 border-gray-400 text-transparent bg-clip-text bg-gradient-to-r font-extrabold from-cyan-600 to-violet-500 ml-[18%] md:ml-[40%] lg:ml-0'>Contact</p>
                    <p className='py-6 ml-[0%] md:ml-[28%] lg:ml-0'>Submit this form to get in touch <span className='ml-24 md:ml-0'>with me</span> </p>
                </div>

                <div className='flex justify-center items-center '>
                    <form action="https://getform.io/f/3b83180b-56fd-44ba-87af-fc80cac5f805" method="POST" className='flex flex-col w-full md:w-1/2 '>
                        <input type="text" name='name' placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type="text" name='email' placeholder='Enter Your E-mail' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name="message" placeholder='Please Enter your message'  rows="10" className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button className='group text-white w-fit px-6 py-3 my-8 flex items-center rounded-md bg-gradient-to-r from from-blue-600  to-red-600 cursor-pointer ml-[20%] md:ml-[24%] lg:ml-0 hover:scale-110 duration-300'>Wanna Chat</button>
                    </form>
                </div> 


            </div>



    </div>
  )
}

export default Contact
