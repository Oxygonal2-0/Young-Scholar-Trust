const db = require("../config/firebase");
const contactUsref = db.collection("contactus");

modules.exports = {
  addContactUsmessage: async (req, res, next) => {
    try {
      console.log(req.body);

      const { name, email, country, state, message } = req.body;

      if (!name || !email || !country || !state || !message) {
        return res.status(400).json({
          success: false,
          message: "Probably you have missed certain fields",
        });
      }

      const newMessage = {
        name,
        email,
        country,
        state,
        message,
      };

      await contactUsref.add(newMessage);

      return res.status(200).json({
        success: true,
        message: "new message registered successfully",
        response: newMessage,
      });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  getContactUsmessage: async (req, res, next) => {
    try {
      const messages = [];
      const contactsSnapshot = await contactUsref.get();
      contactsSnapshot.forEach((doc) => {
        messages.push({ id: doc.id, ...doc.data() });
      });
      return res.status(200).json({ success: true, messages });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  deleteContactUsmessage: async (req, res, next) => {
    try {
      const messageID = req.params.messageID;
      if (!messageID) {
        return res
          .status(400)
          .json({ success: false, message: "message ID is required" });
      }

      const message = await contactUsref.doc(messageID).get();
      if (!message.exists) {
        return res
          .status(400)
          .json({ success: false, message: "Mentor not found" });
      }

      await contactUsref.doc(messageID).delete();

      return res
        .status(200)
        .json({ success: true, message: "Message deleted successfully" });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },
};
