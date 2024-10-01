import { useEffect } from "react";

const ConfirmCard = ({ closeBtn }) => {

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    }
  }, [])
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center border border-red-400">
        <div className="bg-white flex flex-col justify-center items-center gap-4 h-[150px] p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h1 className="font-bold text-xl text-center">You Order will Be Delivered On Your Address..!</h1>
          <button onClick={closeBtn} className="bg-yellow-400 text-white font-bold p-2 rounded-lg">
            ACCEPT IT
          </button>
        </div>
      </div>
    </div>
  );
};



export default ConfirmCard;



{/* <div className="flex flex-col items-center justify-center min-h-screen">

<div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
  <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
    <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
    <p className="text-gray-600 mb-6">Do you want to proceed with this action?</p>
    <button className="bg-blue-500 text-white rounded hover:bg-blue-600 " onClick={closeBtn}>Accept It</button>
  </div>
</div>

</div> */}