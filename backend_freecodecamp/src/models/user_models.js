//mongoose is what will talk to mongodb for us
//schema means structure

import mongoose, {Schema} from "mongoose";

//modules are code version is the file
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,        //trim removes whitespaces
            minLength: 1,      // minimun minLength
            maxLength: 30
        },

            password: {
              type: String,
              required: true,
              minLength: 6,
              maxLength: 50
        },

        email: {
              type: String,
              required: true,
              unique: true,
              lowercase: true,
              trim: true,
        }

    },

    {
        timestamps: true
    }
    
)

export const User = mongoose.model("User", userSchema)
//what is happenining here is that mongoose is talking to mongodb, and from the module the user is being extracted
//this is the user model
