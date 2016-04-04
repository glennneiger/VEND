var mongoose=require('mongoose'),
	Schema=mongoose.Schema;
var timestamp=require('../controllers/functions/timestamp');

var recentViewedModel=new Schema({
	user_id:{
		type: String,
		trim: true
	},
	user_name:{
		type:String,
		default:'Anonymous'
	},
	user_type:{
		type:String,
		default:'Anonymous'
	},
	product_id:{
			type: String
	},
	category:{
		type: String
	},
	kind:{
		type: String
	},
	bid:{
		type:String
	},
	location:{
		type: String
	},
	price:{
		type: String
	},
	rating:{
		type: Number,
		default: 0
	},
	thumb:{
		type: String
	},
	name:{
		type: String
	},
	description:{
		type: String,
		default:'No Description by Publisher'
	}
});
module.exports=mongoose.model('RecentView',recentViewedModel);