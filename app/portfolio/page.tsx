import Image from "next/image"

import  Header from  "@/app/components/header";
export default function Portfolio(){
    return(
        <div>
         
        <Image src={"/profile.jpg"} alt="picture" width={300} height={300}/>
        <h1><b><i>This is me Manahil Nadeem</i></b></h1>
        <h1><b><i>I have done master's in <u>physics.</u></i></b></h1>
        <h1><b><i>If i talk about my profession , so by profession i am a subject teacher in higher secondary school</i></b></h1>
        <h1><b><i>I also have completed few programming languages such as HTML , CSS , Typescript and Javascript.</i></b></h1>
        <h1><b><i>I am next.js developer.</i></b></h1>
        

        </div>
    )
}