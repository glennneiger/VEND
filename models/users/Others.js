
var mongoose=require('mongoose'),
	Schema=mongoose.Schema;
var timestamp=require('../../controllers/functions/timestamp');

var otherModel=new Schema({ 
	firstname:{
		type: String,
		trim: true
	},
	lastname:{
		type: String,
		trim: true
	},
	email:{
		type: String,
		trim: true
	},
	contact:{
		type: String
	},
	createdAt:{
		type: String,
		default:timestamp.getTime()
	},
	updatedAt:{
		type: String,
		default:timestamp.getTime()
	}
});
module.exports=mongoose.model('Other',otherModel);