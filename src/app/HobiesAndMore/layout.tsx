import { HobiesAndMore } from "app/components/HobiesAndMore";
import { ReactNode } from "react";

export default function HobiesAndMorePage({children} : {children: ReactNode}){
    return(
        <main >
            <HobiesAndMore/>
            {children}
        </main>
    )
}