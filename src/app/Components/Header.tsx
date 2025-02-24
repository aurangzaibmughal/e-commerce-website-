import Link from "next/link"
function Header() {
    return(
        <div className="w-full sm:h-[90px] md:h-[80px] flex justify-center items-center border-b-2 ">
            <div className="w-[80%] h-full sm:flex-col md:flex-row  flex justify-between items-center">
            {/* {left side} */}
            <div>
            {/* {log} */}
            <h1 className="text-4xl font-bold ">Exclusive</h1>
            </div>
            {/* {right side} */}
                <div>
                    <ul className="flex sm:flex-row gap-x-5 mr-4 sm:mb-4 md:mb-0">
                        <li>
                            <Link className="hover:underline" href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link className="hover:underline" href={"/"}>About</Link>
                        </li>
                        <li>
                            <Link className="hover:underline" href={"/"}>ContactUs</Link>
                        </li>
                        <li>
                            <Link className="hover:underline" href={"/"}>SignUp</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
    )
}

export default Header