import mongoose,{Schema} from "mongoose";

const eventSchema = new Schema({
    name:{type:String,required:true},
    creator:{type:String,required:true},
    creatorName:{type:String,required:true},
    description:{type:String,required:true},
    open:{type:Boolean, required:true, default:false},
    game:String,
    loc:String,
    time:String,
    date:String,
    applicationSettings:{
        reqIGN:{type:Boolean, required:true, default:true},
        reqSer:{type:Boolean, required:true, default:true},
        reqTOS:{type:Boolean, required:true, default:true},
        tos:String
    },
    participantSettings:{
        allowTitle:{type:Boolean, required:true, default:true},
        reqTitle:{type:Boolean, required:true, default:true},
        titleLabel:String,
        allowDesc:{type:Boolean, required:true, default:true},
        reqDesc:{type:Boolean, required:true, default:false},
        descLength:[Number, Number],
        allowImage:{type:Boolean, required:true, default:false},
        reqImg:{type:Boolean, required:true, default:false},
        imgLabel:String,
        allowAdminContact:{type:Boolean, required:true, default:true}
    },
    displaySettings:{
        backgroundColor:{type:String, required:false, default:'#FFFFFF'},
        textColor:{type:String, required:true, default:'#000000'},
        textColor2:{type:String, required:false, default:'#000000'},
        pic:{type:String, required:true, default:'./Images/event-default.png'}
    }
},{ timestamps:true });

export const Event = mongoose.model('Event', eventSchema);