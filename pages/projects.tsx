import ProjectIcons from "@/components/ProjectIcons"

export default function Projects()
{
    return (
        <>
        <div className="h-fill w-full mellow-blue ">
        
        {/* Project Intro */}
        <h1 className=" font-sans font-bold text-white text-4xl text-center pt-6"> Projects</h1>


        {/*This part display the list of projects */}
        <div className=" h-full max-h-full w-fill mt-5 flex justify-center">

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 py-6 px-2">
                
                    <ProjectIcons 
                    background="/1.jpg" 
                    desc="Text s;ldfjk;aslfjoawunasvdl aslkdfnasdl; fn;asjfs"
                    title="My project :)"
                    link="https://jonathanle.me"
                    />
               

                <ProjectIcons 
                background="/2.jpg" 
                desc="Text s;ldfjk;aslfjoawunasvdl aslkdfnasdl; fn;asjfs"
                title="My project :)"
                link="https://jonathanle.me"
                />
               
                <ProjectIcons 
                background="/3.jpg"
                desc="Text s;ldfjk;aslfjoawunasvdl aslkdfnasdl; fn;asjfs"
                title="My project :)"
                link="https://jonathanle.me"
                />
                
            </section>


        </div>




        </div>
        
        </>
    )
}

