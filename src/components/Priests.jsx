import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Priests = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="bg-gray-400 text-black py-20">
        <Link
          to="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          rel="stylesheet"
        />

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Card 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="card user-card bg-white rounded-lg shadow-md overflow-hidden">
                <div className="card-header bg-gray-200 p-4">
                  <h5 className="text-lg font-semibold">Profile</h5>
                </div>
                <div className="card-block p-6">
                  <div className="user-image flex justify-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      className="rounded-full w-24 h-24 object-cover"
                      alt="User-Profile"
                    />
                  </div>
                  <h6 className="font-semibold text-center mt-6 mb-2">
                    Alessa Robert
                  </h6>
                  <p className="text-gray-600 text-center text-sm">
                    Active | Male | Born 23.05.1992
                  </p>
                  <hr className="my-4" />
                  <p className="text-gray-600 text-sm">Activity Level: 87%</p>
                  <ul className="flex mt-2 mb-4">
                    <li className="w-1/5 h-1 bg-blue-500 mr-1"></li>
                    <li className="w-1/5 h-1 bg-blue-500 mr-1"></li>
                    <li className="w-1/5 h-1 bg-blue-500 mr-1"></li>
                    <li className="w-1/5 h-1 bg-gray-300 mr-1"></li>
                    <li className="w-1/5 h-1 bg-gray-300"></li>
                  </ul>
                  <div className="bg-blue-100 rounded-lg p-4 mt-4">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <i className="fa fa-comment text-blue-600"></i>
                        <p className="text-sm">1256</p>
                      </div>
                      <div className="text-center">
                        <i className="fa fa-user text-blue-600"></i>
                        <p className="text-sm">8562</p>
                      </div>
                      <div className="text-center">
                        <i className="fa fa-suitcase text-blue-600"></i>
                        <p className="text-sm">189</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <hr className="my-4" />
                  <div className="flex justify-center space-x-4">
                    <a href="#!" className="text-blue-600 hover:text-blue-800">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#!" className="text-blue-400 hover:text-blue-600">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-pink-500 hover:text-pink-700">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="card user-card bg-white rounded-lg shadow-md overflow-hidden">
                <div className="card-header bg-gray-200 p-4">
                  <h5 className="text-lg font-semibold">Profile</h5>
                </div>
                <div className="card-block p-6">
                  <div className="user-image flex justify-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      className="rounded-full w-24 h-24 object-cover"
                      alt="User-Profile"
                    />
                  </div>
                  <h6 className="font-semibold text-center mt-6 mb-2">
                    Alessa Robert
                  </h6>
                  <p className="text-gray-600 text-center text-sm">
                    Active | Male | Born 23.05.1992
                  </p>
                  <hr className="my-4" />
                  <p className="text-gray-600 text-sm">Activity Level: 87%</p>
                  <ul className="flex mt-2 mb-4">
                    <li className="w-1/5 h-1 bg-blue-500 mr-1"></li>
                    <li className="w-1/5 h-1 bg-blue-500 mr-1"></li>
                    <li className="w-1/5 h-1 bg-blue-500 mr-1"></li>
                    <li className="w-1/5 h-1 bg-gray-300 mr-1"></li>
                    <li className="w-1/5 h-1 bg-gray-300"></li>
                  </ul>
                  <div className="bg-green-100 rounded-lg p-4 mt-4">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <i className="fa fa-comment text-green-600"></i>
                        <p className="text-sm">1256</p>
                      </div>
                      <div className="text-center">
                        <i className="fa fa-user text-green-600"></i>
                        <p className="text-sm">8562</p>
                      </div>
                      <div className="text-center">
                        <i className="fa fa-suitcase text-green-600"></i>
                        <p className="text-sm">189</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <hr className="my-4" />
                  <div className="flex justify-center space-x-4">
                    <a href="#!" className="text-blue-600 hover:text-blue-800">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#!" className="text-blue-400 hover:text-blue-600">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-pink-500 hover:text-pink-700">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="card user-card bg-white rounded-lg shadow-md overflow-hidden">
                <div className="card-header bg-gray-200 p-4">
                  <h5 className="text-lg font-semibold">Profile</h5>
                </div>
                <div className="card-block p-6">
                  <div className="user-image flex justify-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      className="rounded-full w-24 h-24 object-cover"
                      alt="User-Profile"
                    />
                  </div>
                  <h6 className="font-semibold text-center mt-6 mb-2">
                    Alessa Robert
                  </h6>
                  <p className="text-gray-600 text-center text-sm">
                    Active | Male | Born 23.05.1992
                  </p>
                  <hr className="my-4" />
                  <p className="text-gray-600 text-sm">Activity Level: 87%</p>
                  <ul className="flex mt-2 mb-4">
                    <li className="w-1/5 h-1 bg-blue-500 mr-1"></li>
                    <li className="w-1/5 h-1 bg-blue-500 mr-1"></li>
                    <li className="w-1/5 h-1 bg-blue-500 mr-1"></li>
                    <li className="w-1/5 h-1 bg-gray-300 mr-1"></li>
                    <li className="w-1/5 h-1 bg-gray-300"></li>
                  </ul>
                  <div className="bg-yellow-100 rounded-lg p-4 mt-4">
                    <div className="flex justify-between">
                      <div className="text-center">
                        <i className="fa fa-comment text-yellow-600"></i>
                        <p className="text-sm">1256</p>
                      </div>
                      <div className="text-center">
                        <i className="fa fa-user text-yellow-600"></i>
                        <p className="text-sm">8562</p>
                      </div>
                      <div className="text-center">
                        <i className="fa fa-suitcase text-yellow-600"></i>
                        <p className="text-sm">189</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600 text-sm">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <hr className="my-4" />
                  <div className="flex justify-center space-x-4">
                    <a href="#!" className="text-blue-600 hover:text-blue-800">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#!" className="text-blue-400 hover:text-blue-600">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-pink-500 hover:text-pink-700">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Priests;
