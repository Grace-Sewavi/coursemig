import "react";
import blog_1 from '../../assets/blog-1.png';
import blog_2 from '../../assets/blog-2.png';
import blog_3 from '../../assets/blog-3.png';
import blog_4 from '../../assets/blog-4.png';
import blog_5 from '../../assets/blog-6.png'
import blog_6 from '../../assets/blog-5.png'
import blog_7 from '../../assets/blog-7.png'
import blog_8 from '../../assets/blog-8.png'
import blog_9 from '../../assets/blog-9.png'
import Sidebar from "./Sidebar";

const Blogs = () => {
  const featuredArticles = [
    {
      title: "A Data Scientist’s Guide to Understanding Election Predictions",
      description:
        "Introduction: We've made incredible advances in data science and AI since the last election, but these advances have...",
      img:blog_1,
    },
    {
      title: "Coursemigo Named a Leader in Technical Skills Development, Again",
      description:
        "In today’s fast-paced tech landscape, staying ahead of the curve is more crucial than ever. According to...",
      img: blog_2,
    },
    {
      title:
        "Are AI Models Better Than Human Traders? Here's What We Know",
      description:
        "How you can win in the stock market with AI trading strategies. There’s been a lot of buzz...",
      img: blog_3,
    },
  ];

  const articles = [
    {
      title: "C++ or Rust—Which Language is Right for You?",
      description:
        "Choosing the right programming language can feel overwhelming, especially when starting out or looking to level up...",
      img: blog_4,
    },
    {
      title: "The Self Driving Car is Alive, and Thriving",
      description:
        "Are self-driving cars on the social? The importance of the self-driving car industry...",
      img: blog_5,
    },
    {
      title: "What’s The Best Way To Learn AI?",
      description:
        "Introducing Coursemigo’s New AI Hub: As AI continues to reshape industries and drive technological breakthroughs, it’s...",
      img: blog_6,
    },
    {
      title: "Your AI Career Questions, Answered",
      description:
        "What skills do you need to learn? Discover how to get started in programming languages...",
      img: blog_7,
    },
    {
      title:
        "The Rise of AI Product Managers: The Hype Might Be Real, But What About the Role Itself?",
      description:
        "The role is reshaping industries as new demands and skills evolve...",
      img: blog_8,
    },
    {
      title:
        "Alteryx and Udacity Partner to Bring AI-Powered Analytics Upskilling to All",
      description:
        "Expanding data science education needs for growing demand for analytics...",
      img: blog_9,
    },
  ];


  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Featured Articles */}
        <div >
          <h2 className="text-lg pt-32 font-bold mb-6 font-sans text-gray-700">FEATURED ARTICLES</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 pb-32">
                  <h3 className="text-2xl font-sans text-gray-700 font-bold">{article.title}</h3>
                  <p className="text-md font-sans text-gray-600 mt-4">
                    {article.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Articles */}
        <div className="mt-12 flex">
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden mt-24"
              >
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4 pb-32">
                  <h3 className="text-2xl font-sans font-bold text-gray-700">{article.title}</h3>
                  <p className="text-md text-gray-600 mt-4 font-sans ">
                    {article.description}
                  </p>
                </div>
              </div>
            ))}            
          </div>
          <Sidebar/>
        </div>
          </div>
        </div>
  );
};

export default Blogs;