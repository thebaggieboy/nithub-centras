import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
    return (
        <div className="bg-[url('/img/hero-bg.svg')] bg-no-repeat bg-cover">
            <div className="max-w-screen-2xl mx-auto flex justify-center items-center h-screen relative max-sm:px-5">
                <Navbar />
                <div className="lg:w-[94%] xl:w-[86%] grid lg:grid-cols-2 mt-10">
                    <div className="max-w-[600px] mx-auto">
                        <h2 className="font-bold text-4xl xl:text-5xl leading-extra-snug xl:leading-extra-snug">
                            Empower Your Business with
                            <span className="text-primary"> Seamless CRM</span>
                            <span> & </span>
                            <span className="text-success">Inventory Solutions.</span>
                        </h2>
                        <p className="leading-extra-snug mt-2 mb-8">Centra optimizes your customer relationships and inventory management, helping you save time, reduce costs, and grow your business effortlessly.</p>
                        <Link href="/auth/signup" className="bg-primary text-white px-5 py-3 rounded-lg">Get Started</Link>
                    </div>

                    <div className="max-lg:hidden relative">
                        <Image src="/img/table.svg" alt="illustration of a table" width={1000} height={278.86} className="absolute -left-10 -top-[120px] xl:-top-[150px]" />
                        <Image src="/img/graph.svg" alt="illustration of a graph" width={330} height={278.88} className="absolute left-[244px] top-[74px] [box-shadow:_3.6px_3.6px_90px_36px_#E3EDFD80;] rounded-[5.64px] max-xl:hidden" />
                        <Image src="/img/graph.svg" alt="illustration of a graph" width={260} height={278.88} className="absolute left-[180px] top-[52px] [box-shadow:_3.6px_3.6px_90px_36px_#E3EDFD80;] rounded-[5.64px] xl:hidden" />
                    </div>
                </div>
            </div>
        </div>
    )
};

const Navbar = () => {
    return (
        <div className="bg-gradient-gray absolute top-5 rounded-full lg:w-[94%] xl:w-[86%] flex justify-between items-center py-2 px-10 max-lg:hidden z-10">
            <Image src="/img/centra-logo.svg" alt="logo" width={100.29} height={40} />
            <div className="text-[#465054] flex gap-5">
                <span className="cursor-pointer text-lg font-medium">About</span>
                <span className="cursor-pointer text-lg font-medium">Services</span>
                <span className="cursor-pointer text-lg font-medium">Why Centra</span>
                <span className="cursor-pointer text-lg font-medium">Contact Us</span>
            </div>
            <Link href="auth/signup" className="bg-primary text-white py-2 px-4 rounded-full">Get Started</Link>
        </div>
    )
}