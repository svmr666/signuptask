import Image from "next/image"; // Энэ мөрийг хамгийн дээр нь нэмээрэй
export const ThirdList = () => {
  return (
    <div className="w-screen h-screen bg-blue-200 flex justify-center items-center">
      <div className="w-120 h-163 bg-white flex flex-col items-center rounded-xl p-8 shadow-lg">
        {" "}
        <div className="w-104 h-96 flex flex-col">
          {" "}
          <div className="w-full h-24 flex items-center">
            {" "}
            <Image
              src="/Main 1.svg"
              alt="Main Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
          <div className="text-[26px] font-semibold">Join us! 😎</div>
          <div className="text-sm text-gray-500 text-[18px]">
            Please provide all current information accurately.
          </div>
          <div className="flex gap-4 flex-col mt-7">
            <div>
              <div className="text-sm font-semibold">
                Email <span className="text-red-500">*</span>
              </div>

              <input
                className="border p-2 rounded w-full border-gray-400"ç
                placeholder="Email"
              />
            </div>

            <div>
              <div className="text-sm font-medium">
                Phone Number <span className="text-red-500">*</span>
              </div>

              <input
                className="border p-2 rounded w-full border-gray-400"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <div className="text-sm font-medium">
                Password <span className="text-red-500">*</span>
              </div>

              <input
                className="border p-2 rounded w-full border-gray-400"
                placeholder="Password"
              />
            </div>
            <div>
              <div className="text-sm font-medium">
                Confirm Password <span className="text-red-500">*</span>
              </div>

              <input
                className="border p-2 rounded w-full border-gray-400"
                placeholder="Confirm Password"
              />
            </div>
          </div>
        </div>
        <button className="bg-black text-white w-104 h-11 mt-auto rounded-lg">
          Continue 3/3 {`>`}
        </button>
      </div>
    </div>
  );
};
