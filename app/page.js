import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section>
        <div>
          <div className='top-0 left-0 h-[60vh] w-screen bg-cover' style={{ backgroundImage: 'linear-gradient(rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5)), url("/imgs.webp")' }}>
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
      <div className='flex h-screen w-screen'>
        {/* red statre */}
        <div className=' ml-[100px] flex gap-3 justify-around w-[60vw] bg-red-500'>
          <div className=' flex flex-col flex-wrap content-start'>
            <div className=' ml-[10px] mr-[50px] flex gap-24 justify-around p-1 h-[30px] w-full bg-green-500'>
          <div className='cursor-pointer'>
                <span className='text-white  uppercase font-bold '>About</span>
          </div>
          <div className='cursor-pointer'>
                <span className='text-white  uppercase font-bold'>Instructor</span>
          </div>
          <div className='cursor-pointer'>
            <span className='text-white uppercase font-bold'>Reviews</span>
          </div>
          </div>
            <div className=' ml-[-1px] w-32 h-1 border-b-4 border-purple-700' ></div>
          </div>
          
        </div>
        
        {/* red ends */}
        <div className='relative top-[-40px] left-0 ml-[40px] mr-[100px] h-[50vh] w-[35vw] bg-blue-500'>
        <div></div>
        <div></div>
       </div>
      </div>
     
    </main>
  )
}
