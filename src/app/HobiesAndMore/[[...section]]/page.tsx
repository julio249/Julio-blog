import { PostArtice } from "app/components/HobiesAndMore/PostArtice";

interface sectionProps{
    params:{
        section: string[];

    }
    
}

export default function Section(props: sectionProps){
    const {section } = props.params
    return(
        <div>
            <PostArtice section={section}/>
        </div>
    )
}