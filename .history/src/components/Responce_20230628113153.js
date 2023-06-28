import React, { useEffect, useState } from "react";
import UpdateModal from "./UpdateModal";
import Spinner from "./Spinner";

const Responce = () => {
  
  const API = "https://studentbackend-production-b08e.up.railway.app/api/studentRoutes/students";
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [student, setstudent] = useState([]);
  const [loading, setLoading] = useState(true);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const fetchApiData = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setstudent(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  const handleUpdate = async (updatedStudentData) => {
    try {
      const response = await fetch(
        `https://studentbackend-production-b08e.up.railway.app/api/studentRoutes/updatestudent/${updatedStudentData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedStudentData),
        }
      );

      if (response.ok) {
        const updatedStudents = students.map((student) => {
          if (student._id === updatedStudentData._id) {
            return { ...student, ...updatedStudentData };
          }
          return student;
        });
        fetchApiData(API);
        setStudents(updatedStudents);
        setSelectedStudent(updatedStudentData);
      } else {
        throw new Error("Failed to update student details");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await fetch(
        `https://studentbackend-production-b08e.up.railway.app/api/studentRoutes/deletstudent/${id}`,
        {
          method: "DELETE",
        }
      );
      setstudent(student.filter((student) => student._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div
        className="bg-scroll bg-cover "
        style={{ backgroundImage: `url("/bg.jpg")` }}
      >
        <div className="h-10  font-serif backdrop-sepia-0 bg-white/30   backdrop-blur-sm drop-shadow-xl text-black text-center font-bold text-3xl">
          Responces
        </div>
        <hr />
        <div class="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {student.map((items) => (
            <div
              className="m-5 p-5 text-center backdrop-sepia-0 bg-white/30   backdrop-blur-sm drop-shadow-xl rounded"
              key={items._id}
            >
              <div>
                <span className=" font-medium font-mono">Name:</span>{" "}
                {items.name}
              </div>
              <div>
                <span className=" font-medium font-mono">Email:</span>{" "}
                {items.email}
              </div>
              <div>
                <span className=" font-medium font-mono">Phone:</span>{" "}
                {items.phone}
              </div>
              <div>
                <span className=" font-medium font-mono">Subject:</span>{" "}
                {items.subject}
              </div>
              <div className="pb-2">
                <span className=" font-medium font-mono">Training Mode:</span>{" "}
                {items.trainingMode}
              </div>
              <hr className="" />
              <div className="flex justify-between">
                <div>
                  <button
                    onClick={() => {
                      setSelectedStudent(items);
                      openModal();
                    }}
                    className="m-2 p-1 px-3 backdrop-sepia-0 bg-teal-200/50 font-serif font-semibold hover:bg-teal-400/50 backdrop-blur-sm drop-shadow-xl "
                  >
                    Update Details
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => deleteStudent(items._id)}
                    className="m-2 p-1 px-3 backdrop-sepia-0 bg-red-400/50 font-serif font-semibold hover:bg-red-700/100 backdrop-blur-sm drop-shadow-xl  "
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
      {isModalOpen && (
        <UpdateModal
          selectedStudent={selectedStudent}
          onClose={closeModal}
          onUpdate={handleUpdate}
        />
      )}
      {loading && <Spinner/>}
    </div>
  );
};

export default Responce;
