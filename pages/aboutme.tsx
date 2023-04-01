// This page will hold information about me 
import Image from "next/image"



export default function AboutMe()
{
  var profilePic = "/2.jpg";
  return (
    <>
        <div id="about" className="h-screen w-screen mellow-blue">
        
            <h1 className="text-center text-white text-4xl p-6 font-sans font-bold">About me</h1>

            {/* About me information starts here */}

            <section className=" text-left h-max max-w-4xl m-auto flex">
                <div className='text-white grid item-center text-2xl font-mono' > 
                    <p>
                        <br></br>
                        Hello! Thanks for visiting my page! My name is Jonathan Le, and I am curious 
                        about both software and hardware. I love learning about new technologies. 
                    <br></br>
                    <br></br>
                    </p>

                    <p>
                        I am currently pursuing a Bachelor&apos;s degree in Computer Engineering at the University of Texas 
                        at Dallas. 
                        <br></br>
                        <br></br>
                    </p>
                    <p>
                    My interest recently is in web development, NextJS, Vietnamese, and hardware.
                    </p>

                                      
                </div>
                
                {/*This is the picture of me */}
                <Image src={profilePic} alt="Picture of me" width={500} height={500}></Image>
                
                <div>
                    <hr></hr>
                </div>
                  
            </section>
        </div>
    </>
  )
  
}

