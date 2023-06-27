import React, { useState, useEffect } from "react";

const UpdateModal = ({ selectedStudent, onClose, onUpdate }) => {
    const [updatedStudent, setUpdatedStudent] = useState(selectedStudent);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdatedStudent((prevStudent) => ({
        ...prevStudent,
        [name]: value,
      }));
    };
    const handleTrainingModeChange = (e) => {
        const { value } = e.target;
        setUpdatedStudent((prevStudent) => ({
          ...prevStudent,
          trainingMode: value,
        }));
      };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`https://studentbackend-production-b08e.up.railway.app/api/studentRoutes/updatestudent/${updatedStudent._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedStudent),
        });
        if (response.ok) {
          onUpdate(updatedStudent);
          onClose();
        } else {
          throw new Error("Failed to update student details");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleClose = () => {
        onClose();
      };

    useEffect(() => {
      setUpdatedStudent(selectedStudent);
    }, [selectedStudent]);
  

  return (
    <div className="fixed h-screen backdrop-sepia-0 bg-black/30 font-serif font-semibold  backdrop-blur-sm drop-shadow-xl  inset-0 flex items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="bg-white px-10 py-5"
      >
        <div className="text-center text-xl font-serif font-semibold text-black p-2">
          updatedStudent Registration Form
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
              value={updatedStudent.name}
              onChange={handleChange}
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
              value={updatedStudent.email}
              onChange={handleChange}
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
              value={updatedStudent.phone}
              onChange={handleChange}
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
              value={updatedStudent.subject}
              required
              onChange={handleChange}
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
                checked={updatedStudent.trainingMode === "online"}
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
                checked={updatedStudent.trainingMode === "hybrid"}
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
                checked={updatedStudent.trainingMode === "offline"}
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
              className="m-5 p-3 px-5 backdrop-sepia-5 bg-slate-800/50 hover:bg-slate-800/30 backdrop-blur-sm drop-shadow-xl  "
            >
              Update
            </button>
          </div>
          <div>
            <button
              type="reset"
              onClick={handleClose}
              className="m-5 p-3 px-5 backdrop-sepia-0 bg-slate-800/50  hover:bg-slate-800/30 backdrop-blur-sm drop-shadow-xl  "
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
              </div>
  );
};

export default UpdateModal;
