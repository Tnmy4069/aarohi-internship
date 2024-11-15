import Image from "next/image";

export default function Home() {
   return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        I Started Working at Aarohi Software
      </h1>
      
      {/* Content Container */}
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6 md:p-10 w-full max-w-4xl">
        
        {/* Left Section: Info */}
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Info</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hi, I'm Tanmay Hirodkar. I’m thrilled to start my journey at Aarohi Software, where I’ll be leveraging my skills in software development and project management.
          </p>
          <ul className="space-y-2">
            <li><span className="font-semibold text-gray-800">Position :</span> Intern</li>
            <li><span className="font-semibold text-gray-800">Start Date:</span> 15th Nov 2024 (Today)</li>
            <li><span className="font-semibold text-gray-800">Skills:</span> Web Development, MERN Stack, HTML, CSS, JavaScript, PHP, MySQL, Node.js, React, Bootstrap, Tailwind</li>
            <li><span className="font-semibold text-gray-800">Educational Background:</span> B.Tech in Computer Science and Design at MET's Institute of Technology, affiliated with Dr. Babasaheb Ambedkar Technological University</li>
          </ul>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="w-99  border-2 border-gray-200 rounded overflow-hidden shadow-md">
            <Image
              src="/tanmay.png"  // Replace with the actual path to your image
              alt="Tanmay Hirodkar"
              width={500}
              height={256}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
