//import mode
const Todo = require("../models/Todo");

//define route handler
exports.getTodo = async(req, res) => {
    try {
        //fetch all todo item from database
        //mongoose library bhut sare function provide krti h / support krti h google it
        const todos = await Todo.find({});

        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message: "Entire Todo Data is fetched",
        });
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message: "Server Error"
        })
    }
}

