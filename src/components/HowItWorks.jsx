import { FileText, Settings, Smile, ThumbsUp } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload Your CV",
      desc: "Start by uploading your updated resume to highlight your qualifications.",
      icon: <FileText className="w-8 h-8 text-[#6D0B0B]" />,
    },
    {
      title: "Add Skills & Experience",
      desc: "Fill in your job description with your expertise and past experiences.",
      icon: <Settings className="w-8 h-8 text-[#6D0B0B]" />,
    },
    {
      title: "Face Matching",
      desc: "Upload a clear and professional picture for profile verification.",
      icon: <Smile className="w-8 h-8 text-[#6D0B0B]" />,
    },
    {
      title: "Interview Module",
      desc: "Answer personalized interview questions based on your qualifications.",
      icon: <ThumbsUp className="w-8 h-8 text-[#6D0B0B]" />,
    },
  ];

  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl mb-4">How Smart Hiring Works</h2>
        <p className="text-gray-600 mb-12 text-center">
          Our platform simplifies the hiring journey for candidates. Just follow four simple steps:
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition text-center cursor-pointer"
            >
            
              <div className="flex items-center justify-center w-16 h-16 mx-auto  bg-red-50">
                {step.icon}
              </div>

              
              <h3 className="font-semibold text-[#6D0B0B] text-lg mt-6 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
