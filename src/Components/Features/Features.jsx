import 'react'
import feature1_img from '../../assets/feat-1.png'
import feature2_img from '../../assets/feat-2.png'
import feature3_img from '../../assets/feat-3.png'
import Card from '../Card'


const Features = () => {
  return (
    <div>
          <h1 className="text-5xl font-bold text-center pt-44 leading-tight">Discover the   <span className=" bg-sky-200">Fea</span>tures</h1>
      <p className="info mt-3 font-sans text-center">
      Explore the key features that makes Coursemigo the ultimate <br/>destination for unlimited learning opportunities.
      </p>

      <div className='mt-16'>
        <div className='flex gap-8 px-8 justify-center flex-wrap'>

          <div className='w-96 h-auto bg-sky-100 py-20 rounded-3xl'>
          <img className='w-14 h-14 ml-auto mr-auto' src={feature1_img} alt="image" />
            <h3 className='text-center font-sans font-bold text-xl mt-5'>Diverse Courses</h3>
            <p className='text-center font-sans mt-3 text-md'>Unlock a world of knowledge with <br/> unlimited access to a wide range <br/> of courses on various subjects.</p>
          </div>

          <div className='w-96 h-auto bg-sky-100 py-20 rounded-3xl'>
          <img className='w-14 h-14 ml-auto mr-auto' src={feature2_img} alt="image" />
            <h3 className='text-center font-sans font-bold text-xl mt-5'>Family Sharing</h3>
            <p className='text-center font-sans mt-3'>Share the joy of learning with<br/> your loved ones by accessing <br/>educational resources together.</p>
          </div>

          <div className='w-96 h-auto bg-sky-100 py-20 rounded-3xl'>
          <img className='w-14 h-14 ml-auto mr-auto' src={feature3_img} alt="image" />
            <h3 className='text-center font-sans font-bold text-xl mt-5'>Affordable Learning</h3>
            <p className='text-center font-sans mt-3'>Experience High-quality education<br/> without breaking the bank with our <br/> Subscription-based model.</p>
          </div>
        </div>
      </div>


      <div className="my-8 pt-20">
          <h1 className="text-5xl font-bold leading-tight text-center">
            From the Coursemigo <br />
            <span className=" bg-sky-200">Comm</span>unity
          </h1>
          <p className="mt-3 font-sans text-center">
            30+ million people have already joined Coursemigo
          </p>

          <Card/>
        </div>
    </div>
  )
}

export default Features