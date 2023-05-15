import Image from "next/image";
import { motion } from "framer-motion";


export default function Contact() {
  // Handle the submit form
  const handleSubmit = async (event : any) =>
  {
    event.preventDefault(); // prevents the page from refreshing
    // Get data from the form 
    const data = {
        first: event.target.fn.value,
        last: event.target.ln.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        message: event.target.formMessage.value
    }
    //Convert data into JSON string 
    const JSONData = JSON.stringify(data);
    const destination = "/api/form"; // Where the data will be sent - api 

    const options = {
        method: 'POST', 
        headers: {
            'Content-type': 'application/json',
        },
        body: JSONData,
    };

    const response = await fetch(destination, options);
    const result = await response.json();
    console.log(result);

  }



  return (
    <div className="radial-Blue h-full w-full grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 pt-10">
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <div className="mx-auto flex items-center justify-center">
          <div className="relative w-[90vw] h-[90vw] sm:w-[50vw] sm:h-[50vw]">
            <Image src="/Software.svg" alt="logo" fill />
          </div>
        </div>
      </motion.div>
      <div>
        <form 
        method="post"
        className="w-full h-full grid grid-cols-2 gap-2 xl:gap-2 px-[10vw] sm:px-[3vw] text-sm xl:text-2xl "
        onSubmit={handleSubmit}
        >
          <h1 className="text-4xl lg:text-6xl text-white col-span-2 flex justify-center my-auto Rubrik font-bold">
            Get in Touch
          </h1>
          <div>
            <input
              id="fn"
              type="fn"
              name="fn"
              placeholder="First Name"
              required
              className="w-full h-full rounded-2xl px-[2vw] py-[1vh]"
            />
          </div>
          <div>
            <input
              id="ln"
              type="ln"
              name="ln"
              placeholder="Last Name"
              required
              className="w-full h-full rounded-2xl px-[2vw] py-[1vh]"
            />
          </div>
          <div>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full h-full rounded-2xl px-[2vw] py-[1vh]"
            />
          </div>
          <div>
            <input
              id="phone"
              type="phone"
              name="phone"
              autoComplete="Did not enter phone number"
              placeholder="Phone No."
              className="w-full h-full rounded-2xl px-[2vw] py-[1vh]"
            />
          </div>
          <div className="col-span-2 row-span-2">
            <textarea
              id="formMessage"
              className="w-full h-full rounded-2xl p-[2vw] py-[2vh]"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="w-full col-span-2 text-center">
            <button
              type="submit"
              className="text-center px-10 py-2 bg-white mt-4 mb-5 text-2xl OpenSans rounded-2xl Kalam"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
