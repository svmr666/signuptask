import Image from "next/image"; // Энэ мөрийг хамгийн дээр нь нэмээрэй
export const FirstList = () => {
  return (
    <div className="w-screen h-screen bg-blue-200 flex justify-center items-center">
      <div className="w-120 h-163 bg-white flex flex-col items-center rounded-xl p-8 shadow-lg">
        {" "}
        <div className="w-104 h-96 flex flex-col">
          {" "}
          <div className="w-full h-24 flex items-center ">
            {" "}
            <Image
              src="/Main 1.svg"
              alt="Main Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
          <div className="text-xl font-bold">Join us! 😎</div>
          <div className="text-sm text-gray-500">
            Please provide all current information accurately.
          </div>
          <div className="flex gap-4 flex-col mt-7">
            <div>
              <div className="text-sm font-medium">
                First Name <span className="text-red-500">*</span>
              </div>

              <input
                className="border p-2 rounded w-full border-gray-400"
                placeholder="First Name"
              />
            </div>

            <div>
              <div className="text-sm font-medium">
                Last Name <span className="text-red-500">*</span>
              </div>

              <input
                className="border p-2 rounded w-full border-gray-400"
                placeholder="Last Name"
              />
            </div>

            <div>
              <div className="text-sm font-medium">
                Username <span className="text-red-500">*</span>
              </div>

              <input
                className="border p-2 rounded w-full border-gray-400"
                placeholder="Username"
              />
            </div>
          </div>
        </div>
        <button className="bg-black text-white w-104 h-11 mt-auto rounded-lg">
          Continue 1/3 {`>`}
        </button>
      </div>
    </div>
  );
};
