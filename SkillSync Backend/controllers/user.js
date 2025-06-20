const userModel = require('../models/user');

const userLogin = async (req, res) => {
    try {
        const { email , employeeId , password} = req.body;

        console.log('hit')

        const user =  await userModel.findOne({ email });
        if(!user) return res.status(404).json({message:'user not found'});
        if(user.employeeId !== employeeId) return  res.status(401).json({message:'Invalid credentials'});
        if(user.password !== password) return res.status(401).json({message:'Invalid credentials'});

        // saving the data into the session
        req.session.user = {
            id:user._id,
            email:user.email,
            employeeId:user.employeeId
        };

        console.log("done")
        return res.status(200).json({message:"Login Successfully"});

    } catch(err) {  
        res.status(500).json({message:'Invalid server error'});
    }
};

module.exports = userLogin;
