"use client"

export default function Animation() {

  return (
    <>
    <div className="flex w-full items-center justify-center h-screen">
    <div className="w-[80px] h-[80px] bg-red-400 transition-all hover:bg-blue-400 cursor-pointer duration-300 
    items-center justify-center text-white text-center hover:rounded-2xl hover:translate-y-2" >
      Touch me
    </div>
    </div>

    <div className="relative">
    {/* 向日葵 */}
    <div>
    <div className="w-[80px] h-[80px] bg-orange-950 rounded-full "> </div>
    </div>
    <div className="absolute top-[-42px] right-[20px] rotae-0">
    <div className="w-[80px] h-[80px] bg-yellow-400 rounded-full"> </div>
    </div>

    </div>
    </>
  );
}
