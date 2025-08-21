export default function GetStarted() {
  return (
    <section className="bg-red-50 py-10" id="get-started">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 rounded-lg shadow-sm">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Ready to start your job search?</h3>
          <p className="text-gray-600 text-sm">
            Create an account today and get access to thousands of job listings tailored to your skills and experience.
          </p>
        </div>
        <button className="bg-[#6D0B0B] text-white px-6 py-3 rounded-lg hover:bg-[#500808] transition cursor-pointer">
          Get Started
        </button>
      </div>
    </section>
  );
}
