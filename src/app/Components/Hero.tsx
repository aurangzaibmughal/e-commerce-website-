import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

function Hero () {
    return (
        <div className="w-full h-[270px]  flex justify-center mt-8">
            <div className='bg-black h-full sm:w-full md:w-full lg:w-[80%] flex justify-between'>
                {/* {left side} */}
                    <div className='ml-8 sm:mt-4 md:mt-16 text-white'>
                        <div className='flex justify-center items-center gap-x-3'>
                            <span><FontAwesomeIcon icon={faApple} className=' w-[30px] ml-0' /></span>
                            <span className='ml-4'>IPhone 14 Series</span>
                           </div>

                           <div className='w-[200px] ml-5'>
                            <h1 className='text-2xl font-sans font-bold'>Up TO 10% off Voucher</h1>
                            <br></br>
                            <button className='font-bold underline underline-offset-8 ml-0'>Shop Now</button>
                           </div>
                    </div>
                    {/* {right side} */}  
                    <div className='ml-auto'>
                        <Image src="/hero.png" alt="iPhone 15" width={355} height={355} 
                        className='mt-6' />
                    </div>
                    <div>
                        
                    </div>
                </div>




            </div>
    
    )
}
export default Hero