const db = require("../config/firebase");
const studentRef = db.collection("students");

module.exports = {
  addStudent: async (req, res, next) => {
    try {
      const {
        Full_name,
        Dob,
        Email,
        Mobile_number,
        Gender,
        Degree,
        Roll_no,
        Branch,
        Year_of_study,
        Father_Mother_name,
        Parent_occupation,
        Ssc_passing_year,
        Ssc_passing_percentage,
        Ssc_place,
        Hsc_passing_year,
        Hsc_passing_percentage,
        Hsc_place,
        First_year_passing_year,
        First_year_passing_percentage,
        Place,
        Ssc_marksheet,
        Hsc_marksheet,
        First_year_marksheet,
        Profile_photo,
        Signature,
        Income_certificate,
        Condition_acceptance,
      } = req.body;

      if (
        !Full_name ||
        !Dob ||
        !Email ||
        !Mobile_number ||
        !Gender ||
        !Degree ||
        !Roll_no ||
        !Branch ||
        !Year_of_study ||
        !Father_Mother_name ||
        !Parent_occupation ||
        !Ssc_passing_year ||
        !Ssc_passing_percentage ||
        !Ssc_place ||
        !Hsc_passing_year ||
        !Hsc_passing_percentage ||
        !Hsc_place ||
        !First_year_passing_year ||
        !First_year_passing_percentage ||
        !Place ||
        !Ssc_marksheet ||
        !Hsc_marksheet ||
        !First_year_marksheet ||
        !Profile_photo ||
        !Signature ||
        !Income_certificate ||
        !Condition_acceptance
      ) {
        return res.status(400).json({
          success: false,
          message: "Probably you have missed certain fields",
        });
      }

      const isStudentExist = await studentRef.where("Email", "==", Email).get();

      if (!isStudentExist.empty) {
        return res
          .status(400)
          .json({ success: false, message: "Student already exists" });
      }

      const newStudent = {
        Full_name,
        Dob,
        Email,
        Mobile_number,
        Gender,
        Degree,
        Roll_no,
        Branch,
        Year_of_study,
        Father_Mother_name,
        Parent_occupation,
        Ssc_passing_year,
        Ssc_passing_percentage,
        Ssc_place,
        Hsc_passing_year,
        Hsc_passing_percentage,
        Hsc_place,
        First_year_passing_year,
        First_year_passing_percentage,
        Place,
        Ssc_marksheet,
        Hsc_marksheet,
        First_year_marksheet,
        Profile_photo,
        Signature,
        Income_certificate,
        Condition_acceptance,
        createdAt: new Date().toISOString(),
      };

      const addedStudent = await studentRef.add(newStudent);
      const student = await addedStudent.get();

      return res.status(201).json({
        success: true,
        message: "Student added successfully",
        student,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to add student" });
    }
  },

  getStudent: async (req, res, next) => {
    try {
      const studentId = req.params.id;
      const student = await studentRef.doc(studentId).get();

      if (!student.exists) {
        return res.status(400).json({
          success: false,
          message: "Student not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: student.data(),
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error getting student data",
        error: error.message,
      });
    }
  },
  getStudents: async (req, res, next) => {
    try {
      const students = await studentRef.get();
      const studentsData = [];
      students.forEach((student) => {
        studentsData.push({
          id: student.id,
          data: student.data(),
        });
      });
      return res.status(200).json({
        success: true,
        studentsData,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to retrieve students",
        error,
      });
    }
  },

  updateStudent: async (req, res, next) => {
    try {
      const { studentId } = req.params;
      const student = await studentRef.get();
      if (!student.exists) {
        return res
          .status(404)
          .json({ success: false, message: "Student not found" });
      }

      const {
        Full_name,
        Dob,
        Email,
        Mobile_number,
        Gender,
        Degree,
        Roll_no,
        Branch,
        Year_of_study,
        Father_Mother_name,
        Parent_occupation,
        Ssc_passing_year,
        Ssc_passing_percentage,
        Ssc_place,
        Hsc_passing_year,
        Hsc_passing_percentage,
        Hsc_place,
        First_year_passing_year,
        First_year_passing_percentage,
        Place,
        Ssc_marksheet,
        Hsc_marksheet,
        First_year_marksheet,
        Profile_photo,
        Signature,
        Income_certificate,
        Condition_acceptance,
      } = req.body;

      const updatedStudent = {
        Full_name,
        Dob,
        Email,
        Mobile_number,
        Gender,
        Degree,
        Roll_no,
        Branch,
        Year_of_study,
        Father_Mother_name,
        Parent_occupation,
        Ssc_passing_year,
        Ssc_passing_percentage,
        Ssc_place,
        Hsc_passing_year,
        Hsc_passing_percentage,
        Hsc_place,
        First_year_passing_year,
        First_year_passing_percentage,
        Place,
        Ssc_marksheet,
        Hsc_marksheet,
        First_year_marksheet,
        Profile_photo,
        Signature,
        Income_certificate,
        Condition_acceptance,
      };

      await studentRef.update(updatedStudent);

      return res.status(200).json({
        success: true,
        message: "Student updated successfully",
      });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Something went wrong" });
    }
  },
  deleteStudent: async (req, res, next) => {
    try {
      const studentId = req.params.studentId;
      if (!studentId) {
        return res
          .status(400)
          .json({ success: false, message: "Student Id is required" });
      }
      const studentDoc = await studentRef.doc(studentId).get();
      if (!studentDoc.exists) {
        return res
          .status(404)
          .json({ success: false, message: "Student not found" });
      }

      await studentDoc.ref.delete();
      return res
        .status(200)
        .json({ success: true, message: "Student deleted successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Error deleting student" });
    }
  },
};
