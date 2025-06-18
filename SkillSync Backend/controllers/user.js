const userModel = require('../models/user');

const userLogin = async (req, res) => {
    try {
        const { email , employeeId , password} = req.body;
        const user =  await userModel.findOne({ email  });
        console.log(user)
        if(!user) return res.status(404).json({message:'user not found'});
        if(user.employeeId !== employeeId) return  res.status(401).json({message:'Invalid credentials'});
        if(user.password !== password) return res.status(401).json({message:'Invalid credentials'});

        console.log('login done')
        return res.status(200).json({message:"Login Successfully"});

    } catch(err) {  
        res.status(500).json({message:'Invalid server error'});
    }
};

module.exports = userLogin;
