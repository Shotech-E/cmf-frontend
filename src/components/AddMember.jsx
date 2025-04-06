import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useAddMemberMutation } from "../auth/authApi";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const AddMember = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [marriageDate, setMarriageDate] = useState("");
  const [occupation, setOccupation] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [society, setSociety] = useState("");
  const [activityGroup, setActivityGroup] = useState("");

  const [addMember, { isLoading }] = useAddMemberMutation();
  const navigate = useNavigate();

  const handleAddMember = async (e) => {
    e.preventDefault();
    const data = {
      name,
      dateOfBirth,
      residentialAddress,
      phoneNumber,
      email,
      maritalStatus,
      marriageDate,
      occupation,
      officeAddress,
      society,
      activityGroup,
    };

    try {
      await addMember(data).unwrap();
      alert("Member added successfully");
      navigate("/member");
    } catch (error) {
      setMessage("Failed to add member");
      console.error("Add member error:", error);
    }
  };

  const handleStatusChange = (e) => {
    setMaritalStatus(e.target.value);
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
                {message && <div className="text-red-500 mb-4">{message}</div>}
                <form onSubmit={handleAddMember}>
                  <div className="divide-y divide-gray-200">
                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div className="flex flex-col">
                        <label className="leading-loose">Name</label>
                        <input
                          type="text"
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Surname, First Name, Other Names"
                          name="name"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                        <div className="flex flex-col w-full">
                          <label className="leading-loose">Date of Birth</label>
                          <div className="relative focus-within:text-gray-600 text-gray-400">
                            <input
                              type="text"
                              className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              id="dateOfBirth"
                              name="dateOfBirth"
                              value={dateOfBirth}
                              onChange={(e) => setDateOfBirth(e.target.value)}
                              placeholder="June 12, 1996"
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
                          Residential Address
                        </label>
                        <input
                          type="text"
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Number, Street, Suburb, City"
                          id="residentialAddress"
                          name="residentialAddress"
                          value={residentialAddress}
                          onChange={(e) =>
                            setResidentialAddress(e.target.value)
                          }
                          required
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">Phone Number</label>
                        <input
                          type="text"
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="08000000000"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">Email</label>
                        <input
                          type="email"
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="abc@mail.com"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Marital Status
                        </label>
                        <div className="flex items-center space-x-4">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                              id="maritalStatus"
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
                          <div className="relative focus-within:text-gray-600 text-gray-400">
                            <input
                              type="text"
                              className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                              id="dateOfBirth"
                              name="dateOfBirth"
                              value={marriageDate}
                              onChange={(e) => setMarriageDate(e.target.value)}
                              placeholder="June 12, 1996"
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
                      )}
                      <div className="flex flex-col">
                        <label className="leading-loose">Occupation</label>
                        <input
                          type="text"
                          id="occupation"
                          name="occupation"
                          value={occupation}
                          onChange={(e) => setOccupation(e.target.value)}
                          required
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">Office Address</label>
                        <input
                          type="text"
                          id="officeAddress"
                          name="officeAddress"
                          value={officeAddress}
                          onChange={(e) => setOfficeAddress(e.target.value)}
                          required
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">
                          Society Belonged to
                        </label>
                        <input
                          type="text"
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder=""
                          name="society"
                          id="society"
                          value={society}
                          onChange={(e) => setSociety(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="leading-loose">
                          Church Activity Group
                        </label>
                        <input
                          type="text"
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder=""
                          name="activityGroup"
                          id="activityGroup"
                          value={activityGroup}
                          onChange={(e) => setActivityGroup(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="pt-4 items-center space-x-4">
                      <button
                        type="submit"
                        className="bg-gray-400 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-gray-600 transition-colors"
                        disabled={isLoading}
                      >
                        {isLoading ? "Adding..." : "Add Member"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMember;
