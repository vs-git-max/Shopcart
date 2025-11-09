import { contactItemData } from "@/hooks";
import { Mail, MapPin, Phone, Watch } from "lucide-react";

const FooterTop = () => {
  const data: contactItemData[] = [
    {
      title: "Visit us",
      subtitle: "Ngara, Nairobi, Kenya",
      icon: (
        <MapPin className="size-6 text-gray-600 group-hover:text-primary transition-colors" />
      ),
    },
    {
      title: "Call us",
      subtitle: "+254704172680",
      icon: (
        <Phone className="size-6 text-gray-600 group-hover:text-primary transition-colors" />
      ),
    },
    {
      title: "Working Hours",
      subtitle: "Mon - Sat 10:00AM - 7:00PM",
      icon: (
        <Watch className="size-6 text-gray-600 group-hover:text-primary transition-colors" />
      ),
    },
    {
      title: "Email Us",
      subtitle: "samchris12737@gmail.com",
      icon: (
        <Mail className="size-6 text-gray-600 group-hover:text-primary transition-colors" />
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {data?.map((item, index) => (
        <div
          className="group flex items-center gap-3 hover:bg-gray-50 p-4 transition-colors hoverEffect"
          key={index}
        >
          {item?.icon}
          <div className="">
            <h3 className="font-semibold text-gray-900 group-hover:text-black hoverEffect ">
              {item?.title}
            </h3>
            <p className="text-sm font-medium text-gray-600 group-hover:text-gray-900 hoverEffect mt-1">
              {item?.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
