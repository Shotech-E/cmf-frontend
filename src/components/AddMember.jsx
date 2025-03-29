import React, { useState } from "react";

import Navbar from "./Navbar";

const AddMember = () => {
  const [maritalStatus, setMaritalStatus] = useState("");
  const [marriageDate, setMarriageDate] = useState("");

  const handleStatusChange = (e) => {
    setMaritalStatus(e.target.value);
    // Clear marriage date when status changes
    if (e.target.value !== "married") {
      setMarriageDate("");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="bg-gray-400 text-black py-12">
        {/* <h1>Add New Member</h1> */}
        <div className="py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
              <div className="max-w-md mx-auto">
                <div className="flex items-center space-x-5">
                  <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                    cmf
                  </div>
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                    <h2 className="leading-relaxed">Add New Member</h2>
                    <p className="text-sm text-gray-500 font-normal leading-relaxed">
                      Fill in the details below to sdd a new member to the
                      church
                    </p>
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="flex flex-col">
                      <label className="leading-loose">Full Name</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Surname, First Name, Other Names"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                      <div className="flex flex-col w-full">
                        <label className="leading-loose">Date of Birth</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="date"
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          />
                          <div className="absolute left-3 top-2">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Event Subtitle</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Optional"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">
                        Residential Address
                      </label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Number, Street, Suburb, City"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">Phone Number</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="08000000000"
                      />
                    </div>
                    {/*  */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Marital Status
                      </label>
                      <div className="flex items-center space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                            name="maritalStatus"
                            value="single"
                            checked={maritalStatus === "single"}
                            onChange={handleStatusChange}
                          />
                          <span className="ml-2 text-gray-700">Single</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                            name="maritalStatus"
                            value="married"
                            checked={maritalStatus === "married"}
                            onChange={handleStatusChange}
                          />
                          <span className="ml-2 text-gray-700">Married</span>
                        </label>
                      </div>
                    </div>
                    {/* Marriage Date (Conditional) */}
                    {maritalStatus === "married" && (
                      <div className="space-y-2">
                        <label
                          htmlFor="marriageDate"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Marriage Date
                        </label>
                        <input
                          type="date"
                          id="marriageDate"
                          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={marriageDate}
                          onChange={(e) => setMarriageDate(e.target.value)}
                          required
                        />
                      </div>
                    )}

                    <div className="flex flex-col">
                      <label className="leading-loose">Email</label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="abc@cd.com"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                      <div className="flex flex-col w-full">
                        <label className="leading-loose">Date Married</label>
                        <div className="relative focus-within:text-gray-600 text-gray-400">
                          <input
                            type="date"
                            className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          />
                          <div className="absolute left-3 top-2">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">
                        Society Belonged to
                      </label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Optional"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="leading-loose">
                        Church Activity Group
                      </label>
                      <input
                        type="text"
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Optional"
                      />
                    </div>
                  </div>
                  <div className="pt-4 items-center space-x-4">
                    <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none hover:bg-gray-100 transition-colors"></button>
                    <button className="bg-gray-400 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-gray-600 transition-colors">
                      Add Member
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Navbar />
    </div>
  );
};

export default AddMember;
