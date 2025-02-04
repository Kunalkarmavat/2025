import { Lexend_Giga, Noto_Traditional_Nushu } from "next/font/google";

const lexendGiga = Lexend_Giga({ weight: ["100", "900"], subsets: ["latin"] });
const notoNushu = Noto_Traditional_Nushu({ weight: ["400"], subsets: ["latin"] });



export const Hero = () => {
    return (
        <>
            <section className={`relative w-5/6   min-h-screen flex items-center  m-auto pt-44`}>
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 " />
                </div>
                <div className="relative z-10">
                    <h1 className="text-9xl md:text-8xl font-extrabold leading-tight mb-6">
                        <span className={`text-[10rem] font-bold  ${lexendGiga.className}`}
                        >
                            THE <span className={`text-[#C389F4]  ${lexendGiga.className}`}>⁕^⁕CREATOR</span> GATHERING
                        </span>
                    </h1>

                    <div className="absolute top-6 right-80  w-[19rem] ${notoNushu.className} ">
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            Nas summit is for crazy people who create something from nothing
                        </p>
                    </div>
                    <div className=' relative px-5 bottom-4 w-full h-[44rem] rounded-[4rem] m-auto bg-[#3f4cdc] -z-40'>

                    </div>
                </div>


            </section>
            <div className='w-full h-[20rem] bg-gradient-to-t from-[#8f64b3] to-[#000000]'></div>

        </>

    );
};
