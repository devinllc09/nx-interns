import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <div className='top-0 left-0 h-[50vh] w-screen bg-cover' style={{ backgroundImage: 'linear-gradient(rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5)), url("/imgs.webp")' }}>
            <div className='flex flex-col items-start justify-end h-full w-50% text-wrap'>
              <h3 className='text-white ml-[100px]'>NITYANAND CHARAN DAS</h3>
              <h1 className='text-white ml-[100px] mb-6 text-3xl text-wrap font-bold'>
                Learn key life lessons from the <br />
                Gita: Mind control and conflict <br />
                resolution
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className='flex h-full w-screen'>
        {/* red statre */}
        <div className='relative ml-[100px] flex gap-3 justify-around w-[65%]'>
          <div className=' flex flex-col flex-wrap content-start'>
            <div className=' ml-[10px] mr-[50px] flex gap-24 justify-around p-1 h-[30px] w-full'>
              <div className='cursor-pointer'>
                <span className='text-gray-600  uppercase font-bold '>About</span>
              </div>
              <div className='cursor-pointer'>
                <span className='text-gray-600  uppercase font-bold'>Instructor</span>
              </div>
              <div className='cursor-pointer'>
                <span className='text-gray-600 uppercase font-bold'>Reviews</span>
              </div>
            </div>
            <div className=' ml-[-1px] w-32 h-[1px] border-b-[3px] border-purple-700' ></div>
            {/* h1 aboy cos */}
            <div>
              <h1 className='mt-4 text-3xl font-bold ' >About The Course</h1>
              <p className='w-[40vw] mt-2 text-gray-600'>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, val illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
              <p className='w-[40vw] mt-2 text-gray-600'>
                Sed ut perspiciatis unde omnis iste natus error sit valuptatern accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab llo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className='w-[40vw] mt-2 text-gray-600'>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet utet voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
              </p>
              <h1 className='mt-4 text-2xl font-bold ' > What to expect from the Course</h1>
              <p className='w-[40vw] mt-2 text-gray-600'>
                &#10004; Learn to mange your relationships <br></br>
                &#10004; Better communication <br></br>
                &#10004; Time management <br></br>
                &#10004; Forgiveness
              </p>
              <h1 className='mt-4 text-2xl font-bold ' > Key topics covered</h1>
              <p className='w-[40vw] mt-2 text-gray-600'>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis valuptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
              </p>
              <p className='w-[40vw] mt-2 text-gray-600'>
                &#10004;
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis valuptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
              </p>
              <div className='flex  w-[40vw]'>
                <div className='pr-6 pt-1'>
                  <p className='pb-12 text-gray-600'>&#10004; <br></br></p>
                  <p className='pb-12 text-gray-600'>&#10004; <br></br></p>
                  <p className='pb-12 text-gray-600'>&#10004; <br></br></p>
                  <p className='pb-12 text-gray-600'>&#10004; <br></br></p>
                </div>
                <div className='pt-1'>
                  <p className=' text-wrap text-gray-600' ><span className='font-bold text-black'>10 written and audio sessions</span>  guide you in decoding the language of numbers so that you can easily receive their signs and messages.</p>
                  <p className='text-wrap text-gray-600'><span className='font-bold text-black'>Intuitive exercises and homework</span>  walk you through the energies and values of numbers and number sequences so you can become your awn authority.</p>
                  <p className='text-wrap text-gray-600'><span className='font-bold text-black'>A handy reference</span>  to numerical meanings so you can uncover your soul's gifts, challenges, lessons, and purpose- and receive spiritual guidance along your path.</p>
                  <p className='text-wrap text-gray-600'><span className='font-bold text-black'>Expert techniques</span>  for manifestation offer simple ways to use numtbers to co-create with the universe.</p>

                </div>

              </div>
            </div>
          </div>

        </div>
        {/* red ends */}

        <div className='flex flex-col relative top-[-40px] left-0 ml-[40px] mr-[100px] h-[45vh] w-[30%] bg-gray-200'>
          <div>
            <h2 className='ml-5 mt-4 text-xl font-medium'>Course fees</h2>
            <h1 className='ml-5 mb-4 text-3xl font-bold font-'>&#8377;5,000</h1>
            <h2 className=' ml-5 mb-2 font-medium text-xl'>What's included:</h2>
            <p className='ml-5 text-[14px]'>&#128172; 5 on-demand video</p>
            <p className='ml-5 text-[14px]'> &#128172; 2 livestream sessions</p>
            <p className='ml-5 text-[14px] capitalize'>&#128172; Live Q&A sessions with Nityanand Charan Das </p>
            <p className='ml-5 text-[14px]'>&#128172; An active whatsapp community</p>
            {/* <button className='m-8 p-3   bg-purple-700' >Register Today</button> */}
            <button className='mt-7 mb-2 ml-6 mr-6 p-3 bg-purple-800 rounded-full w-80 text-white'>Register Today</button>


          </div>

        </div>
      </div>

    </main>
  )
}
