const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../util/wrapAsync.js");
const ExpressError=require("../util/expressError.js");
const Review=require("../models/review");
const Listing=require("../models/listing"); 
const { validateReview,isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewController=require("../controllers/reviews.js");


//Reviews
//Post review route
router.post("/",isLoggedIn,reviewController.creatReview);

//delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview))

module.exports=router