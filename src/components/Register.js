import React, { useState } from "react";

const Register = () => {
  const [showModal, setshowModal] = useState();
  const [student, setstudent] = useState({
    name: "",
    email: "",
    phone: "",
    trainingMode: "",
    subject: "",
  });

  const handleTrainingModeChange = (e) => {
    const value = e.target.value;
    console.log("Selected training mode:", value);
    setstudent({ ...student, trainingMode: value });
  };

  const [trainingMode, setTrainingMode] = useState("");

  // const { name, email, phone, trainingMode, subject } = student;

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        "http://localhost:5000/api/studentRoutes/postresponce",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: student.name,
            email: student.email,
            phone: student.phone,
            subject: student.subject,
            trainingMode: student.trainingMode,
          }),
        }
      );
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        setshowModal(true);
        setstudent({
          name: "",
          email: "",
          phone: "",
          trainingMode: "",
          subject: "",
        });
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setstudent({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div
        className="flex justify-center lg:items-center h-screen bg-cover "
        style={{ backgroundImage: `url("/bg.jpg")` }}
      >
        <div className="backdrop-sepia-0 bg-white/30 backdrop-blur-sm drop-shadow-xl lg:-mt-5  rounded lg:w-1/3 sm:w-96 px-10 py-5 ">

        <form
          onSubmit={handleSubmit}
          className=""
        >
          
          <div className="text-center text-xl font-serif font-semibold text-black p-2">
            Student Registration Form
          </div>
          <hr />
          <div className="my-2">
            <div className="py-1">
              <label htmlFor="name">Name:</label>
            </div>
            <div>
              <input
                type="text"
                className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                name="name"
                id="name"
                value={student.name}
                onChange={onChange}
                placeholder="Enter Your Name"
                required
                />
            </div>
          </div>
          <div className="my-2">
            <div className="py-1">
              <label htmlFor="email">Email:</label>
            </div>
            <div>
              <input
                type="email"
                className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                name="email"
                id="email"
                value={student.email}
                onChange={onChange}
                placeholder="email@gmail.com"
                required
                />
            </div>
          </div>
          <div className="my-2">
            <div className="py-1">
              <label htmlFor="phone">Phone:</label>
            </div>
            <div>
              <input
                type="number"
                className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                name="phone"
                id="phone"
                value={student.phone}
                onChange={onChange}
                placeholder="+919111111111"
                required
              />
            </div>
          </div>
          <div className="my-2">
            <div className="py-1">
              <label htmlFor="subject">Subject</label>
            </div>
            <div>
              <select
                id="subject"
                name="subject"
                value={student.subject}
                required
                onChange={onChange}
                className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              >
                  <option value="">Select a subject</option>
                <option value="Java" className="bg-slate-400">
                  Java
                </option>
                <option value="ReactJs" className="bg-slate-300">
                  ReactJs
                </option>
                <option value="Angular" className="bg-slate-400">
                  Angular
                </option>
                <option value="JavaScript" className="bg-slate-300">
                  JavaScript
                </option>
                <option value="TypeScript" className="bg-slate-400">
                  TypeScript
                </option>
              </select>
            </div>
          </div>
          <div className="my-2">
            <div className="py-1">
              <label htmlFor="phone">Training Mode:</label>
            </div>
            <div className="flex">
              <div className="pr-5">
                <input
                  type="radio"
                  className="bg-gray-200 border-gray-200 rounded text-gray-700"
                  name="trainingMode"
                  id="online"
                  value="online"
                  checked={student.trainingMode === "online"}
                  onChange={handleTrainingModeChange}
                />
                <label htmlFor="online">Online</label>
              </div>
              <div className="pr-5">
                <input
                  type="radio"
                  className="bg-gray-200 border-gray-200 rounded text-gray-700"
                  name="trainingMode"
                  id="hybrid"
                  value="hybrid"
                  checked={student.trainingMode === "hybrid"}
                  onChange={handleTrainingModeChange}
                />
                <label htmlFor="hybrid">Hybrid</label>
              </div>
              <div className="pr-5">
                <input
                  type="radio"
                  className="bg-gray-200 border-gray-200 rounded text-gray-700"
                  name="trainingMode"
                  id="offline"
                  value="offline"
                  checked={student.trainingMode === "offline"}
                  onChange={handleTrainingModeChange}
                  />
                <label htmlFor="offline">Offline</label>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-between">
            <div>
              <button
                type="submit"
                className="m-5 p-3 px-5 backdrop-sepia-0 bg-white/50 font-serif font-semibold hover:bg-white/100 backdrop-blur-sm drop-shadow-xl  bg-white"
                >
                Submit
              </button>
            </div>
            <div>
              <button
                type="reset"
                className="m-5 p-3 px-5 backdrop-sepia-0 bg-white/50 font-serif font-semibold hover:bg-white/100 backdrop-blur-sm drop-shadow-xl  bg-white"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
              </div>
      </div>
      {showModal && (
        <div className="fixed h-screen backdrop-sepia-0 bg-black/30 font-serif font-semibold  backdrop-blur-sm drop-shadow-xl  inset-0 flex items-center justify-center">
            <div className="bg-slate-200 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Form Submitted</h2>
              <hr />
              <p>Your form has been submitted successfully!</p>
              <button
                className="m-5 p-3 px-5 backdrop-sepia-0 bg-black/50 font-serif font-semibold hover:bg-white/100 backdrop-blur-sm drop-shadow-xl rounded-tl-lg rounded-br-lg  bg-white"
                onClick={() => setshowModal(false)}
                >
                Close
              </button>
            </div>
          </div>
        
      )}
    </div>
  );
};

export default Register;
