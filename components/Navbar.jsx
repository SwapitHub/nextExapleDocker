import Link from "next/link";
import { HomePage } from "./homePages/home/page";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-purple-600 px-8 py-3">
      <Link className="text-white font-bold" href="/">
        Integration Ninjas
        <HomePage/>
      </Link>
        <Link href={"/addTopic"}>
        <button classname="bg-white text-purple-600 font-bold py-2 px-4 rounded-md hover:bg-purple-100">
          add topic
      </button>
      </Link>
     
      
    
    </nav>
  );
}
