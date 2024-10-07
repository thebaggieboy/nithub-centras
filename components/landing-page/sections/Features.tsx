import Image from "next/image"

export const FeatureSection = () => {
    return (
      <div className="min-h-screen bg-[#020313] flex justify-center items-center">
        <div className="w-[86%] flex gap-y-10 justify-start max-lg:flex-col lg:justify-between xl:grid xl:grid-cols-2 items-center">
  
          <Image src="/img/growth-illustration.svg" alt="illustration of a graph" width={360} height={304.96} className="" />
  
          <div className="grid gap-10">
            <h2 className="text-4xl lg:text-5xl font-medium flex flex-col leading-extra-snug">
              <span className="text-[#98A1B3]">Stay Organized & </span>
              <span className="text-white">Grow Your Business</span>
            </h2>
            <div className="flex flex-wrap gap-3 lg:w-max">
              <span className="text-[#98A1B3] border border-[#98A1B3] p-1 rounded-full py-1 px-3">Vendors</span>
              <span className="text-[#98A1B3] border border-[#98A1B3] p-1 rounded-full py-1 px-3">Customers</span>
              <span className="text-[#98A1B3] border border-[#98A1B3] p-1 rounded-full py-1 px-3">Administrators</span>
              <span className="text-[#98A1B3] border border-[#98A1B3] p-1 rounded-full py-1 px-3">Business Owners</span>
            </div>
          </div>
        </div>
      </div>
    )
  }