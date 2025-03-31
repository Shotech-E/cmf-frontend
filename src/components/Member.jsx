import React from "react";
import Navbar from "./Navbar";

const Member = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4 py-26">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 mx-auto">
            <div className="panel bg-white rounded-lg shadow-md">
              <div className="panel-heading p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-bold">
                      Data <span className="text-gray-600">List</span>
                    </h4>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
                    <input
                      type="text"
                      className="form-control px-3 py-2 border rounded-md"
                      placeholder="Search"
                    />
                    <button
                      className="btn btn-default p-2 bg-gray-100 rounded-md hover:bg-gray-200"
                      title="Reload"
                    >
                      <i className="ri-refresh-line"></i>
                    </button>
                    <button
                      className="btn btn-default p-2 bg-gray-100 rounded-md hover:bg-gray-200"
                      title="Pdf"
                    >
                      <i className="ri-file-pdf-line"></i>
                    </button>
                    <button
                      className="btn btn-default p-2 bg-gray-100 rounded-md hover:bg-gray-200"
                      title="Excel"
                    >
                      <i className="ri-file-excel-line"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="panel-body overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="p-3 text-left">S/N</th>
                      <th className="p-3 text-left">Name</th>
                      <th className="p-3 text-left">D.O.B.</th>
                      <th className="p-3 text-left">R/Address</th>
                      <th className="p-3 text-left">Phone No</th>
                      <th className="p-3 text-left">M/Status</th>
                      <th className="p-3 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">1</td>
                      <td className="p-3">Hammed Tayo Ogundele</td>
                      <td className="p-3">May 26 2013</td>
                      <td className="p-3">1, Ogundele Street, Ikeja, Lagos</td>
                      <td className="p-3">08012345678</td>
                      <td className="p-3">Married</td>
                      <td className="p-3">
                        <ul className="flex space-x-2">
                          <li>
                            <a
                              href="#"
                              data-tip="edit"
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <i className="ri-edit-2-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="view"
                              className="text-yellow-500 hover:text-yellow-700"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="delete"
                              className="text-red-500 hover:text-red-700"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">2</td>
                      <td className="p-3">Hammed Tayo Ogundele</td>
                      <td className="p-3">May 26 2013</td>
                      <td className="p-3">1, Ogundele Street, Ikeja, Lagos</td>
                      <td className="p-3">08012345678</td>
                      <td className="p-3">Married</td>
                      <td className="p-3">
                        <ul className="flex space-x-2">
                          <li>
                            <a
                              href="#"
                              data-tip="edit"
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <i className="ri-edit-2-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="view"
                              className="text-yellow-500 hover:text-yellow-700"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="delete"
                              className="text-red-500 hover:text-red-700"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">3</td>
                      <td className="p-3">Hammed Tayo Ogundele</td>
                      <td className="p-3">May 26 2013</td>
                      <td className="p-3">1, Ogundele Street, Ikeja, Lagos</td>
                      <td className="p-3">08012345678</td>
                      <td className="p-3">Married</td>
                      <td className="p-3">
                        <ul className="flex space-x-2">
                          <li>
                            <a
                              href="#"
                              data-tip="edit"
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <i className="ri-edit-2-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="view"
                              className="text-yellow-500 hover:text-yellow-700"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="delete"
                              className="text-red-500 hover:text-red-700"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">4</td>
                      <td className="p-3">Hammed Tayo Ogundele</td>
                      <td className="p-3">May 26 2013</td>
                      <td className="p-3">1, Ogundele Street, Ikeja, Lagos</td>
                      <td className="p-3">08012345678</td>
                      <td className="p-3">Married</td>
                      <td className="p-3">
                        <ul className="flex space-x-2">
                          <li>
                            <a
                              href="#"
                              data-tip="edit"
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <i className="ri-edit-2-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="view"
                              className="text-yellow-500 hover:text-yellow-700"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="delete"
                              className="text-red-500 hover:text-red-700"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">5</td>
                      <td className="p-3">Hammed Tayo Ogundele</td>
                      <td className="p-3">May 26 2013</td>
                      <td className="p-3">1, Ogundele Street, Ikeja, Lagos</td>
                      <td className="p-3">08012345678</td>
                      <td className="p-3">Married</td>
                      <td className="p-3">
                        <ul className="flex space-x-2">
                          <li>
                            <a
                              href="#"
                              data-tip="edit"
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <i className="ri-edit-2-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="view"
                              className="text-yellow-500 hover:text-yellow-700"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="delete"
                              className="text-red-500 hover:text-red-700"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">6</td>
                      <td className="p-3">Hammed Tayo Ogundele</td>
                      <td className="p-3">May 26 2013</td>
                      <td className="p-3">1, Ogundele Street, Ikeja, Lagos</td>
                      <td className="p-3">08012345678</td>
                      <td className="p-3">Married</td>
                      <td className="p-3">
                        <ul className="flex space-x-2">
                          <li>
                            <a
                              href="#"
                              data-tip="edit"
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <i className="ri-edit-2-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="view"
                              className="text-yellow-500 hover:text-yellow-700"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="delete"
                              className="text-red-500 hover:text-red-700"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">7</td>
                      <td className="p-3">Hammed Tayo Ogundele</td>
                      <td className="p-3">May 26 2013</td>
                      <td className="p-3">1, Ogundele Street, Ikeja, Lagos</td>
                      <td className="p-3">08012345678</td>
                      <td className="p-3">Married</td>
                      <td className="p-3">
                        <ul className="flex space-x-2">
                          <li>
                            <a
                              href="#"
                              data-tip="edit"
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <i className="ri-edit-2-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="view"
                              className="text-yellow-500 hover:text-yellow-700"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="delete"
                              className="text-red-500 hover:text-red-700"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">8</td>
                      <td className="p-3">Hammed Tayo Ogundele</td>
                      <td className="p-3">May 26 2013</td>
                      <td className="p-3">1, Ogundele Street, Ikeja, Lagos</td>
                      <td className="p-3">08012345678</td>
                      <td className="p-3">Married</td>
                      <td className="p-3">
                        <ul className="flex space-x-2">
                          <li>
                            <a
                              href="#"
                              data-tip="edit"
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <i className="ri-edit-2-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="view"
                              className="text-yellow-500 hover:text-yellow-700"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="delete"
                              className="text-red-500 hover:text-red-700"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">9</td>
                      <td className="p-3">Hammed Tayo Ogundele</td>
                      <td className="p-3">May 26 2013</td>
                      <td className="p-3">1, Ogundele Street, Ikeja, Lagos</td>
                      <td className="p-3">08012345678</td>
                      <td className="p-3">Married</td>
                      <td className="p-3">
                        <ul className="flex space-x-2">
                          <li>
                            <a
                              href="#"
                              data-tip="edit"
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <i className="ri-edit-2-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="view"
                              className="text-yellow-500 hover:text-yellow-700"
                            >
                              <i className="ri-eye-line"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-tip="delete"
                              className="text-red-500 hover:text-red-700"
                            >
                              <i className="ri-delete-bin-line"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="panel-footer p-4 border-t">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
