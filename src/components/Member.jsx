import React from "react";
import Navbar from "./Navbar";

const Member = () => {
  return (
    <div>
      <Navbar />
      <section className="justify-center h-screen py-15 border-amber-200">
        {/* component */}
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <div className="p-6 overflow-scroll px-0">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                      Name
                    </p>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                      Date of Birth
                    </p>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                      R. Address
                    </p>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                      Phone No
                    </p>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                      Married Status
                    </p>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70 text-center">
                      Actions
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                        Hammed Tayo Ogundele
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      May 26 2013
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      1, Ogundele Street, Ikeja, Lagos
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      08012345678
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      Married
                    </p>
                  </td>

                  <td className="p-4 border-b border-gray-50">
                    <button>
                      <i className="ri-edit-line px-2 hover:text-green-500"></i>
                      <i className="ri-eye-line px-3 hover:text-yellow-500"></i>
                      <i className="ri-delete-bin-6-line px-3 hover:text-red-500"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                        Hammed Tayo Ogundele
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      May 26 2013
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      1, Ogundele Street, Ikeja, Lagos
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      08012345678
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      Married
                    </p>
                  </td>

                  <td className="p-4 border-b border-gray-50">
                    <button>
                      <i className="ri-edit-line px-2 hover:text-green-500"></i>
                      <i className="ri-eye-line px-3 hover:text-yellow-500"></i>
                      <i className="ri-delete-bin-6-line px-3 hover:text-red-500"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                        Hammed Tayo Ogundele
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      May 26 2013
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      1, Ogundele Street, Ikeja, Lagos
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      08012345678
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      Married
                    </p>
                  </td>

                  <td className="p-4 border-b border-gray-50">
                    <button>
                      <i className="ri-edit-line px-2 hover:text-green-500"></i>
                      <i className="ri-eye-line px-3 hover:text-yellow-500"></i>
                      <i className="ri-delete-bin-6-line px-3 hover:text-red-500"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                        Hammed Tayo Ogundele
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      May 26 2013
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      1, Ogundele Street, Ikeja, Lagos
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      08012345678
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      Married
                    </p>
                  </td>

                  <td className="p-4 border-b border-gray-50">
                    <button>
                      <i className="ri-edit-line px-2 hover:text-green-500"></i>
                      <i className="ri-eye-line px-3 hover:text-yellow-500"></i>
                      <i className="ri-delete-bin-6-line px-3 hover:text-red-500"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                        Hammed Tayo Ogundele
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      May 26 2013
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      1, Ogundele Street, Ikeja, Lagos
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      08012345678
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      Married
                    </p>
                  </td>

                  <td className="p-4 border-b border-gray-50">
                    <button>
                      <i className="ri-edit-line px-2 hover:text-green-500"></i>
                      <i className="ri-eye-line px-3 hover:text-yellow-500"></i>
                      <i className="ri-delete-bin-6-line px-3 hover:text-red-500"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                        Hammed Tayo Ogundele
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      May 26 2013
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      1, Ogundele Street, Ikeja, Lagos
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      08012345678
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      Married
                    </p>
                  </td>

                  <td className="p-4 border-b border-gray-50">
                    <button>
                      <i className="ri-edit-line px-2 hover:text-green-500"></i>
                      <i className="ri-eye-line px-3 hover:text-yellow-500"></i>
                      <i className="ri-delete-bin-6-line px-3 hover:text-red-500"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                        Hammed Tayo Ogundele
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      May 26 2013
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      1, Ogundele Street, Ikeja, Lagos
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      08012345678
                    </p>
                  </td>
                  <td className="p-4 border-b border-gray-50">
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                      Married
                    </p>
                  </td>

                  <td className="p-4 border-b border-gray-50">
                    <button>
                      <i className="ri-edit-line px-2 hover:text-green-500"></i>
                      <i className="ri-eye-line px-3 hover:text-yellow-500"></i>
                      <i className="ri-delete-bin-6-line px-3 hover:text-red-500"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Member;
