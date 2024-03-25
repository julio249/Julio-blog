import { Hero } from "app/components/Home/Hero";
import { ScrollToTop } from "app/components/shared/ScrollToTop";


export default function homeLayout({children}: {children: React.ReactNode}){
    return(
        <div id="home">
            
            
            <ScrollToTop id={'home'}/>
            {children}

        </div>
    )
}