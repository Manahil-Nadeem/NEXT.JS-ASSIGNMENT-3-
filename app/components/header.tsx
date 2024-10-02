import Link from "next/link"

export default function Header(){
    return(
        <div className="header">
            <ul className="header-buttons">

              <Link href={"/"}>
              <li>Home</li>
              </Link> 

              <Link href={"/portfolio"}>
              <li>portfolio</li>
              </Link>
                
              <Link href={"/contact-us"}>
                <li>contact us</li>
                </Link>
                
                
             <Link href={"/about"}>
              <li>about</li>
              </Link>
         

            </ul>
        </div>
    )
}