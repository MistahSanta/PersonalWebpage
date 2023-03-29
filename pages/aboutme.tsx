// This page will hold information about me 
import Image from "next/image"
export default function AboutMe()
{
  return (
    <>
        <div className="h-screen w-screen mellow-blue">
        
            <h1 className="text-center text-white text-4xl p-6 font-sans font-bold">About me</h1>

            {/* About me information starts here */}

            <div className='grid item-center'> 
                Hello! Thanks for visiting my page! I'm Jonathan Le, and I am curious 
                about both software and hardware. I love learning about new technologies.

                I am currently pursuing a Bachelor's degree in Computer Engineering at the University of Texas 
                at Dallas. 

                My interest recently is in web development, NextJS, Vietnamese, and hardware.
            </div>

            {/*This is the picture of me */}
            <Image src="/1.jpg" alt="Picture of me" width={500} height={500}></Image>
        </div>
    </>
  )
  
}

