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
                background="/personalWebpage.png" 
                desc="A website to showcase all my projects"
                skills="Next.js, React.js, Tailwindcss"
                title="My Personal Webpage"
                link="https://github.com/MistahSanta/PersonalWebpage"
                />
               

                <ProjectIcons 
                background="/A&M.png" 
                desc="A program that deploys a scalable solution to the CBRE challenge"
                skills="Python with Flask, HTMl, CSS, JavaScript"
                title="PlanniTech"
                link="https://github.com/MistahSanta/TAMUHACK"
                />
            
            </section>


        </div>




        </div>
        
        </>
    )
}

