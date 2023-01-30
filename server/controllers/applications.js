const db = require("../config/firebase");
const applicationRef = db.collection("applications");

modules.exports = {
  // Create a new application

  createApplication: async (req, res) => {
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
        Father_mother_name,
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

      await applicationRef.set({
        Full_name,
        Dob,
        Email,
        Mobile_number,
        Gender,
        Degree,
        Roll_no,
        Branch,
        Year_of_study,
        Father_mother_name,
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
        created_at: new Date(),
      });

      res.status(200).json({
        message: "Application added successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error adding application",
        error,
      });
    }
  },

  deleteApplication: async (req, res) => {
    try {
      const applicationId = req.params.id;

      const applicationvariable = applicationRef.doc(applicationId);
      await applicationvariable.delete();

      res.status(200).json({
        message: "Application deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: "Error deleting application",
        error,
      });
    }
  },

  getApplications: (req, res) => {
    applicationsRef
      .get()
      .then((snapshot) => {
        const applications = [];
        snapshot.forEach((doc) => {
          applications.push({ id: doc.id, ...doc.data() });
        });
        res.json(applications);
      })
      .catch((error) => {
        console.error("Error getting applications: ", error);
        res.status(500).send("Error getting applications");
      });
  },
};
