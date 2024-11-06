import Image from "next/image";

const MobileDownload = () => {
  return (
    <div className="bg-[#E3EDFD] pt-[120px] pb-[50px] lg:w-[94%] xl:w-[86%] mx-auto rounded-3xl">
        <div className="grid grid-cols-1 lg:flex">
            <div className="mx-8 lg:mx-12 xl:mx-20">
                <h1 className="text-2xl lg:text-4xl xl:text-5xl font-medium ">Get Centra On-The-Go!</h1>
                <p className="lg:max-w-[90%] py-5">Manage your business anytime, anywhere. Download the Centra app on Play Store and App Store to access real-time inventory, sales insights, and customer interactions—right at your fingertips</p>

                <div className="md:flex md:gap-5 pt-5">
                    <button className="bg-primary min-w-max md:w-auto  text-white px-5 py-4 flex items-center rounded-lg mb-4">
                    <Image src="/img/googleplay.png" alt="Google Play" className="mr-2" width={25} height={25} />Download on Google Play
                    </button>
                    <button className="bg-primary min-w-max md:w-auto text-white px-5 py-4 flex items-center rounded-lg mb-4">
                    <Image src="/img/appstore.png" alt="Google Play" className="mr-2" width={25} height={25} /> Download on App Store</button>
                </div>
            </div>
            <div className="w-full">
                <Image src="/img/mobile.svg" alt="mobile" width={250} height={200} className="hidden lg:block mb-[-50px] mx-auto"/>
            </div>
        </div>
    </div>
  )
}

export default MobileDownload