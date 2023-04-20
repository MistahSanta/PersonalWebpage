import Image from "next/image"
import {motion, spring} from "framer-motion"

//This file will hold the project Icons inside the projectTab
// Interface to specify type to remove prop is any type error 
interface ProjectProps {
    background: string;
    desc: string;
    title: string;
    link: string;
}

export default function ProjectIcons(props : ProjectProps) {
    
    return (
        <>
        <motion.div 
            initial={{y:300}}
            whileHover={{scale: 1.05}}
            whileTap={{scale:0.95}}
            whileInView={{
                y:0,
                transition: {
                    type: spring,
                    bounce: 0.1,
                    duration: 0.3
                }
            }}
        >
            <div className="relative w-[90vw] lg:w-[40vw] h-[50vh] sm:h-96 border-white border-4 rounded-lg">
            {/* background image */}
            <a target="_blank" rel="noreferrer" href={props.link}>
                <Image 
                src={props.background} 
                alt="background picture"
                fill 
                style= {{
                zIndex: 0
            }}
            />
            
                <div className="text-center relative h-full w-full z-0 flex flex-col items-center justify-center text-white text-4xl space-y-36">
                    <div>{props.title}</div>


                    <div className="">
                        {props.desc} 
                    </div>
                </div>
                </a>
            </div>



        </motion.div>
        </>
    )

}