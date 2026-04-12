const mongoose = require("mongoose")

const SliderSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    images: [
        {
            type: mongoose.Schema.Types.ObjectId,  // store image URLs
            ref:"BusinessList",
            required:true,
            
        }
    ],
})

const Slider = mongoose.model('Slider',SliderSchema);

module.exprots = Slider;