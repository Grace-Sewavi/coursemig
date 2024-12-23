import  { useState } from "react";



const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);


  return (
    <div className="">
    <div className="bg-gradient-to-b from-sky-400 to-white-200 min-h-screen flex flex-col items-center p-6 mt-20">
      <h1 className="text-4xl font-bold text-white pt-10 text-center">Plan and Pricing</h1>
      <p className="text-white font-sans mt-2 text-lg text-center">Check below our monthly and annual plans and choose the best for you</p>
      <div className="flex items-center space-x-4 mt-6">
        <span className="text-white font-sans text-lg">Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={() => setIsAnnual(!isAnnual)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600"></div>
          <span className="w-4 h-4 absolute left-[4px] top-[1px] bg-white border border-gray-300 rounded-full transition-transform peer-checked:translate-x-full"></span>
        </label>
        <span className="text-white font-sans text-lg">Annual</span>
      </div>
      

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 p-6 md:p-12 ">
      {/* Starter Card */}
      <div className="flex flex-col items-center w-80 rounded-lg shadow-xl border p-6 bg-white ">
        <div className="w-80 h-1.5 bg-orange-500 -mt-6 rounded-t-2xl"></div>
        <h3 className="text-gray-700 text-xl font-bold mt-9 font-sans">Starter</h3>
        <p className="text-gray-600 text-md mb-8 font-sans">What you need to start</p>
        <h2 className="text-5xl font-sans text-sky-700">Free</h2>
        <p className="text-gray-500 text-md mb-10 font-sans">start now</p>
        <p className="w-16 h-[3px] bg-gray-300 rounded-xl mb-6 "></p>
        <ul className="text-gray-600 text-[15px] space-y-2 mb-32 text-center">
          <li className="font-sans text-md">Unlimited students</li>
          <li className="font-sans text-md">Unlimited courses</li>
          <li className="font-sans text-md">Customization of visual identity</li>
          <li className="font-sans text-md">Platform for mobile, tablet, and desktop</li>
          <li className="font-sans text-md">Platform optimized for SEO</li>
          <li className="font-sans text-md">Unlimited disk space</li>
        </ul>
        <button className="px-4 py-2 bg-sky-400 text-white font-sans rounded-sm hover:bg-blue-600 transition">
          Choose this plan
        </button>
      </div>

      {/* Pro Card */}
      <div className="flex flex-col items-center w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-6">
      <div className="w-80 h-1.5 bg-teal-500 -mt-6 rounded-t-2xl"></div>
        <h3 className="text-gray-700 text-2xl mt-10 font-sans font-bold">Pro</h3>
        <p className="text-gray-600 text-md mb-10 font-sans">Become a Professional</p>
        <h2 className="text-7xl text-blue-600 font-sans">21</h2>
        <p className="text-gray-500 text-md font-sans">per month (billed yearly)</p>
        <p className="text-gray-500 text-md mb-10 font-bold font-sans">20% Off!</p>
        <p className="w-16 h-[3px] bg-gray-300 rounded-xl mb-6 "></p>
        <ul className="text-gray-600 text-[15px] space-y-2 mb-28 text-center">
          <li className="font-sans text-md">Unlimited students</li>
          <li className="font-sans text-md">Unlimited courses</li>
          <li className="font-sans text-md">Customization of visual identity</li>
          <li className="font-sans text-md">Platform for mobile, tablet, and desktop</li>
          <li className="font-sans text-md">Platform optimized for SEO</li>
          <li className="font-sans text-md">Unlimited disk space</li>
        </ul>
        <button className="px-4 py-2 bg-sky-400 text-white font-sans rounded-sm hover:bg-blue-600 transition">
          Choose this plan
        </button>
      </div>

      {/* Business Card */}
      <div className="flex flex-col items-center w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-6">
      <div className="w-80 h-1.5 bg-blue-900 -mt-6 rounded-t-2xl"></div>
        <h3 className="text-gray-700 text-xl font-bold mt-8 font-sans">Business</h3>
        <p className="text-gray-600 text-md mb-5 font-sans">Have the best experience</p>
        <h2 className="text-7xl text-blue-600 font-sans">40</h2>
        <p className="text-gray-500 text-md font-sans">per month (billed yearly)</p>
        <p className="text-gray-500 text-md mb-7 font-bold font-sans">20% Off!</p>
        <p className="w-16 h-[3px] bg-gray-300 rounded-xl mb-6 "></p>
        <ul className="text-gray-600 text-[15px] space-y-2 mb-32 text-center">
          <li className="font-sans text-md">Unlimited students</li>
          <li className="font-sans text-md">Unlimited courses</li>
          <li className="font-sans text-md">Customization of visual identity</li>
          <li className="font-sans text-md">Platform for mobile, tablet, and desktop</li>
          <li className="font-sans text-md">Platform optimized for SEO</li>
          <li className="font-sans text-md">Unlimited disk space</li>
        </ul>
        <button className="px-4 py-2 bg-sky-400 text-white font-sans rounded-sm hover:bg-blue-600 transition">
          Choose this plan
        </button>
      </div>
    </div>
  </div> 
  <h1 className="text-4xl font-bold text-center my-12">Compare our <span className=" bg-sky-200"> Pla</span>ns
      </h1>
  <div className=" w-full flex items-center justify-center p-4">
      <div className="w-full  rounded-lg overflow-hidden ">
        <div className="overflow-x-auto ">
          <table className="min-w-full table-auto">
           
            <thead className="font-sans">
              <tr>
                <th className="p-4 text-left font-bold font-sans">Features</th>
                <th className="p-4 text-center font-bold font-sans">Starter</th>
                <th className="p-4 text-center font-sans bg-gray-50 ">Pro</th>
                <th className="p-4 text-center font-bold font-sans">Business</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="bg-gray-50">
                <td className="p-2 font-sans text-sm lg:text-md">Student tracking dashboard</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2  text-center text-xl  text-blue-600">●</td>
                <td className="p-2  text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 font-sans text-sm lg:text-md">Unlimited courses</td>
                <td className="p-2  text-center text-xl text-blue-600 ">●</td>
                <td className="p-2  text-center text-xl text-blue-600 bg-gray-50 ">●</td>
                <td className="p-2  text-center text-xl text-blue-600 ">●</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 font-sans text-sm lg:text-md">Creation of free and paid courses</td>
                <td className="p-2  text-center text-xl text-blue-600 ">●</td>
                <td className="p-2  text-center text-xl text-blue-600 bg-gray-50 ">●</td>
                <td className="p-2  text-center text-xl text-blue-600 ">●</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 font-sans text-sm lg:text-md">Customization of visual identity</td>
                <td className="p-2  text-center text-xl text-blue-600">●</td>
                <td className="p-2  text-center text-xl text-blue-600 bg-gray-50">●</td>
                <td className="p-2  text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 font-sans text-sm lg:text-md">Link with social networks</td>
                <td className="p-2  text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600 bg-gray-50">●</td>
                <td className="p-2  text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 font-sans text-sm lg:text-md">Creation of institutional pages</td>
                <td className="p-2  text-center text-xl text-blue-600">●</td>
                <td className="p-2  text-center text-xl text-blue-600 bg-gray-50">●</td>
                <td className="p-2  text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 font-sans text-sm lg:text-md">Creation of testimonials for courses</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2  text-center text-xl text-blue-600">●</td>
                <td className="p-2  text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 font-sans text-sm lg:text-md">Student area</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2  text-center text-xl text-blue-600 bg-gray-50">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 font-sans text-sm lg:text-md">Tracking statistics</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2  text-center text-xl text-blue-600">●</td>
                <td className="p-2  text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 font-sans text-sm lg:text-md">Sales tracking dashboard</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2  text-center text-xl text-blue-600 bg-gray-50">●</td>
                <td className="p-2  text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 font-sans text-sm lg:text-md">Enrollment tracking dashboard</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 font-sans text-sm lg:text-md">Student tracking dashboard</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2  text-center text-xl text-blue-600 bg-gray-50">●</td>
                <td className="p-2  text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 font-sans text-sm lg:text-md">Integration with Dropbox, YouTube and Vimeo</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 font-sans text-sm lg:text-md">Integration with Paypal and Stripe</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600 bg-gray-50">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 font-sans text-sm lg:text-md">Sale in Dollar, Euro and Real</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 font-sans text-sm lg:text-md">Creation of Courses with Promotional Price</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600 bg-gray-50">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 font-sans text-sm lg:text-md">Creation of Courses with Payment in Installment</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 font-sans text-sm lg:text-md">Lectures in Video, Audio, text and Image</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600 bg-gray-50">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 font-sans text-sm lg:text-md">Hosting and Courses backup</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 font-sans text-sm lg:text-md">Forums</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600 bg-gray-50">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 font-sans text-sm lg:text-md">Platform available in English and Portugese</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 font-sans"></td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600 bg-gray-50">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 font-sans text-sm lg:text-md">Students ad enrollments management</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 font-sans text-sm lg:text-md">Ulimited click space</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600 bg-gray-50">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 font-sans text-sm lg:text-md">File upload up to 300 MB</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 font-sans text-sm lg:text-md">Domain customizationn</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600 bg-gray-50">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 font-sans text-sm lg:text-md">File upload up to 1 GB</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-white">
                <td className="p-2 font-sans text-sm lg:text-md">File upload up to 5 GB</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600 bg-gray-50">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 font-sans"></td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
                <td className="p-2 text-center text-xl text-blue-600">●</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lg:flex justify-end p-4 gap-8 lg:pr-14 text-sm hidden">
          <button className="px-3 py-2 bg-sky-500 text-white font-sans rounded-sm">
            Choose this plan
          </button>
          <button className="px-3 py-2 bg-sky-500 text-white font-sans rounded-sm">
            Choose this plan
          </button>
          <button className="px-3 py-2 bg-sky-500 text-white font-sans rounded-sm">
            Choose this plan
          </button>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Pricing;