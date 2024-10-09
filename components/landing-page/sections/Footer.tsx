import Image from "next/image";

function Footer() {
  return (
    <div className="lg:w-[86%] mx-auto mt-28 text-[#465054] px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mb-16">
        <div className="col-span-2">
          <div>
            <Image src="/img/footer-img.png" alt="logo" width={69} height={74} />
          </div>
          <p className="my-5 lg:max-w-[80%]">
            Centra simplifies business management by integrating CRM and <br />
            inventory solutions, empowering businesses to streamline operations
            <br />
            and drive growth.
          </p>
          <div className="">
            <a className="p-3 text-xl" href="#!">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a className="p-3 text-xl" href="#!">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a className="p-3 text-xl" href="#!">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a className="p-3 text-xl" href="#!">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a className="p-3 text-xl" href="#!">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <br /><br />
        </div>
        <div>
          <h2 className="font-[500] lg:text-2xl text-xl">Company</h2>
          <ul>
            <li className="py-1 text-lg">
              <a href="#!">About</a>
            </li>
            <li className="py-1 text-lg">
              <a href="#!">Services</a>
            </li>
            <li className="py-1 text-lg">
              <a href="#!">Why Centra</a>
            </li>
            <li className="py-1 text-lg">
              <a href="#!">Contact Us</a>
            </li>
            <li className="py-1 text-lg">
              <a href="#!">Get Started</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-[500] lg:text-2xl text-xl">Contact us</h2>
          <ul>
            <li className="py-1 text-lg">
              <i className="fa-regular fa-envelope"></i> admin@centra.com
            </li>
            <li className="py-1 text-lg">
              <i className="fa-solid fa-phone"></i> +234-910-820-3671
            </li>
            <li className="py-1 text-lg">
              <i className="fa-solid fa-location-dot"></i> 254 University Rd, <br />
              Nithub, Unilag, Yaba, <br />
              Lagos, Nigeria
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="text-center py-5 mb-10">
        All rights reserved. Copyright &copy; {new Date().getFullYear()} Centra
      </p>
    </div>
  );
}

export default Footer;
