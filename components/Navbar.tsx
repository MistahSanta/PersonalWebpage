// This component will be respondable for navigating to different parts of the website
import Link from "next/link";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link href="#home">Home</Link>
      </li>
      <li>
        <Link href="#about">About</Link>
      </li>
    </ul>
  );
}
