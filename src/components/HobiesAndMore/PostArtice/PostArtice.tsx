import { CollegeArticle } from "../CollegeArticle/CollegeArticle"
import { GalleryArticle } from "../GalleryArticle"
import { TravelArticle } from "../TravelArticle"


export const PostArtice =(props) => {
    if(props.section == 'Travel'){
        return <TravelArticle/>
    }
    else if(props.section == 'College'){
        return <CollegeArticle/>
    }
    else if(props.section == 'Gallery'){
        return <GalleryArticle/>
    }
}