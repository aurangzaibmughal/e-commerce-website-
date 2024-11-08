import Image from "next/image"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";


function Footer () {
    return(
       <div className=" sm:py-6 md:py-0 bg-black sm:pl-5 md:pl-0 sm:gap-5 md:gap-0 flex sm:flex-col md:flex-row text-white justify-evenly md:h-[400px] sm:h-full mt-40 sm:items-start md:items-center">
    
        <div>
            <h1 className="text-4xl font-bold  ">Exclusive</h1>
            <ul>
                <li className="text-xl">Subscribe</li>
                <br />
                <li>Get 10% off your first order</li>
                <br />
                <div className="flex flex-col"><Image src={"/Send Mail.png"} alt="snap" width={200} height={80} ></Image>
        </div>
            </ul>
        </div>
        <div>
            <h1 className="text-2xl font-bold ">Support</h1>
            <ul>
                <li>111 BJOY,Dhaka,</li>
                <li>DH 1515, Bangladesh,</li>
                <br />
                <li>exclusive@gamil.com</li>
                <li>+88015-88888-9999</li>
            </ul>
        </div>
        <div>
            <h1 className="text-2xl font-bold ">Account</h1>
            <ul>
                <li>My Account</li>
                
                <li>login / Register</li>
                
                <li>Cart</li>
                
                <li>Wishlist</li>
                
                <li>Shop</li>
            </ul>
        </div>
        <div>
            <h1 className="text-2xl font-bold ">Quick Link</h1>
            <br />
            <ul>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <h1 className="text-2xl font-bold pt-4 ">Download App</h1>
            <ul>
                <li className="font-light pb-3">Save $3 with App New User Only</li>
            </ul>
                
                <div className=" flex-row gap-2 flex justify-center text-center">
                    <Image src={"/footer/Qrcode 1.png"} alt="snap" width={90} height={0} ></Image>
                    <ul className="flex flex-col">
                    <Image src={"/footer/GooglePlay.png"} alt="snap" width={110} height={80} ></Image>
                    <Image src={"/footer/download-appstore.png"} alt="snap" width={110} height={80} ></Image>
                    </ul>
                </div>    

                <div className=" flext-row gap-6 place-items-start pt-3 flex justify-center text-center">
                <Image src={"/icon/Icon-Facebook.png"} alt="snap" width={20} height={20} ></Image>
                    <Image src={"/icon/Group.png"} alt="snap" width={20} height={20} ></Image>
                    <Image src={"/icon/Group (1).png"} alt="snap" width={20} height={20} ></Image>
                    <Image src={"/icon/Icon-Linkedin.png"} alt="snap" width={20} height={20} ></Image>
                </div>
            






                
            </div>
                            
        </div>
    
            
    
    

)

}
export default Footer