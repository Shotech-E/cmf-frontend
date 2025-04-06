import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import cathedralImage from "../assets/cath_image.jpg";
import { useGetMembersQuery } from "../auth/authApi";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Home = () => {
  const [birthdayView, setBirthdayView] = useState("current");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: members = [],
    error: membersError,
    isLoading: isMembersLoading,
  } = useGetMembersQuery();

  const [currentMonthBirthdays, setCurrentMonthBirthdays] = useState([]);
  const [allBirthdays, setAllBirthdays] = useState([]);
  const [currentMonthName, setCurrentMonthName] = useState("");

  useEffect(() => {
    if (!members.length) return;

    const currentMonth = new Date().getMonth();
    setCurrentMonthName(monthNames[currentMonth]);

    // Filter birthdays for current month
    const filteredCurrentMonth = members.filter((member) => {
      if (!member.dateOfBirth) return false;
      return new Date(member.dateOfBirth).getMonth() === currentMonth;
    });

    setCurrentMonthBirthdays(filteredCurrentMonth);
    setAllBirthdays(members.filter((member) => member.dateOfBirth));
  }, [members]);

  // Group birthdays by month for the modal view
  const birthdaysByMonth = monthNames.map((month) => ({
    month,
    birthdays: allBirthdays.filter(
      (member) =>
        new Date(member.dateOfBirth).getMonth() === monthNames.indexOf(month)
    ),
  }));

  const imageUrl =
    "https://images.unsplash.com/photo-1742855751015-5bda25456249?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Image Section */}
      <div className="relative h-96 overflow-hidden bg-gray-200">
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
                <span className="mr-2">🎉</span>
                {birthdayView === "current" ? currentMonthName : "All"} Birthday
                Celebrants
              </h3>

              {isMembersLoading ? (
                <p>Loading birthdays...</p>
              ) : membersError ? (
                <p>Error loading birthdays</p>
              ) : (
                <>
                  <ul className="space-y-3">
                    {(birthdayView === "current"
                      ? currentMonthBirthdays
                      : allBirthdays
                    ).map((member, index) => (
                      <li
                        key={index}
                        className="flex items-start p-3 hover:bg-gray-50 rounded transition"
                      >
                        <div className="bg-gray-100 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                          {new Date(member.dateOfBirth).getDate()}
                        </div>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-gray-500">
                            {member.occupation}
                          </p>
                        </div>
                      </li>
                    ))}
                    {(birthdayView === "current"
                      ? currentMonthBirthdays
                      : allBirthdays
                    ).length === 0 && (
                      <li className="p-3 text-gray-500">No birthdays</li>
                    )}
                  </ul>

                  <div className="flex space-x-2 mt-4">
                    <button
                      onClick={() =>
                        setBirthdayView(
                          birthdayView === "current" ? "all" : "current"
                        )
                      }
                      className="flex-1 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
                    >
                      {birthdayView === "current"
                        ? "View All Birthdays"
                        : "View Current Month"}
                    </button>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition"
                      title="Browse by month"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Birthday Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Browse Birthdays by Month</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                ✕
              </button>
            </div>
            <div className="space-y-6">
              {birthdaysByMonth.map(({ month, birthdays }) => (
                <div key={month}>
                  <h4 className="font-semibold text-lg mb-2 sticky top-0 bg-white py-1">
                    {month} ({birthdays.length})
                  </h4>
                  {birthdays.length > 0 ? (
                    <ul className="space-y-2">
                      {birthdays.map((member, index) => (
                        <li key={index} className="flex items-center py-1">
                          <span className="w-8 text-gray-500 font-medium">
                            {new Date(member.dateOfBirth).getDate()}
                          </span>
                          <span>{member.name}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400 text-sm">No birthdays</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
