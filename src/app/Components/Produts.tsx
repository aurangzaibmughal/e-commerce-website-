import Image from "next/image"
import { FaStar } from "react-icons/fa";
function Products () {
    return (
        
        <main>
        <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-10">
            <div className="sm:w-full md:w-full lg:w-[80%] h-full">
                        {/* {top site} */}
                            
                            <div className="sm:pl-5 md:pl-0">
                                <span className="border-l-8 border-red-500   mb-5 font-bold" >This Month</span>
                            </div>
                            <div className="flex justify-between">
                            <h2 className="text-4xl font-bold mt-4 ml-3">Best Salling Products</h2>
                            
                            </div>
                            
                            {/* {products} */}
                            {/* {container boxs} */}
                            <div className="flex sm:flex-col md:flex-row sm:items-center justify-between mt-7 sm:gap-y-5 md:gap-y-0">
                                <div>
                                <div className="w-[200px] h-[150px]  bg-gray-50 flex justify-center text-center">
                                <Image src={"/salling/raincot.png"} alt="item" width={200} height={150}></Image>
                                </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold pt-5">The North Coat</span>
                                        <span className="font-bold">$260</span>
                                        <span className="text-yellow-500 flex"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    </div>
                                </div>
                                <div>
                                <div className="w-[200px] h-[150px] bg-gray-50 flex justify-center text-center">
                                <Image src={"/salling/handbag.png"} alt="snap" width={200} height={150} ></Image>
                                </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold pt-5">Gucci duffle bag</span>
                                        <span className="font-bold">$960</span>
                                        <span className="text-yellow-500 flex"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    </div>
                                </div>
                                <div>
                                <div className="w-[200px] h-[150px] bg-gray-50 flex justify-center text-center">
                                <Image src={"/salling/smallspeker.png"} alt="snap" width={200} height={150} ></Image>
                                </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold pt-5">RGB liquid CPU Cooler</span>
                                        <span className="font-bold">$160</span>
                                        <span className="text-yellow-500 flex"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                    </div>
                                </div>
                                <div>
                                <div className="w-[200px] h-[150px] bg-gray-50 flex justify-center text-center">
                                <Image src={"/salling/bookrag.png"} alt="snap" width={200} height={150} ></Image>
                                </div>
                                    <div className="flex flex-col" >
                                        <span className="font-bold pt-5">Small BookSelf</span>
                                        <span className="font-bold">$360</span>
                                        <span className="text-yellow-500 flex"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                </div>
                                </div>
                                </div>
                            
                        
                            {/* {button} */}
                            <button className=" sm:block md:hedden px-5 mt-[25px] py-3 bg-red-500 ml-[300px] sm:ml-[5%] font-semibold rounded-md text-white">Veiw All</button>
                             
                </div>             
        
    </div>
    </main>
     
    
    



            
        
    )
}
export default Products