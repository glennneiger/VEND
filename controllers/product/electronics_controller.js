var Electronics=require('../../models/products/Electronics');
var Advertisement=require('../../models/Advertisement');

var Activity=require('../../models/Activity');
//for images
var fs=require('fs');
var path = require('path');
var APP_DIR = path.dirname(require.main.filename);
var UPLOAD_DIR = "/uploads/productimages/electronics/";

exports.publish=function(input,req,res){


	//validate data if possible
 	var electronics=new Electronics(input);


 	//images
 	var imagefiles=req.files.images;
 	if(Array.isArray(imagefiles)){
 		for(var i=0; i<imagefiles.length;i++){
 			var oldPath=imagefiles[i].path;
 			var ext=path.extname(oldPath);

 			var savedPath = UPLOAD_DIR+electronics._id+i+ext;
 			var newPath=APP_DIR+'/public/'+savedPath;
 			
    	    electronics.images.push({path:savedPath});

    	    var source = fs.createReadStream(oldPath);
			var dest = fs.createWriteStream(newPath);
			source.pipe(dest);
			fs.unlink(oldPath);
 		}
 	}
 	else{
 		var oldPath=imagefiles.path;
 		var ext=path.extname(oldPath);
    	var savedPath = UPLOAD_DIR+electronics._id+i+ext;
 		var newPath=APP_DIR+'/public/'+savedPath;
 		electronics.images.push({path:savedPath});
    	             
    	var source = fs.createReadStream(oldPath);
		var dest = fs.createWriteStream(newPath);
		source.pipe(dest);
		fs.unlink(oldPath);
 	}
 	//images done


	electronics.save();
	var advertisement=new Advertisement(input);
	advertisement.product_id=electronics._id;
	advertisement.user_id=req.session.user_id;
	advertisement.user_type=req.session.user_type;
	advertisement.thumb=electronics.images[0].path;
	advertisement.kind=input.kind;
	advertisement.category=input.category;
	advertisement.price=input.price;
	advertisement.description=electronics.name+' under :'+electronics.sub_category; 	
	advertisement.save();


	//add to activity
	var activity=new Activity(input);
	activity.user_id=req.session.user_id;
	activity.user_name=req.session.user_name;
	activity.activity='Posted an Advertisement Under Electronics for: '+electronics.name+' at '+advertisement.createdAt;
	activity.save();

	console.log(input);
	//res.status(201).json(advertisement);
	res.redirect('/');
	
}

exports.find=function(callback,advertisement){
	Electronics.findOne({_id:advertisement.product_id},function(err,product){
		callback(product);
	});
}