import { BadRequestError } from "../errors";
import User from "../models/User";

const verifyJobProvider = async(req,res,next) => {
    const user = await User.findOne({_id:req.user.userId});
    if(user.role !== 1)  {
       throw new BadRequestError("you haven't posted a job before, so you'll need to create an job provider account")
    }
    next()
}

export default verifyJobProvider;