import Image from "next/image";

export const KeyServiceSection = () => {

    const keyServices = [
      {
        bg: "bg-gradient-radial-blue",
        title: "Comprehensive Business Analytics",
        description: "Make informed decisions with in-depth analytics, visualized trends, and performance KPIs for every aspect of your business.",
        img: "/img/reports.svg"
      },
      {
        bg: "bg-gradient-radial-yellow",
        title: "Efficient CRM Integration",
        description: "Manage customer interactions, automate sales workflows, and gain actionable insights with our tailored CRM setups",
        img: "/img/dashboard.svg"
      },
      {
        bg: "bg-gradient-radial-green",
        title: "Advanced Inventory Management",
        description: "Stay ahead of demand with multi-channel inventory tracking, real-time stock updates, and automatic restocking alerts.",
        img: "/img/inventory.svg"
      },
      {
        bg: "bg-gradient-radial-purple",
        title: "Comprehensive Business Analytics",
        description: "Make informed decisions with in-depth analytics, visualized trends, and performance KPIs for every aspect of your business.",
        img: "/img/reports.svg"
      },
      {
        bg: "bg-gradient-radial-blue",
        title: "Comprehensive Business Analytics",
        description: "Make informed decisions with in-depth analytics, visualized trends, and performance KPIs for every aspect of your business.",
        img: "/img/reports.svg"
      },
      {
        bg: "bg-gradient-radial-yellow",
        title: "Efficient CRM Integration",
        description: "Manage customer interactions, automate sales workflows, and gain actionable insights with our tailored CRM setups",
        img: "/img/dashboard.svg"
      },
      {
        bg: "bg-gradient-radial-green",
        title: "Advanced Inventory Management",
        description: "Stay ahead of demand with multi-channel inventory tracking, real-time stock updates, and automatic restocking alerts.",
        img: "/img/inventory.svg"
      },
      {
        bg: "bg-gradient-radial-purple",
        title: "Comprehensive Business Analytics",
        description: "Make informed decisions with in-depth analytics, visualized trends, and performance KPIs for every aspect of your business.",
        img: "/img/reports.svg"
      },
    ];
  
    return (
      <div className="py-[120px] flex justify-center items-center">
        <div className="w-[86%] grid gap-[60px]">
          {/* heading */}
          <div className="grid gap-3 leading-extra-snug text-center max-w-[800px] mx-auto">
            <h2 className="font-medium text-2xl leading-extra-snug">
              Explore Our Key Services
            </h2>
            <p>Discover how Centra’s suite of services ranging from CRM to inventory management helps businesses streamline operations, optimize customer interactions, and unlock growth opportunities.</p>
          </div>
  
          {/* slide */}
          <div className="overflow-auto no-scrollbar">
            <div className="flex gap-5 w-max slide-track">
              {keyServices.map((card, index) => (
                <KeyServiceCard
                  key={index}
                  bg={card.bg}
                  title={card.title}
                  description={card.description}
                  img={card.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  
  interface KeyServiceCardProps {
    bg: string;
    title: string;
    description: string;
    img: string;
  }
  
  const KeyServiceCard = ({ bg, title, description, img }: KeyServiceCardProps) => {
    return (
      <div className={`${bg} rounded-xl pt-8 px-5 w-fit grid gap-12`}>
        <div className="grid gap-6 leading-extra-snug max-w-[350px]">
          <div className="grid gap-3 leading-extra-snug">
            <h3 className="text-xl text-[#212121] font-medium">{title}</h3>
            <p className="text-[#474747]">{description}</p>
          </div>
          <span className="underline text-primary text-sm cursor-pointer w-fit">Explore</span>
        </div>
        <Image src={img} alt="" width={314.18} height={240} className="px-[10px] mx-auto" />
      </div>
    )
  }