const db=require('../config/firebase');
const adminRef = db.collection("admins");

// GET ALL ADMINS



module.exports = {
 
    //add admin
    addAdmin: async (req, res, next) => {
        try {
          console.log(req.body);
      
          const { assigning_admin, Name, Email, Password } = req.body;
      
          if (!assigning_admin || !Name || !Email || !Password) {
            return res.status(400).json({
              success: false,
              message: "Probably you have missed certain fields",
            });
          }
      
          const isAdminExist = await adminRef
            .where("Email", "==", Email)
            .get();
          if (!isAdminExist.empty) {
            return res
              .status(400)
              .json({ success: false, message: "Admin already exists" });
          }
      
          const newAdmin = {
            assigning_admin,
            Name,
            Email,
            Password,
          };
      
          await adminRef.add(newAdmin);
      
          return res.status(200).json({
            success: true,
            message: "Admin registered successfully",
            response: newAdmin,
          });
        } catch (error) {
          return res.status(400).json({ success: false, message: error.message });
        }
      },

    //get all admins
    getAllAdmins: async (req, res, next) => {
        try {
            const admins = [];
            const snapshot = await adminRef.get();
            snapshot.forEach((doc) => {
                admins.push(doc.data());
            });
            return res.status(200).json({
                success: true,
                message: "All admins",
                response: admins,
            });
        }
        catch (error) {
            return res.status(400).json({ success: false, message: error.message });
        }
    },
      
 
 
  

 
};
