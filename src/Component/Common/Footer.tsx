import Image from 'next/image'
import logo from "@/assets/logo.png"

function Footer() {
  return (
    
      <footer className="flex justify-between items-center container mx-auto bg-gray-300 dark:bg-black py-10 mt-10 ">
        <div className="flex gap-2">
          <Image
            src={logo}
            alt="Fitness logo"
            width={300}
            height={100}
            className="w-[30px] h-auto rotate-135"
          />

          <h1 className="text-2xl uppercase font-bold">Fitlog</h1>
        </div>

        <p className='text-gray-500'>@2026 FitLog - Workout library. Train hard, log honest</p>

        
        
      </footer>
    
  )
}

export default Footer
