"use client";

import Image from "next/image";
import Navbar from "./components/navbar";
import { useState, useEffect, useCallback, useRef } from "react";
import Footer from "./components/footer";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import axios from "axios";
import Stars from "./components/svgs/stars";
;

import {useSession, signIn, signOut} from "next-auth/react"
import { toast } from "react-toastify";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [articleImage, setArticleImage] = useState("");
  const [articleName, setArticleName] = useState("News In Article");
  const [articleLink, setArticleLink] = useState("/");
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);


  const {data: session} = useSession()





async function handlePurchase(productId: string) {
  const key = "vpBqd9i4AwGFvUDnzQdaHA9aVm8NwuUtFLJzPDI-odw"

  console.log("Session", session)
  if(!session || session === null){
   signIn("google")
    window.alert("Please sign in to purchase")
  }else{
    

  
  try {
    // Get the specific product details
    const response = await axios.get(`https://api.whop.com/api/v2/products/${productId}`, {
      headers: {
        'Authorization': `Bearer ${key}`,
        'Accept': 'application/json'
      }
    });
    
    console.log('Product Response:', response.data);
    console.log('Experiences:', response.data.experiences);
    
    // Try to find a valid checkout URL
    const experience = response.data.experiences[0];
    console.log('First Experience:', experience);
    
    if (experience) {
      // Check different possible properties for the checkout URL
      const checkoutUrl = `https://whop.com/yungceo/?pass=${productId}`;
      window.open(checkoutUrl, '_blank');
      
      // if (checkoutLink) {
      //   window.location.href = checkoutLink;
      // } else {
      //   console.error('No checkout link found in experience:', experience);
      // }
    } else {
      console.error('No experiences found for product');
    }
    
  } catch (error) {
    console.error('Error fetching product details:', error.response ? error.response.data : error.message);
    }
  }
}


  


  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(() => {
    // Set loading to true before fetching data
    setLoading(true);
    // Fetch saved article data on component mount
    fetch("/api/article")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data", data);
        setArticleImage(data.image.url);
        setArticleName(data.image.alt);
        setArticleLink(data.image.link);
      })
      .catch((error) => {
        console.error("Error fetching article data:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log("Loading princple", loading);
  }, [loading]);
  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === "string") {
          setArticleImage(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleSave = useCallback(() => {
    if (!isAdmin) {
      console.log("Logging Admin", isAdmin);
      console.log(articleImage, articleName, articleLink);
      return;
    }

    // Save article data to the server
    fetch("/api/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: articleImage,
        name: articleName,
        link: articleLink,
      }),
    }).then(() => setShowPopup(false));
  }, [articleImage, articleName, articleLink]);

  const services = [
    {
      src: "/images/mining_machines.png",
      name: "Digital Product Expert",
      description: `I have been selling digital products for the past 4 years and have built a solid foundation of multiple passive income sources that allow me to travel full time and still allowing me to have time to enjoy life.`,
      image: "/images/Flipping_Coin.jpg",
    },
    {
      src: "/images/mining_machines.png",

      name: "Mentor",
      description:
        "I have been teaching people for free for years on multiple large discord servers. Currently I offer assistance to over 10,000 members in our discord where I answer questions and provide resources to help you succeed.",
      image: "/images/Mentor.jpg",
    },
    {
      src: "/images/mining_machines.png",
      name: "Graphic Designer & Web Developer",
      description:
        "I have been doing Graphic Design since I was 11 years old and have been making money doing graphic design and web design since then as well. I actually designed this site and coded the visuals myself.I also currently have a design agency called KinglyKreations",
      image: "/images/Digital_Product_Expert.jpg",
    },
    {
      src: "/images/mining_machines.png",
      name: "Digital Nomad",
      description:
        "I have been Traveling outside of the US for the past 2 years from selling digital products and leveraging my other online skills. I also offer Travel advice in the Discord.",
      image: "/images/Young_black_hustle.jpg",
    },
  ];
  const testimonial = [
    {
      image: "/images/Flipping_Coin.jpg",
      alt: "Flipping Coin",
      text: "I've been a member for 2 months now and it is definitely worth it! In this discord all the information is there that you need to succeed, you just need to put in the work! If you listen step by step to the information/ directions there are multiple blueprints to make money laid out at your fingertips. Also there is active community, access to messages, and video calls. I recommend it.",
      location: "YungCEO Society Member",
      name: "dg543_",
    },
    {
      image: "/images/Flipping_Coin.jpg",
      alt: "Another Testimonial",
      text: "“Absolutely amazing server! Tons of support when it comes to learning marketable online income earning skills! Don’t get left behind!",
      location: "YungCEO Society Member",
      name: "pentadank",
    },
    {
      image: "/images/Flipping_Coin.jpg",
      alt: "Another Testimonial",
      text: "I'm very critical when it comes to reviewing things. YungCEO delivers on not only just the information you're seeking but also a dope community where everyone is open to any topic, building, learning and earning with each other. If you're looking for that change into digital products, YungCEO is Dank Approved 💪🏾",
      name: "ranchslanger",
      location: "YungCEO Society Member",
    },
    // Add more testimonials as needed
  ];

  const marqueeRef = useRef<HTMLDivElement>(null);

  const setupMarquee = useCallback(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const content = marquee.firstElementChild as HTMLElement;
    if (!content) return;

    // Clone the content
    const clone = content.cloneNode(true) as HTMLElement;
    marquee.appendChild(clone);

    // Calculate the animation duration based on content width
    const contentWidth = content.offsetWidth;
    const duration = contentWidth / 50; // Adjust 50 to change speed

    // Apply the animation
    marquee.style.setProperty("--marquee-duration", `${duration}s`);

    // No need for cleanup as we're using CSS animation
  }, []);

  useEffect(() => {
    setupMarquee();
  }, [setupMarquee]);

  return (
    <div className=" customBG  ">
      <main className="px-[4rem] bg-[url('https://volta.net/home/hero.png')] bg-contain bg-top bg-no-repeat">
        <Navbar
          scrollToSection={scrollToSection}
        />

        <section className="header py-[2rem] text-white flex flex-col pt-40 ">
          <div className="flex flex-col md:w-[70%] m-auto text-center items-center justify-center w-full gap-[10px]">
            <h1 className="mb-4 text-[30px] font-extrabold leading-tight text-dark sm:text-[60px] text-white">
               Convert Your Own AI
              <span className="bg-gradient-to-l from-[#007AFF] via-[#007AFF] to-transparent bg-clip-text text-transparent">
              Quick And Easy
              </span>
            </h1>

            <div className="max-w-[700px] mx-auto text-white text-center items-center justify-center">
              <p className="text-[rgb(161,161,170)]">
                This is a platform where you can create your own AI, with its own voice, own personality, and own preferences, and own objectives.
              </p>
            </div>

            <div className="flex flex-row gap-[15px] items-center  mt-[20px]">
              <button
                // onClick={() => scrollToSection("pricingSection")}
                className="  w-[180px] flex items-center justify-center  md:flex text-white px-4 py-2 rounded-md 
             bg-[rgba(39,60,110,0.1)] hover:bg-[rgba(39,60,110,0.39)] border-[0.5px] border-[rgb(39,60,110)]  "
              >
                Get Premium
              </button>
              <Link
                href="https://discord.gg/YErgCF5ZQE"
                target="_blank"
                className={` max-w-[200px] rounded-md h-[40px] w-[180px] flex items-center justify-center hover:bg-white/85  bg-white text-black  `}
              >
                Join Waitlist
              </Link>
            </div>
          </div>

          <div
          onClick={() => handlePurchase('prod_qBClHu8uCriXn')} // BreadWinner AI Plan product ID
          className=" justify-center m-auto flex items-center p-2 my-[35px] mt-[50px] px-6 gap-2 text-sm font-medium border border-[hsl(217.2,32.6%,17.5%)] rounded-3xl shadow-md w-fit">
            <span className="inline-flex gap-[10px] items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 18V20H17V22H7V20H11V18H3C2.44772 18 2 17.5523 2 17V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V17C22 17.5523 21.5523 18 21 18H13ZM4 5V16H20V5H4ZM10 7.5L15 10.5L10 13.5V7.5Z"></path>
              </svg>
             Create Your Own AI
            </span>
          </div>

          <div className="video items-center justify-center md:self-center self-center">
            <div className="border-gradient p-[2px]">
            <img src = "/images/AI_Bot_Image.png" />
            </div>
          </div>
        </section>

        {/* <section className="included my-[100px]">
          <div className="w-full flex flex-col gap-[50px] items-center justify-center text-white text-center">
            <div className="flex items-center justify-center flex-col gap-[10px] max-w-[550px]">
              <h2
                className="text-[40px]
              font-bold bg-gradient-to-r from-[#52525b] via-[#a1a1aa] to-[#52525b] bg-clip-text text-transparent
              "
              >
                Whats Included
              </h2>

              <p>
                These are some of the things offered in The YungCEO Society that
                will help you create passive income foundations online
              </p>
            </div>

            <div className="mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:py-16 lg:pb-32 relative max-w-7xl">
              <div className="grid sm:grid-cols-4 gap-y-8 gap-x-8">
                <div className="relative group">
                  <div
                    className="absolute h-px hidden sm:block group-last:hidden top-[20px] left-[calc(50%+20px)] w-[calc(100%-40px)]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #18181b, #3F3F46, #18181b)",
                    }}
                  ></div>
                  <div
                    className="relative rounded-lg flex items-center justify-center mb-4 w-10 h-10 border border-gray-300 flex-shrink-0 icon mx-auto font-semibold text-white"
                    style={{
                      background:
                        "linear-gradient(136.82deg, hsla(0, 0%, 100%, .08) 9.54%, hsla(0, 0%, 100%, 0) 101.31%)",
                    }}
                  >
                    1
                  </div>
                  <p className="mt-2 text-gray-600 text-center max-w-[12rem] mx-auto prose prose-primary dark:prose-invert prose-sm">
                    Gain access to{" "}
                    <strong className="text-white">video and pdf walkthrough lessons</strong> that walk
                    you through the process step by step to make passive
                    <strong>income online.</strong>
                  </p>
                </div>

                <div className="relative group">
                  <div
                    className="absolute h-px hidden sm:block group-last:hidden top-[20px] left-[calc(50%+20px)] w-[calc(100%-40px)]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #18181b, #3F3F46, #18181b)",
                    }}
                  ></div>
                  <div
                    className="relative rounded-lg flex items-center justify-center mb-4 w-10 h-10 border border-gray-300 flex-shrink-0 icon mx-auto font-semibold text-white"
                    style={{
                      background:
                        "linear-gradient(136.82deg, hsla(0, 0%, 100%, .08) 9.54%, hsla(0, 0%, 100%, 0) 101.31%)",
                    }}
                  >
                    2
                  </div>
                  <p className="mt-2 text-gray-600 text-center max-w-[12rem] mx-auto prose prose-primary dark:prose-invert prose-sm">
                    Instantly Gain Access To A Consistently Updated Repository
                    Of Money Making Methods You Can Start Now With
                    <strong className="text-white">
                      {" "}
                      Little To No Capital.
                    </strong>
                  </p>
                </div>

                <div className="relative group">
                  <div
                    className="absolute h-px hidden sm:block group-last:hidden top-[20px] left-[calc(50%+20px)] w-[calc(100%-40px)]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #18181b, #3F3F46, #18181b)",
                    }}
                  ></div>
                  <div
                    className="relative rounded-lg flex items-center justify-center mb-4 w-10 h-10 border border-gray-300 flex-shrink-0 icon mx-auto font-semibold text-white"
                    style={{
                      background:
                        "linear-gradient(136.82deg, hsla(0, 0%, 100%, .08) 9.54%, hsla(0, 0%, 100%, 0) 101.31%)",
                    }}
                  >
                    3
                  </div>
                  <p className="mt-2 text-gray-600 text-center max-w-[12rem] mx-auto prose prose-primary dark:prose-invert prose-sm">
                    Gain Access Or Discounts To 
                    <strong className="text-white">
                      {" "}
                      Exclusive Custom Coded Software
                    </strong>
                    That Makes Earning Money Online 10x Easier!
                  </p>
                </div>

                <div className="relative group">
                  <div
                    className="absolute h-px hidden sm:block group-last:hidden top-[20px] left-[calc(50%+20px)] w-[calc(100%-40px)]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #18181b, #3F3F46, #18181b)",
                    }}
                  ></div>
                  <div
                    className="relative rounded-lg flex items-center justify-center mb-4 w-10 h-10 border border-gray-300 flex-shrink-0 icon mx-auto font-semibold text-white"
                    style={{
                      background:
                        "linear-gradient(136.82deg, hsla(0, 0%, 100%, .08) 9.54%, hsla(0, 0%, 100%, 0) 101.31%)",
                    }}
                  >
                    4
                  </div>
                  <p className="mt-2 text-gray-600 text-center max-w-[12rem] mx-auto prose prose-primary dark:prose-invert prose-sm">
                    <strong className="text-white">
                      {" "}
                      You Are Who You Associate With
                    </strong>{" "}
                    And We Are Here To Elevate And Support Each Other. Your
                    Network Is Your Net worth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      <Footer />

     
      </main>




      {/* <Header onClick={() => scrollToSection("pricingSection")} /> */}

    </div>
  );
}

// ... existing imports and code ...

// ... existing imports and code ...

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      image: "/images/Flipping_Coin.jpg",
      alt: "Flipping Coin",
      text: "I've been a member for 2 months now and it is definitely worth it! In this discord all the information is there that you need to succeed, you just need to put in the work! If you listen step by step to the information/ directions there are multiple blueprints to make money laid out at your fingertips. Also there is active community, access to messages, and video calls. I recommend it.",
      location: "YungCEO Society Member",
      name: "dg543_",
    },
    {
      image: "/images/Flipping_Coin.jpg",
      alt: "Another Testimonial",
      text: "“Absolutely amazing server! Tons of support when it comes to learning marketable online income earning skills! Don’t get left behind!",
      location: "YungCEO Society Member",
      name: "pentadank",
    },
    {
      image: "/images/Flipping_Coin.jpg",
      alt: "Another Testimonial",
      text: "I'm very critical when it comes to reviewing things. YungCEO delivers on not only just the information you're seeking but also a dope community where everyone is open to any topic, building, learning and earning with each other. If you're looking for that change into digital products, YungCEO is Dank Approved 💪🏾",
      name: "ranchslanger",
      location: "YungCEO Society Member",
    },
    // Add more testimonials as needed
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonials h-full my-[100px] py-[20px] text-white flex md:flex-row md:gap-[5px] gap-[20px] flex-col relative overflow-x-hidden">
      <div className="flex flex-col gap-[10px] md:w-[80%] w-full">
        <h2 className="text-[40px] font-bold relative top-0 left-0">
          Testimonials
        </h2>
        <p>Recent Reviews</p>

        <Stars />
        <p className=" max-w-[600px] text-[15px]">
          {testimonials[currentIndex].text}
        </p>
        <p className=" max-w-[600px] text-[15px]">
          {testimonials[currentIndex].name}
        </p>
        <p className=" max-w-[600px] text-[15px]">
          {testimonials[currentIndex].location}
        </p>
      </div>

      <div className="flex flex-row gap-[20px] h-full w-full justify-center items-center pb-[2rem] ">
        <div className="flex flex-row gap-[20px] flex-1 items-end self-end">
          <div
            onClick={prevSlide}
            className="border border-gray-400 border-opacity-50 p-2 cursor-pointer z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>

          <div
            onClick={nextSlide}
            className="border border-gray-400 border-opacity-50 p-2 cursor-pointer z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <div className="image-slider max-w-[500px] flex overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex justify-center items-center rounded-lg overflow-hidden relative group"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center p-4 max-w-[80%]">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      src: "/images/mining_machines.png",
      name: "Digital Product Expert",
      description:
        "Dedicated to supporting the Bitcoin network by processing transactions in real time.",
    },
    {
      src: "/images/AI_one.png",
      name: "Mentor",
      description:
        "Cryptocurrency Consulting: Expert guidance on cryptocurrency investments, security, and blockchain integration.",
    },
    {
      src: "/images/Eth_Logo.png",
      name: "Graphic Designer & Web Developer",
      description:
        "Comprehensive support for users at all levels, from beginners to advanced, covering privacy, security, and advanced blockchain applications.",
    },
    {
      src: "/images/Bitcoin_Logo.png",
      name: "Digital Nomad",
      description:
        " Custom blockchain applications, token development, and other tailored solutions.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 650);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };

  return (
    <div className="relative w-full overflow-hidden mb-[100px]">
      <div
        className={`flex transition-transform duration-300 ease-in-out ${
          isMobile ? "" : "gap-[10px]"
        }`}
        style={{
          transform: `translateX(-${
            currentIndex * (isMobile ? 100 : 100 / 3)
          }%)`,
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className={`${
              isMobile ? "w-full" : "w-auto"
            } h-[500px] relative flex-shrink-0 group`}
          >
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-10 absolute bg-black/50 top-0 left-0 w-full h-full items-center justify-center flex">
              <span className="text-[20px] font-bold text-white">
                {service.description}{" "}
              </span>
            </div>

            <Image
              className="h-[100%] servicesImage object-cover"
              src={service.src}
              alt={`Slide ${index + 1}`}
              width={500}
              height={500}
            />

            <div className="flex p-[10px] items-end justify-end absolute bottom-0 text-white">
              <p className="mt-2 text-center font-semibold">{service.name}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute clickBtns left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute clickBtns right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
}
