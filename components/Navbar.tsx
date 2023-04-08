// This component will be respondable for navigating to different parts of the website
import Link from "next/link";

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
  return (
    <nav className=" w-screen flex space-x-10 text-6xl font-sans justify-center  text-white">
      {navLink.map((link) => {
        /*link is the variable that will save the info in the array */
        return (
        <ul key={link.name}>
            <Link href={link.path}>
              <li>{link.name}</li>
            </Link>
        </ul>
        );
      })}
    </nav>
  );
}
