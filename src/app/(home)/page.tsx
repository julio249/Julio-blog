import { Expecience } from "app/components/Expecience";
import { Categories } from "app/components/Home/Categories";
import { Hero } from "app/components/Home/Hero";
import { Projects } from "app/components/Projects";
import { Skills } from "app/components/Skills";


export default function Home(){
    

    return(
        <main>
            <Hero/>
            <Categories/>
            <Skills/>
            <Projects/>
            <Expecience/>

            
            
        </main>
    )
}