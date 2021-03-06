var mongoose=require('mongoose'),
	Schema=mongoose.Schema;
var timestamp=require('../controllers/functions/timestamp');


var wishModel=new Schema({ 
	user_id:{
		type: String
	},
	user_name:{
		type:String
	},
	user_type:{
		type:String
	},
	title:{
		type: String
	},
	description:{
		type: String,
		default:'No Description'
	},
	category:{
		type: String
	},
	createdAt:{
		type: String,
		default:Date.now()
	}
});
module.exports=mongoose.model('Wish',wishModel);