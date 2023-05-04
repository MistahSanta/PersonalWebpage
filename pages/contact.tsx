import Image from "next/image";
import {easeIn, easeOut, motion} from "framer-motion";


export default function Contact() {
    // Handle the submit form 
    const handleSubmit = async (event) =>
    {
        event.preventDefault(); // prevents the page from refreshing 
        const data = new FormData(event.currentTarget);
        console.log(data);
    }
    return (
        <div className="radial-Blue h-full w-full grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 pt-10">
           <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{
                repeat: Infinity,
                duration:2,
            }}
           >
           <div className="mx-auto flex items-center justify-center">
            <div className="relative w-[90vw] h-[90vw] sm:w-[50vw] sm:h-[50vw]">
                <Image 
                src="/Software.svg"
                alt="logo"
                fill
                />
            </div>
            </div>
            </motion.div>
        <div className="">
        <form className="w-full h-full grid grid-cols-2 gap-2 xl:gap-2 px-[3vw] text-sm xl:text-2xl">
            <h1 className="sm:text-4xl lg:text-6xl text-white col-span-2 flex my-auto OpenSans font-bold">Get in Touch</h1>
                <div>
                    <input 
                        id="formFirst"
                        type="fn"
                        name="fn"
                        autoComplete="fn"
                        placeholder="First Name"
                        required
                        className="w-full h-full rounded-2xl px-[2vw]"
                    />
                </div>
                <div>
                    <input 
                        id="formLast"
                        type="ln"
                        name="ln"
                        autoComplete="fn"
                        placeholder="Last Name"
                        className="w-full h-full rounded-2xl px-[2vw]"
                    />
                </div>
                <div>
                <label htmlFor="formEmail"></label>
                    <input 
                        id="formEmail"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Email"
                        className="w-full h-full rounded-2xl px-[2vw]"
                    />
                </div>
                <div>
                <label htmlFor="formEmail"></label>
                    <input 
                        id="phoneNum"
                        type="phone"
                        name="phone"
                        autoComplete="phone"
                        placeholder="Phone No."
                        className="w-full h-full rounded-2xl px-[2vw]"
                    />
                </div>
                <div className="col-span-2 row-span-2">
                    <textarea id="formMessage" className="w-full h-full rounded-2xl p-[2vw]" name="message" placeholder="Your Message"></textarea>
                </div>
                <div className='w-full col-span-2 text-center'>
                    <button type="submit" className='text-center px-10 py-2 bg-white mt-4 mb-5 text-2xl OpenSans rounded-2xl Kalam'>Submit</button>
                </div>
        </form>
        </div>
        </div>

    )


}