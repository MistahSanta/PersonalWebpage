// This component will be respondable for navigating to different parts of the website
import Link from "next/link";
import { useState } from "react";
import {FiMenu} from "react-icons/fi";
import {FiX} from "react-icons/fi";

/* use NextJs map function to map each link in an array     
    for simplier application
*/

export const navLink = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About",
    path: "#about",
  },
];

export default function Navbar() {
    const [toggle, setToggle] = useState(false); // set the navbar toggle to false 
 
  return (
    <nav className="w-full flex space-x-10 text-6xl font-sans justify-center  text-white">
      {navLink.map((link) => {
        /*link is the variable that will save the info in the array */
        return (
          <>
          <div> 

          </div>
            <ul key={link.name}>
                <Link href={link.path}>
                  <li>{link.name}</li>
                </Link>
            </ul>

          </>

        );
      })}
    </nav>
  );
}
