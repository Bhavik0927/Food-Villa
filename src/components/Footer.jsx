import { LuCreativeCommons } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-slate-900 font-semibold text-gray-400 w-full h-96">
      <div className="flex gap-16 justify-center pt-6">
        <div className="w-[9.5rem]">
          <img src="src/file.png" alt="logo" />
          <h2 className="flex gap-1"><LuCreativeCommons className="text-4xl "/>2024 Crunchy Bites Technologies Pvt. Ltd</h2>
        </div>

        <div className="  w-[9.5rem] flex flex-col gap-2">
          <h1 className="font-bold text-xl text-white">Company</h1>
          <h2>About</h2>
          <h2>Career</h2>
        </div>

        <div className="  w-[9.5rem] flex flex-col gap-2">
          <h1 className="font-bold text-xl text-white">Contact us</h1>
          <h1>Help & Support</h1>
          <h1>Partner with us</h1>
        </div>

        <div className="  w-[9.5rem] flex flex-col gap-2">
        <h1 className="font-bold text-xl text-white">We deliver to:</h1>
        <h2>Bangalore</h2>
        <h2>Gurgaon</h2>
        <h2>Hyderabad</h2>
        <h2>Delhi</h2>
        <h2>Mumbai</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer