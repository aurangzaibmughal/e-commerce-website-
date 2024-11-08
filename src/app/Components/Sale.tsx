import Image from "next/image"
import { FaStar } from "react-icons/fa";


function Sale () {
    return (
        <main>
        <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-10">
            <div className="sm:w-full md:w-full lg:w-[80%] h-full">
                        {/* {top site} */}
                            
                            <div className="sm:pl-5 md:pl-0">
                                <span className="border-l-8 border-red-500   mb-5 font-bold" >Today's</span>
                                <h2 className="text-4xl font-bold mt-4">Flash Sales</h2>
                            </div>
                            
                            {/* {products} */}
                            {/* {container boxs} */}
                            <div className="flex sm:flex-col md:flex-row sm: items-center justify-between mt-7 sm:gap-y-5 md:gap-y-0">
                                <div>
                                <div className="w-[200px] h-[150px] a bg-gray-50 flex justify-center text-center">
                                <Image src={"/game.png"} alt="pic" width={150} height={100} ></Image>
                                
                                </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold pt-5">HAVIT HV-092 Gamep</span>
                                        <span className="font-bold">$120</span>
                                        <span className="text-yellow-500 flex"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    </div>
                                </div>
                                <div>
                                <div className="w-[200px] h-[150px]] bg-gray-50 flex justify-center text-center">
                                <Image src={"/chair.png"} alt="pic" width={150} height={100} ></Image>
                                </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold pt-5">S-Series Comfort Chair</span>
                                        <span className="font-bold">$375</span>
                                        <span className="text-yellow-500 flex"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    </div>
                                </div>
                                <div>
                                <div className="w-[200px] h-[140px] bg-gray-50 flex justify-center text-center">
                                <Image src={"/keybord.png"} alt="pic" width={150} height={100} ></Image>
                                </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold pt-5">IPS LCD Gaming Monitor</span>
                                        <span className="font-bold">$370</span>
                                        <span className="text-yellow-500 flex"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    </div>
                                </div>
                                <div>
                                <div className="w-[200px] h-[140px] bg-gray-50 flex justify-center text-center">
                                <Image src={"/lcd.png"} alt="pic" width={150} height={100} ></Image>
                                </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold pt-5">AK-900 Wired Keyboard</span>
                                        <span className="font-bold">$120</span>
                                        <span className="text-yellow-500 flex"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    </div>
                                </div>
                                </div>
                                 
        </div>
</div>
<button className=" mt-[80px]  py-2 px-3 bg-red-500 sm:ml-10 md:ml-[550px] font-semibold 4
rounded-md text-white">Veiw All Products</button>
 </main>

            
        
    )
}
export default Sale 