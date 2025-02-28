import JWT from "jsonwebtoken";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import orderModel from "../models/orderModel.js";

 export const registerController = async(req , res) => {
    try {
        const  {name, email, password, phone, address, answer } = req.body;

        if(!name){
            return res.send({message:"Name is Required"})
        } else if(!email) {
            return res.send({message:"Email is Required"})
        } else if(!password) {
            return res.send({message:"Password is Required"})
        } else if(!phone) {
            return res.send({message:"Phone is Required"})
        } else if(!address) {
            return res.send({message:"Address is Required"})
        }   else if(!answer) {
          return res.send({message:"Answer is Required"})
        }

 
        // check user
        const existingUser = await userModel.findOne({ email });
        // existing user
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:'Already Register Please login',
            })
        }
        // register Users
        const hashedPasword = await hashPassword(password);
        //save
        const user = await new userModel({name, email, phone, address, password:hashedPasword , answer}).save();
        
        
        res.status(201).send({
            success:true,
            message:'User Register Successfully',
            user,
        })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Registeration",
            error,
        })
    }
}; 


// METHOD POST LOGIN

export const loginController = async (req , res) => {
   try {
      const{email , password} = req.body
    //   validation
      if(!email || !password)
      {
        return res.status(404).send({
            success:false,
            message:"Invalid username and password"
        })
      }
      //check user
      const user = await userModel.findOne({email})
      if(!user){
         return res.status(404).send({
            success:false,
            message:'Email is not register'
         })
      }
      const match = await comparePassword(password, user.password);
      if(!match){
        return res.status(200).send({
            success:false,
            message:'Invalid username or password'
        })
      }
    //   token
    const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET , {
        expiresIn:'14d'
    });
    res.status(200).send({
        success:true,
        message:"login successfully",
        user:{
            name:user.name,
            email:user.email,
            phone:user.phone,
            address:user.address,
            role: user.role,
        },
        token,
    });
   } catch(error) {
     console.log(error);
     res.status(500).send({
        success:false,
        message:"Error In Login",
        error
     })
   }
};

// forgot Password Controller
export const forgotPasswordController = async (req ,res) => {
   try {
       const {email, answer, newPassword} = req.body;
       if(!email){
         res.status(400).send({
            message:'Email is required'
         });
       }
       if(!answer){
        res.status(400).send({
           message:'Answer is required'
        });
      }
      if(!newPassword){
        res.status(400).send({
           message:'New Password is required'
        });
      }

      //   check when the email and answere then reset password

      const user = await userModel.findOne({email,answer})

      //Validate
      if(!user){
         return res.status(404).send({
            success:false,
            message:'Wrong email and answer',
         })
      }
    
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed});
    res.status(200).send({
       success: true,
       message: 'Password reset succesfully'
    });

   } catch (error) {
      res.status(500).send({
        success:false,
        message:'Something went Wrong',
        error
      })
   }
};

//test controller
export const testController = async (req , res) => {
    //    console.log("protected route");
    res.send("protected route")
}


// update profile
export const updateProfileController = async (req, res) => {
  try {
     const {name, email, password, address, phone} = req.body;
     const user = await userModel.findById(req.user._id);
     //password 
     if(password && password.length<6)
     {
        return res.json({error:'Password is required and 6 character long'})
     }
     const hashedPasword = password ? await hashPassword(password) : undefined;
     const updatedUser = await userModel.findByIdAndUpdate(req.user._id, {
      name:name || user.name,
      password:hashedPasword  || user.password,
      phone:phone || user.phone,
      address:address || user.address,
     }, {new:true})
     res.status(200).send({
      success:true,
      message:'Profile Updated Successfully',
      updatedUser
     })
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success:false,
      message:'Error While Update Profile',
      error
    })
  }
}

// orders
export const getOrdersController = async (req, res) => {
  try {
     const orders = await orderModel.find({buyer:req.user._id}).populate("products", "-photo").populate("buyer" , "name");
     res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:'Error While Getting Orders',
      error
    })
  }
}

// orders
export const getAllOrdersController = async (req, res) => {
  try {
     const orders = await orderModel.find({}).populate("products", "-photo").populate("buyer" , "name").sort({createdAt: "-1"});
     res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:'Error While Getting Orders',
      error
    })
  }
}
// orders status 

export const orderStatusController = async (req, res) => { 
  try {
     const {orderId} = req.params;
     const {status} = req.body;
     const orders = await orderModel.findByIdAndUpdate(orderId, {status}, {new:true});
     res.json(orders);
 
  } catch(error){
    console.log(error);
    res.status(500).send({
      success:false,
      message:'Error While Updateing Order',
      error
    })
  }
}