import userModel from "../Models/userModel.js";

export const getUser=async(req, res)=>{
    const id=req.params.id;
    try{
        const user = await userModel.findById(id);
        const {password, ...otherDetails} = user._doc;
        if(user){
            res.status(200).json(otherDetails);
        } else{
            res.status(404).json("No such user exist")
        }
    } catch(err){
        res.status(500).json(err);
    }
}

export const updateUser=async (req, res)=>{
    const id=req.params.id;
    const {currentUserId,currentUserAdminStatus,password}=req.body;
    try{
        if(currentUserId===id || currentUserAdminStatus){
            if(password){
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password,salt)
            }
            const user = await userModel.findByIdAndUpdate(id,req.body,{new:true});
            if(user){
                res.status(200).json(user);
            }
        } else{
            res.status(403).json("Access Denied! You can update only your own profile")
        }
    } catch(error){
        res.status(500).json(error);
    }
}

export const deleteUser = async(req, res) => {
    const id=req.params.id;
    const {currentUserId,currentUserAdminStatus}=req.body;
    if(currentUserId===id || currentUserAdminStatus){
        try{
            const user = await userModel.findByIdAndDelete(id);
            if(user){
                res.status(200).json("user deleted successfully");
            }
        } catch(err){
            res.status(500).json(err)
        }
    } else{
        res.status(403).json("Access Denied! You can delete only your own profile")
    }
}

// follow user
export const followUser=async(req,res)=>{
    const id=req.params.id;
    const {currentUserId}=req.body;
    if(currentUserId===id){
        res.status(403).json("You cannot follow yourself");
    } else{
        try{
            const followUser=await userModel.findById(id);
            const following=await userModel.findById(currentUserId);
            if(!followUser.followers.includes(currentUserId)){
                await followUser.updateOne({$push:{followers:currentUserId}});
                await following.updateOne({$push:{following:id}});
                res.status(200).json('Users followed!')
            } else{
                res.status(403).json("user is already follow by you")
            }
            
        } catch(error){
            res.status(500).json(error);
        }
    }
}

// unfollow user
export const unFollowUser=async(req,res)=>{
    const id=req.params.id;
    const {currentUserId}=req.body;
    if(currentUserId===id){
        res.status(403).json("You cannot Unfollow yourself");
    } else{
        try{
            const followUser=await userModel.findById(id);
            const following=await userModel.findById(currentUserId);
            if(followUser.followers.includes(currentUserId)){
                await followUser.updateOne({$pull:{followers:currentUserId}});
                await following.updateOne({$pull:{following:id}});
                res.status(200).json('Users Unfollowed!')
            } else{
                res.status(403).json("user is not follow by you")
            }
            
        } catch(error){
            res.status(500).json(error);
        }
    }
}