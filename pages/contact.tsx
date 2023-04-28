import Image from "next/image"

export default function Contact() {


    return (
        <div className="bg-red-600 h-full w-full grid grid-cols-2 gap gap-2 lg:gap-4">
           
           <div className="mx-auto">
            <div className="relative w-96 h-96">
                <Image 
                src="/2.jpg"
                alt="logo"
                fill
                />
            </div>
            </div>

        <div className="">
        <form className="bg-blue-600 w-full h-full grid grid-cols-2 gap-2 p-2">
            <h1 className="text-center sm:text-4xl lg:text-6xl font-sans font-bold text-white col-span-2 ">Chat with me</h1>
            <div className="col-span-2">
                    <label htmlFor="formEmail"></label>
                    <input 
                        id="formEmail"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Email Address"
                        className="w-full h-[5vh] border-r-4"
                    />
                </div>
                <div className="">
                    <input 
                        id="formFirst"
                        type="fn"
                        name="fn"
                        autoComplete="fn"
                        placeholder="First Name"
                        required
                        className="w-full h-[5vh] border-r-2"
                    />
                </div>
                <div>
                    <input 
                        id="formLast"
                        type="ln"
                        name="ln"
                        autoComplete="fn"
                        placeholder="Last Name"
                        className="w-full h-[5vh] border-r-2"
                    />
                </div>

                <div className="col-span-2">
                    <textarea id="formMessage" className="w-full h-[20vh] border-r-2" name="message" placeholder="Your Message"></textarea>
                </div>
                <div className='w-full col-span-2 overflow-hidde place-self-center'>
                    <button type="submit" className='text-center w-full bg-white border-r-8 border-none border-collapse'>Submit</button>
                </div>
        </form>
        </div>
        </div>

    )


}