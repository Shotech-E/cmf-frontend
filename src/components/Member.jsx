import { React, useEffect, useState } from "react";
import { useRef } from "react";
import { utils, writeFile } from "xlsx";
// import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { formatDate } from "../util/formateDate";

import {
  useGetMembersQuery,
  useDeleteMemberMutation,
  useEditProfileMutation,
} from "../auth/authApi";

import Navbar from "./Navbar";

const Member = () => {
  const tableRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: members = [],
    error: membersError,
    isLoading: isMembersLoading,
    refetch,
  } = useGetMembersQuery();

  // console.log(members);

  // Filter members based on search term
  const filteredMembers = members.filter((member) => {
    if (!searchTerm.trim()) return true;

    const searchTermLower = searchTerm.toLowerCase();
    const isSearchingForUnknown = searchTermLower === "unknown";

    const dateMatches = () => {
      if (!member.dateOfBirth) return isSearchingForUnknown;
      return formatDate(member.dateOfBirth)
        .toLowerCase()
        .includes(searchTermLower);
    };

    return (
      (member.name || "").toLowerCase().includes(searchTermLower) ||
      (member.email || "").toLowerCase().includes(searchTermLower) ||
      (member.phoneNumber || "").includes(searchTerm) ||
      (member.residentialAddress || "")
        .toLowerCase()
        .includes(searchTermLower) ||
      (member.occupation || "").toLowerCase().includes(searchTermLower) ||
      (member.maritalStatus || "").toLowerCase().includes(searchTermLower) ||
      dateMatches()
    );
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);

  // Pagination calculations
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntriesPaginated = filteredMembers.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );
  const totalPages = Math.ceil(filteredMembers.length / entriesPerPage);

  // Paginate function - ADD THIS
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Refresh handler
  const handleRefresh = () => {
    refetch();
  };

  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [isGeneratingExcel, setIsGeneratingExcel] = useState(false);

  // PDF Export handler
  const exportToPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      const input = tableRef.current;

      // Create a clone of the table with simplified styling
      const clone = input.cloneNode(true);
      clone.style.backgroundColor = "white";
      clone.style.color = "black";
      document.body.appendChild(clone);

      const canvas = await html2canvas(clone, {
        scale: 1,
        logging: false,
        backgroundColor: "#ffffff",
        ignoreElements: (el) => {
          // Ignore interactive elements
          return el.tagName === "BUTTON" || el.tagName === "A";
        },
      });

      document.body.removeChild(clone);

      const pdf = new jsPDF("p", "mm", "a4");
      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("members-list.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // Excel Export handler
  const exportToExcel = () => {
    setIsGeneratingExcel(true);
    try {
      const ws = utils.json_to_sheet(
        currentEntriesPaginated.map((member) => ({
          "S/N": currentEntriesPaginated.indexOf(member) + 1, // Fixed this line
          Name: member.name,
          "D.O.B.": formatDate(member?.dateOfBirth) || "Unknown",
          "R/Address": member.residentialAddress,
          "Phone No": member.phoneNumber,
          Email: member.email,
          "M/Status": member.maritalStatus,
          "M/Date": formatDate(member?.marriageDate) || "Not Married",
          Occupation: member.occupation,
          "O/Address": member.officeAddress,
          Society: member.society,
          Group: member.activityGroup,
        }))
      );
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "Members");
      writeFile(wb, "members.xlsx");
    } catch (error) {
      console.error("Error generating Excel:", error);
      alert("Failed to generate Excel file");
    } finally {
      setIsGeneratingExcel(false);
    }
  };

  const [deleteMember] = useDeleteMemberMutation();
  const handleDelete = async (id) => {
    try {
      const response = await deleteMember(id).unwrap();
      alert("Member deleted successfully!");
      refetch(response);
    } catch (error) {
      console.error("Failed to delete member", error);
    }
  };

  const [editingMemberId, setEditingMemberId] = useState(null);

  // When opening the modal for a specific member
  const handleEditClick = (memberId) => {
    setEditingMemberId(memberId);
    setIsModalOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    residentialAddress: "",
    phoneNumber: "",
    email: "",
    maritalStatus: "",
    marriageDate: "",
    occupation: "",
    officeAddress: "",
    society: "",
    activityGroup: "",
    memberId: "",
  });

  // const dispatch = useDispatch();
  const member = members?.find((member) => member._id === editingMemberId);
  // const member = members?.find((member) => member._id === member);
  const [
    editProfile,
    {
      isLoading: isProfileLoading,
      // isError: isProfileError,
      // // error: profileError,
      // isSuccess: isProfileSuccess,
    },
  ] = useEditProfileMutation();

  useEffect(() => {
    if (member) {
      setFormData({
        name: member?.name || "",
        dateOfBirth: member?.dateOfBirth || "",
        residentialAddress: member?.residentialAddress || "",
        phoneNumber: member?.phoneNumber || "",
        email: member?.email || "",
        maritalStatus: member?.maritalStatus || "",
        marriageDate: member?.marriageDate || "",
        occupation: member?.occupation || "",
        officeAddress: member?.officeAddress || "",
        society: member?.society || "",
        activityGroup: member?.activityGroup || "",
        memberId: member?._id || "",
      });
    }
  }, [member]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedMember = {
      name: formData.name,
      dateOfBirth: formData.dateOfBirth,
      residentialAddress: formData.residentialAddress,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      maritalStatus: formData.maritalStatus,
      marriageDate: formData.marriageDate,
      occupation: formData.occupation,
      officeAddress: formData.officeAddress,
      society: formData.society,
      activityGroup: formData.activityGroup,
      memberId: formData.memberId,
    };
    try {
      const response = await editProfile(updatedMember).unwrap();
      console.log(response);
      // dispatch(setMember(response.member));
      localStorage.setItem("member", JSON.stringify(response.member));
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile", error);
      alert("Failed to update profile. Please try again");
    }

    setIsModalOpen(false);
  };
  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4 py-26">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 mx-auto">
            <div className="panel bg-white rounded-lg shadow-md">
              <div className="panel-heading p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  {isMembersLoading && <div>Loading...</div>}
                  {membersError && <div>Error loading members data.</div>}
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-bold">
                      Data <span className="text-gray-600">List</span>
                    </h4>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
                    <input
                      type="text"
                      className="form-control px-3 py-2 border rounded-md"
                      placeholder="Search by name, email, phone, etc."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                      className="btn btn-default p-2 bg-gray-100 rounded-md hover:bg-gray-200"
                      title="Reload"
                      onClick={handleRefresh}
                      disabled={isMembersLoading}
                    >
                      {isMembersLoading ? (
                        <i className="ri-loader-4-line animate-spin"></i>
                      ) : (
                        <i className="ri-refresh-line"></i>
                      )}
                    </button>
                    <button
                      className="btn btn-default p-2 bg-gray-100 rounded-md hover:bg-gray-200"
                      title="Pdf"
                      onClick={exportToPDF}
                      disabled={isGeneratingPDF}
                    >
                      {isGeneratingPDF ? (
                        <i className="ri-loader-4-line animate-spin"></i>
                      ) : (
                        <i className="ri-file-pdf-line"></i>
                      )}
                    </button>
                    <button
                      className="btn btn-default p-2 bg-gray-100 rounded-md hover:bg-gray-200"
                      title="Excel"
                      onClick={exportToExcel}
                      disabled={isGeneratingExcel}
                    >
                      {isGeneratingExcel ? (
                        <i className="ri-loader-4-line animate-spin"></i>
                      ) : (
                        <i className="ri-file-excel-line"></i>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="panel-body overflow-x-auto">
                <table className="table w-full" ref={tableRef}>
                  <thead>
                    <tr className="border-b">
                      <th className="p-3 text-left">S/N</th>
                      <th className="p-3 text-left">Name</th>
                      <th className="p-3 text-left">D.O.B.</th>
                      <th className="p-3 text-left">R/Address</th>
                      <th className="p-3 text-left">Phone No</th>
                      <th className="p-3 text-left">Email</th>
                      <th className="p-3 text-left">M/Status</th>
                      <th className="p-3 text-left">M/Date</th>
                      <th className="p-3 text-left">Occupation</th>
                      <th className="p-3 text-left">O/Address</th>
                      <th className="p-3 text-left">Society</th>
                      <th className="p-3 text-left">Group</th>
                      <th className="p-3 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMembers &&
                      currentEntriesPaginated.map((member, index) => (
                        <tr className="border-b hover:bg-gray-50" key={index}>
                          <td className="p-3">{index + 1}</td>
                          <td className="p-3">{member.name}</td>
                          <td className="p-3">
                            {formatDate(member?.dateOfBirth) || "Unknown"}
                          </td>
                          <td className="p-3">{member.residentialAddress}</td>
                          <td className="p-3">{member.phoneNumber}</td>
                          <td className="p-3">{member.email}</td>
                          <td className="p-3">{member.maritalStatus}</td>
                          <td className="p-3">
                            {formatDate(member?.marriageDate) || "Not Married"}
                          </td>
                          <td className="p-3">{member.occupation}</td>
                          <td className="p-3">{member.officeAddress}</td>
                          <td className="p-3">{member.society}</td>
                          <td className="p-3">{member.activityGroup}</td>
                          <td className="p-3">
                            <ul className="flex space-x-2">
                              <li>
                                <button
                                  data-tip="edit"
                                  className="text-gray-500 hover:text-gray-700"
                                  onClick={() => {
                                    handleEditClick(member._id);
                                    setIsModalOpen(true);
                                  }}
                                >
                                  <i className="ri-edit-2-line"></i>
                                </button>{" "}
                              </li>
                              <li>
                                <a
                                  href="#"
                                  data-tip="delete"
                                  className="text-red-500 hover:text-red-700"
                                  onClick={() => handleDelete(member?._id)}
                                >
                                  <i className="ri-delete-bin-line"></i>
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {/* Edit Profile Modal */}
              {isModalOpen && (
                <div className="fixed z-20 inset-0 flex items-center justify-center p-4">
                  <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] flex flex-col">
                    {/* Modal Header */}
                    <div className="p-4 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Edit Profile</h3>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <i className="ri-close-line text-xl"></i>
                      </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className="overflow-y-auto p-6 flex-1">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Form fields (keep all your existing fields) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="mb-4">
                            <label
                              htmlFor="name"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData?.name}
                              onChange={handleChange}
                              className="w-full border border-gray-300 p-2 rounded-lg"
                            />
                          </div>

                          {/* Date of Birth */}
                          <div className="mb-4">
                            <label
                              htmlFor="dateOfBirth"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Date of Birth
                            </label>
                            <input
                              type="text"
                              id="dateOfBirth"
                              name="dateOfBirth"
                              value={formData?.dateOfBirth}
                              onChange={handleChange}
                              className="w-full border border-gray-300 p-2 rounded-lg"
                            />
                          </div>
                          {/* Residential Address */}
                          <div className="mb-4">
                            <label
                              htmlFor="residentialAddress"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Residential Address
                            </label>
                            <input
                              type="text"
                              id="residentialAddress"
                              name="residentialAddress"
                              value={formData?.residentialAddress}
                              onChange={handleChange}
                              className="w-full border border-gray-300 p-2 rounded-lg"
                            />
                          </div>

                          {/* Phone Number */}
                          <div className="mb-4">
                            <label
                              htmlFor="phoneNumber"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Phone Number
                            </label>
                            <input
                              type="text"
                              id="phoneNumber"
                              name="phoneNumber"
                              value={formData?.phoneNumber}
                              onChange={handleChange}
                              className="w-full border border-gray-300 p-2 rounded-lg"
                            />
                          </div>

                          {/* Email */}
                          <div className="mb-4">
                            <label
                              htmlFor="email"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Email
                            </label>
                            <input
                              type="text"
                              id="email"
                              name="email"
                              value={formData?.email}
                              onChange={handleChange}
                              className="w-full border border-gray-300 p-2 rounded-lg"
                            />
                          </div>
                          {/* Marital Status */}
                          <div className="mb-4">
                            <label
                              htmlFor="maritalStatus"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Marital Status
                            </label>
                            <input
                              type="text"
                              id="maritalStatus"
                              name="maritalStatus"
                              value={formData?.maritalStatus}
                              onChange={handleChange}
                              className="w-full border border-gray-300 p-2 rounded-lg"
                            />
                          </div>
                          {/* Marriage Date */}
                          <div className="mb-4">
                            <label
                              htmlFor="marriageDate"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Marriage Date
                            </label>
                            <input
                              type="text"
                              id="marriageDate"
                              name="marriageDate"
                              value={formData?.marriageDate}
                              onChange={handleChange}
                              className="w-full border border-gray-300 p-2 rounded-lg"
                            />
                          </div>
                          {/* Occupation */}
                          <div className="mb-4">
                            <label
                              htmlFor="occupation"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Occupation
                            </label>
                            <input
                              type="text"
                              id="occupation"
                              name="occupation"
                              value={formData?.occupation}
                              onChange={handleChange}
                              className="w-full border border-gray-300 p-2 rounded-lg"
                            />
                          </div>
                          {/* Office Address */}
                          <div className="mb-4">
                            <label
                              htmlFor="officeAddress"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Office Address
                            </label>
                            <input
                              type="text"
                              id="officeAddress"
                              name="officeAddress"
                              value={formData?.officeAddress}
                              onChange={handleChange}
                              className="w-full border border-gray-300 p-2 rounded-lg"
                            />
                          </div>
                          {/* Society */}
                          <div className="mb-4">
                            <label
                              htmlFor="society"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Society
                            </label>
                            <input
                              type="text"
                              id="society"
                              name="society"
                              value={formData?.society}
                              onChange={handleChange}
                              className="w-full border border-gray-300 p-2 rounded-lg"
                            />
                          </div>
                          {/* Activity Group */}
                          <div className="mb-4">
                            <label
                              htmlFor="activityGroup"
                              className="block text-gray-700 font-medium mb-2"
                            >
                              Activity Group
                            </label>
                            <input
                              type="text"
                              id="activityGroup"
                              name="activityGroup"
                              value={formData?.activityGroup}
                              onChange={handleChange}
                              className="w-full border border-gray-300 p-2 rounded-lg"
                            />
                          </div>
                          {/* Modal Footer */}
                        </div>
                        <div className="p-4 border-t sticky bottom-0 bg-white z-10 flex justify-end space-x-2">
                          <button
                            onClick={() => setIsModalOpen(false)}
                            className="px-4 py-2 rounded-lg bg-gray-400 text-gray-50 hover:text-gray-800"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            disabled={isProfileLoading}
                            className={`px-2 py-2 rounded-lg text-white ${
                              isProfileLoading
                                ? "bg-yellow-400"
                                : "bg-yellow-500 hover:bg-yellow-600"
                            }`}
                          >
                            {isProfileLoading ? "Saving..." : "Save Changes"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
              {/* <div className="panel-footer p-4 border-t">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-2 md:mb-0">
                    showing <b>5</b> out of <b>25</b> entries
                  </div>
                  <div>
                    <ul className="pagination flex space-x-1">
                      <li>
                        <a
                          href="#"
                          className="px-3 py-1 border rounded-md hover:bg-gray-100"
                        >
                          &lt;
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="px-3 py-1 border rounded-md bg-gray-500 text-white"
                        >
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="px-3 py-1 border rounded-md hover:bg-gray-100"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="px-3 py-1 border rounded-md hover:bg-gray-100"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="px-3 py-1 border rounded-md hover:bg-gray-100"
                        >
                          4
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="px-3 py-1 border rounded-md hover:bg-gray-100"
                        >
                          5
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="px-3 py-1 border rounded-md hover:bg-gray-100"
                        >
                          &gt;
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <div className="panel-footer p-4 border-t">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-2 md:mb-0">
                    showing{" "}
                    <b>
                      {indexOfFirstEntry + 1}-
                      {Math.min(indexOfLastEntry, filteredMembers.length)}
                    </b>{" "}
                    out of <b>{filteredMembers.length}</b> entries
                  </div>
                  <div>
                    <ul className="pagination flex space-x-1">
                      <li>
                        <button
                          onClick={() => paginate(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                          className="px-3 py-1 border rounded-md hover:bg-gray-100 disabled:opacity-50"
                        >
                          &lt;
                        </button>
                      </li>

                      {/* Show page numbers */}
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (number) => (
                          <li key={number}>
                            <button
                              onClick={() => paginate(number)}
                              className={`px-3 py-1 border rounded-md ${
                                currentPage === number
                                  ? "bg-gray-500 text-white"
                                  : "hover:bg-gray-100"
                              }`}
                            >
                              {number}
                            </button>
                          </li>
                        )
                      )}

                      <li>
                        <button
                          onClick={() =>
                            paginate(Math.min(totalPages, currentPage + 1))
                          }
                          disabled={currentPage === totalPages}
                          className="px-3 py-1 border rounded-md hover:bg-gray-100 disabled:opacity-50"
                        >
                          &gt;
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
