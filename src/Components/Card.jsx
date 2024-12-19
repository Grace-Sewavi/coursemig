import "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial_1 from "../assets/testimonyA.png"
import testimonial_2 from "../assets/TestimonialB.jpg"
import testimonial_3 from "../assets/TestimonialC (2).jpg"
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';



const data = [
  {
    img: testimonial_1,
    name: "Chris",
    country: "United States",
    p: "Literally I didn't expect but the facilities \n and the neighbourhood are so great, \n not mentioning the nice staffs from the reception.",
  },
  {
    img: testimonial_2,
    name: "David",
    country: "Nigeria",
    p: "I appreciate the high-quality photos and virtual tours. It makes it easier to get a feel for the properties.",
  },
  {
    img: testimonial_3,
    name: "Katleen",
    country: "United States",
    p: "Fast loading times and seamless transitions between pages make for a pleasant user experience",
  },
];
export default function Card() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay:true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay:true,
            autoplaySpeed: 3000,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            autoplay:true,
            autoplaySpeed: 3000,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 3000,
          },
        },
      ],
    };
  
    return (
      <div>
        <section className="py-8">
  
          <div className="w-full h-fit p-8 mt-12">
            <Slider {...settings}>
              {data.map((item) => (
                <div
                  key={item.name}  // using item.name or another unique identifier
                  className="">
                  <div className="rounded-full overflow-hidden h-[120px] w-[120px] ml-auto mr-auto">
                    <LazyLoadImage
                      src={item.img}
                      alt={`${item.name}'s testimonial`} // adding alt text for accessibility
                      className="w-[100%] h-[100%] object-cover"
                      effect="blur"
                    />
                  </div>
  
                    <h1 className="text-2xl font-bold text-center text-sky-400 font-sans">{item.name}</h1>

                    <p className="text-[18px] text-center pt-3 font-sans">{item.country}</p>
                    <div className="w-20 h-0.5 bg-red-400 ml-auto mr-auto mt-1 rounded-sm"></div>
                    <p className="mt-10 lg:text-lg px-3 text-md text-center font-sans">
                    &quot;A fantastic learning experience! The courses are well-
                    <br />
                    structured and easy to follow, and the family sharing
                    features
                    <br />
                    is a game changer, I&apos;ve been able to upskill at my own pace,
                    <br />
                    and its been a huge boost for both my personal and
                    <br />
                    professional growth.&quot;
                  </p>
                  <div className="w-20 h-0.5 bg-red-400 ml-auto mr-auto mt-1 rounded-sm mb-3 "></div>
                
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    );
  }
  