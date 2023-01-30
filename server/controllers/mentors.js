const db = require("../config/firebase");
const mentorRef = db.collection("mentors");

modules.exports = {
  //add mentor
  addMentor: async (req, res, next) => {
    try {
      console.log(req.body);

      const { Name, Photo, Experience } = req.body;

      if (!Name || !Photo || !Experience) {
        return res.status(400).json({
          success: false,
          message: "Probably you have missed certain fields",
        });
      }

      const mentorRef = firebase.firestore().collection("mentors");

      const isMentorExist = await mentorRef.where("Email", "==", Email).get();

      if (!isMentorExist.empty) {
        return res
          .status(400)
          .json({ success: false, message: "Mentor already exists" });
      }

      const newMentor = {
        Name,
        Photo,
        Experience,
      };

      await mentorRef.add(newMentor);

      return res.status(200).json({
        success: true,
        message: "Mentor added successfully",
        response: newMentor,
      });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },
  getMentors: async (req, res, next) => {
    try {
      const mentors = [];
      const mentorsSnapshot = await mentorRef.get();
      mentorsSnapshot.forEach((doc) => {
        mentors.push({ id: doc.id, ...doc.data() });
      });
      return res.status(200).json({ success: true, mentors });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  updateMentor: async (req, res, next) => {
    try {
      const { id, Name, Photo, Experience } = req.body;
      if (!id || !Name || !Photo || !Experience) {
        return res.status(400).json({
          success: false,
          message: "Probably you have missed certain fields",
        });
      }

      const mentor = mentorRef.doc(id);
      const mentorSnapshot = await mentor.get();

      if (!mentorSnapshot.exists) {
        return res
          .status(400)
          .json({ success: false, message: "Mentor not found" });
      }

      await mentor.update({ Name, Photo, Experience });

      return res.status(200).json({
        success: true,
        message: "Mentor updated successfully",
        mentor: { id, Name, Photo, Experience },
      });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  deleteMentor: async (req, res, next) => {
    try {
      const mentorId = req.params.mentorId;
      if (!mentorId) {
        return res
          .status(400)
          .json({ success: false, message: "Mentor ID is required" });
      }

      const mentor = await mentorRef.doc(mentorId).get();
      if (!mentor.exists) {
        return res
          .status(400)
          .json({ success: false, message: "Mentor not found" });
      }

      await mentorRef.doc(mentorId).delete();

      return res
        .status(200)
        .json({ success: true, message: "Mentor deleted successfully" });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },
};
