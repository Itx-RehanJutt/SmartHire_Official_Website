import { Code, Palette, Layers, Bot } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "From frontend to backend experts, we connect companies with coding talent that builds impactful digital solutions.",
      icon: <Code className="w-10 h-10 text-[#6D0B0B]" />,
    },
    {
      title: "UI/UX Design",
      desc: "Creative professionals who design user-friendly, aesthetically pleasing, and functional digital products.",
      icon: <Palette className="w-10 h-10 text-[#6D0B0B]" />,
    },
    {
      title: "MERN Stack Development",
      desc: "Full-stack developers skilled in MongoDB, Express, React, and Node.js for modern app development.",
      icon: <Layers className="w-10 h-10 text-[#6D0B0B]" />,
    },
    {
      title: "AI & Automation Development",
      desc: "Innovators who can create intelligent, automated systems to optimize business operations.",
      icon: <Bot className="w-10 h-10 text-[#6D0B0B]" />,
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl  mb-4">Our Hiring Services</h2>
        <p className="text-gray-600 mb-12">
          We help companies discover the right talent across multiple industries. Our hiring process covers a wide range of roles, including:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition text-left cursor-pointer"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl text-[#6D0B0B] font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
