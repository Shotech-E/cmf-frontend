import React from "react";
import Navbar from "./Navbar";
import cathedralImage from "../assets/cath_image.jpg";

const Home = () => {
  // Sample birthday data
  const birthdays = [
    { name: "Sarah Johnson", date: "May 5", role: "Marketing" },
    { name: "Michael Chen", date: "May 12", role: "Engineering" },
    { name: "Emma Wilson", date: "May 18", role: "Design" },
    { name: "David Brown", date: "May 22", role: "Sales" },
  ];

  // Fallback image in case URL fails
  const imageUrl =
    "https://images.unsplash.com/photo-1742855751015-5bda25456249?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Image Section with Floating Animation */}
      <div className="relative h-96 overflow-hidden bg-gray-200">
        {/* Image with multiple fallbacks */}
        <img
          src={cathedralImage || imageUrl}
          alt="Cathedral interior"
          className="w-full h-full object-cover animate-float duration-500 ease-in-out"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/1600x900?text=Image+Not+Available";
          }}
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-300 mb-4">
              Cathedral Membership Form
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Psalm 118:24 – "This is the day that the Lord has made; let us
              rejoice and be glad in it."
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Story Content */}
          <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-600 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-500">
              <p className="leading-6 text-justify">
                Founded in 2015, we began as a small team of passionate
                individuals with a shared vision to create meaningful
                connections. What started as a modest project has blossomed into
                a thriving community of over 10,000 members worldwide.
              </p>
              <p className="leading-6 text-justify">
                Our journey hasn't always been smooth, but through collaboration
                and perseverance, we've overcome every challenge. The secret to
                our success? Putting people first - both our team members and
                the communities we serve.
              </p>
              <p className="leading-6 text-justify">
                Today, we continue to grow while staying true to our original
                values: authenticity, inclusivity, and innovation. Every day
                brings new opportunities to make a difference in people's lives.
              </p>
            </div>
          </div>

          {/* Birthday Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-6">
              <h3 className="text-xl font-bold text-gray-600 mb-4 flex items-center">
                <span className="mr-2">🎉</span> May Birthday Celebrants
              </h3>
              <ul className="space-y-3">
                {birthdays.map((person, index) => (
                  <li
                    key={index}
                    className="flex items-start p-3 hover:bg-gray-50 rounded transition"
                  >
                    <div className="bg-gray-100 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      {person.date.split(" ")[1]}
                    </div>
                    <div>
                      <p className="font-medium">{person.name}</p>
                      <p className="text-sm text-gray-500">{person.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="mt-4 w-full py-2 bg-gray-400 hover:bg-gray-700 text-white rounded-md transition">
                View All Birthdays
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
