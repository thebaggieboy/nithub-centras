import Image from "next/image";

function Footer() {
  return (
    <div className="lg:w-[94%] xl:w-[86%] mx-auto mt-28 text-[#465054] max-lg:px-10 max-w-screen-2xl">
      <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mb-16">

        <div className="col-span-2 grid gap-6">
          <Image src="/img/centra-logo-alt.svg" alt="logo" width={69} height={74} />
          <p className="lg:max-w-[80%]">
            Centra simplifies business management by integrating CRM and
            inventory solutions, empowering businesses to streamline operations
            and drive growth.
          </p>
          <div className="text-xl flex gap-[1.375rem]">
            <a href="#!"> <i className="fa-solid fa-envelope"></i> </a>
            <a href="#!"> <i className="fa-brands fa-facebook-f"></i> </a>
            <a href="#!"> <i className="fa-brands fa-twitter"></i> </a>
            <a href="#!"> <i className="fa-brands fa-instagram"></i> </a>
            <a href="#!"> <i className="fa-brands fa-linkedin"></i> </a>
          </div>
          <br /><br />
        </div>

        <FooterNavigation />

      </div>

      <hr />

      <p className="text-center py-5 mb-10">
        All rights reserved. Copyright &copy; {new Date().getFullYear()} Centra
      </p>
    </div>
  );
}

export default Footer;


const FooterNavigation = () => {
  return (
    <div className="flex flex-col md:flex-row gap-20 md:gap-44 min-w-max">
      <div className="grid gap-10">
        <h2 className="font-[500] lg:text-2xl text-xl">Company</h2>
        <ul className="grid gap-[18px] text-lg">
          <li> <a href="#!">About</a> </li>
          <li> <a href="#!">Services</a> </li>
          <li> <a href="#!">Why Centra</a> </li>
          <li> <a href="#!">Contact Us</a> </li>
          <li> <a href="#!">Get Started</a> </li>
        </ul>
      </div>

      <div className="grid gap-10">
        <h2 className="font-medium lg:text-[1.375rem] text-xl">Contact us</h2>
        <ul className="grid gap-[1.375rem] text-lg">
          <li className="flex items-center gap-[6px]"> <i className="fa-regular fa-envelope" style={{ color: '#465054' }}></i> admin@centra.com</li>
          <li className="flex items-center gap-[6px]"> <Image src="/icons/phone.svg" alt="" width={20} height={20} /> +234-910-820-3671</li>
          <li className="flex items-baseline gap-2">
            <Image src="/icons/map-pin.svg" alt="" width={20} height={20} />
            <span>
              254 University Rd, <br />
              Nithub, Unilag, Yaba, <br />
              Lagos, Nigeria
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
