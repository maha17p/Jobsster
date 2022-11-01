import { BadRequestError } from "../errors";
import User from "../models/User";

const verifyJobSeeker = async(req,res,next) => {
    const user = await User.findOne({_id:req.user.userId});
    if(user.role !== 2) {
        throw new BadRequestError("Job seeker resources denied.so you'll need to create an job seeker account");
    }
    next()
}

export default verifyJobSeeker;