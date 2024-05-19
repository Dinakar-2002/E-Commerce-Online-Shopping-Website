const express=require('express')
const app=express()

const mysql=require('mysql');

const cors=require('cors');
// const { default: Category } = require('../client/src/Component/Category');
// const { default: Category } = require('../client/src/Component/Product');
app.use(cors());
app.use(express.json());

const nodemailer=require('nodemailer');
const multer=require("multer");   //toupdate The photo
// const { toFormData } = require('axios');

//time
let today=new Date();
dd=today.getDate();
mm=today.getMonth()+1
yy=today.getFullYear()
let cdate=yy+"-"+mm+"-"+dd;
let ctime=today.toLocaleTimeString();
//

app.listen(3001,()=>{
 console.log("running on port 3001");   
});

app.get("/",(req,res)=>{
    res.send("Hello Yashavant..!");
});

const dbcon=mysql.createConnection({
    host:"localhost",
    "user":"root",
    "password":"",
    "database":"ecommerce",
})
//end database connection code

dbcon.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
});

//Give Feedback
app.post('/feedback',(req,res)=>{
    feeddata=req.body.feeddata
    userid=feeddata.userid
    pid=feeddata.pid
    aboutproduct=feeddata.aboutproduct
    aboutservice=feeddata.aboutservice
    suggetions=feeddata.suggetions

    dbcon.query("insert into feedback (userid,pid,aboutproduct,aboutservice,suggetions)values(?,?,?,?,?)",
    [userid,pid,aboutproduct,aboutservice,suggetions],
    (err,result)=>{
        if(err){console.log(err);}
        else{
            res.send(result)
        }
    });
   
});

//view feedback Details
app.get('/viewfeedback/',(req,res)=>{
    const q="select * from feedback";
    dbcon.query(q,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(result);
            res.send(result);
        }
    })
})

//delete button for feedback
app.delete('/delfed/:id',(req,res)=>{
    const id=req.params.id
    dbcon.query("delete from feedback where id=?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result);}
    });
});


//Give category
app.post('/category',(req,res)=>{
    feeddata=req.body.feeddata
    categoryname=feeddata.categoryname


    dbcon.query("insert into category(categoryname)values(?)",
    [categoryname],
    (err,result)=>{
        if(err){console.log(err);}
        else{
            res.send(result)
        }
    });
   
});

//view category Details
app.get('/viewcategory/',(req,res)=>{
    const q="select * from category";
    dbcon.query(q,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(result);
            res.send(result);
        }
    })
})
//delete button for category
app.delete('/delcat/:id',(req,res)=>{
    const id=req.params.id
    dbcon.query("delete from category where id=?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result);}
    });
});


//Give payment
app.post('/payment',(req,res)=>{
    feeddata=req.body.feeddata
    orderid=feeddata.orderid
    userid=feeddata.userid
    totalamount=feeddata.totalamount
    paiddate=feeddata.paiddate

    dbcon.query("insert into payment(orderid,userid,totalamount,paiddate)values(?,?,?,?)",
    [orderid,userid,totalamount,paiddate],
    (err,result)=>{
        if(err){console.log(err);}
        else{
            res.send(result)
        }
    });
   
});

//view payment Details
app.get('/viewPayment/',(req,res)=>{
    const q="select * from payment";
    dbcon.query(q,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(result);
            res.send(result);
        }
    })
})
//delete pay for feedback
app.delete('/delpay/:id',(req,res)=>{
    const id=req.params.id
    // console.log("hey"+key);
    dbcon.query("delete from payment where id=?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result);}
    });
});


//image storage config
let imgconfig=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"../client/public/Upload");
        //callback(null,"./client/public/")
    },
    //img filter
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
})
const isImage=(req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(null,Error("Only image is allowed"))
    }
}
let upload=multer({
    storage:imgconfig,
    fileFilter:isImage
})

//Give Product
app.post('/pro',upload.single("file"),(req,res)=>{
    // feeddata=req.body.feeddata
    category=req.body.category
    productname=req.body.productname
    qty=req.body.qty
    uom=req.body.uom
    price=req.body.price
    stock=req.body.stock
    const {filename}=req.file
    console.log(req.file);
    description=req.body.description
   

    dbcon.query("insert into product(category,productname,qty,uom,price,stock,image,description)values(?,?,?,?,?,?,?,?)",
    [category,productname,qty,uom,price,stock,filename,description],
    (err,result)=>{
        if(err){console.log(err);}
        else{
            res.send(result)
        }
    });
   
});

//view product Details
app.get('/viewProduct/',(req,res)=>{
    const q="select * from product";
    dbcon.query(q,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(result);
            res.send(result);
        }
    })
})
//delete product for feedback
app.delete('/delpro/:id',(req,res)=>{
    const id=req.params.id
    dbcon.query("delete from product where id=?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result);}
    });
});




//Give Reg
app.post('/register',(req,res)=>{
    feeddata=req.body.feeddata
    fname=feeddata.fname
    lname=feeddata.lname
    dob=feeddata.dob
    gender=feeddata.gender
    address=feeddata.address
    pincode=feeddata.pincode
    email=feeddata.email
    mobileno=feeddata.mobileno
    password=feeddata.password

    dbcon.query("insert into registration(fname,lname,dob,gender,address,pincode,email,mobileno)values(?,?,?,?,?,?,?,?)",
    [fname,lname,dob,gender,address,pincode,email,mobileno],
    (err,result)=>{
        if(err){console.log(err);}
        else{
            dbcon.query("insert into login(password,username,utype)values(?,?,?)",
            [password,email,'user'])
            res.send(result);
        }
    });
   
});

//view Reg Details
app.get('/viewregister/',(req,res)=>{
    const q="select * from registration";
    dbcon.query(q,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(result);
            res.send(result);
        }
    })
})

//delete button for reg
app.delete('/delreg/:id',(req,res)=>{
    const id=req.params.id
    dbcon.query("delete from registration where id=?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result);}
    });
});


//Give login
app.post('/loginform',(req,res)=>{
    feeddata=req.body.feeddata
    username=feeddata.username
    password=feeddata.password
    utype=feeddata.utype

    dbcon.query("insert into login(username,password,utype)values(?,?,?)",
    [username,password,utype],
    (err,result)=>{
        if(err){console.log(err);}
        else{
            res.send(result)
        }
    });
   
});


//Give product
app.post('/product',(req,res)=>{
    feeddata=req.body.feeddata
    category=feeddata.category
    productname=feeddata.productname
    qty=feeddata.qty
    uom=feeddata.uom
    price=feeddata.price
    stock=feeddata.stock
    image=feeddata.image
    decription=feeddata.decription


    dbcon.query("insert into product (category,productname,qty,uom,price,stock,image,description) values(?,?,?,?,?,?,?,?)",
    [category,productname,qty,uom,price,stock,image,description],
    (err,result)=>{
        if(err){console.log(err);}
        else{
            res.send(result)
        }
    });
});

//view product Details
app.get('/viewproduct/',(req,res)=>{

    const q="select * from product";
    dbcon.query(q,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(result);
            res.send(result);
        }
    })
})



//login authentification code
app.post('/login',(req,res)=>{
    logdata=req.body.logindata
    username=logdata.username
    password=logdata.password
    dbcon.query("SELECT * from login where username =? AND password=?",
    [username,password],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
            console.log(result);
        }
    })
}) 



// Forgot Password
app.post('/fpass',(req,res) => {
    const otp=Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
    username=req.body.email
    console.log(username)
    dbcon.query("SELECT * from login where username =?",[username],
    (err,result)=> {
        if(err){
            console.log(err);}
        else{
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                  user: "dinakarnaik33@gmail.com",
                  pass: "cunmmdzieyfnitto",
                },
              });
            
              let info = transporter.sendMail({
                from: '"Dinakar" <dinakarnaik33@gmail.com>', // sender address
                to: username, // list of receivers
                subject: "ONE TIME PASSWORD", // Subject line
                text: "Your OTP:", // plain text body
                html: "<b>OTP: </b>"+otp, // html body
              }); 
              console.log("Message sent: %s", info.messageId);
            dbcon.query("insert into otp(otp,status)values(?,?)",
            [otp,'active'])
           res.send(result); }     
    }
    );
});


// Otp Verification
app.post('/otp',(req,res) => {
    otp=req.body.otp
    console.log(otp)
    dbcon.query("SELECT * from otp where otp =?",[otp],
    (err,result)=> {
        if(err){
            console.log(err);}
        else{
            
           res.send(result); }     
    }
    );
});



// Reset Password Code

app.post('/rpass',(req,res) => {
    newpass=req.body.newpass
    confirmpass=req.body.confirmpass
    uid=req.body.uid

        dbcon.query("update login set password=? where username =?",[newpass,uid],
    (err,result)=> {
        if(err){
            console.log(err);}
        else{
           res.send(result); }     
    }
    ); 
   
});


//addCart send order
app.post('/addcart/:id/:uid/',(req,res)=>{
    //console.log("Order Sent");
    const qty=1
    
    const id=req.params.id
    console.log("hey"+id);
    const uid=req.params.uid
    const q="select * from product where id=?";
    dbcon.query(q,[id],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log("sent")
            const price=result[0].price
            const total=price
            dbcon.query("insert into customerorder(userid,price,qty,total,orderdate,ordertime,orderstatus,paymentstatus,pid)values(?,?,?,?,?,?,?,?,?)",
           [uid,price,qty,total,cdate,ctime,'pending','pending',id])
           res.send(result);
           console.log(result);
        }
        // console.log(result[0].price);
        
    })
})
/////


//buy after quantity
app.post('/buyorder/:id/',(req,res)=>{
    console.log("Order Sent");

    // const qty=1
    const id=req.params.id
    console.log("hey"+id);
    qty=req.body.qty
    uid=req.body.uid
    const q="select * from product where id=?";
    dbcon.query(q,[id],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            console.log("sent")
            const price=result[0].price
            const total=price*qty
            dbcon.query("insert into customerorder(userid,price,qty,total,orderdate,ordertime,orderstatus,paymentstatus,pid)values(?,?,?,?,?,?,?,?,?)",
           [uid,price,qty,total,cdate,ctime,'confirm','pending',id])
           res.send(result);
           console.log(result);
        }       
    })
})



//view Cart Details
app.get('/cartview/:id/',(req,res)=>{
    const uid=req.params.id;

    // const q="select * from customerorder where orderstatus=? and userid=?";
    const q="select a.id,a.pid,a.userid,a.qty,a.price,a.total,a.orderdate,a.ordertime,a.orderstatus,a.paymentstatus,b.productname from  customerorder as a join product as b  on a.userid=? and a.pid=b.id and a.orderstatus=?";
    dbcon.query(q,[uid,'pending'],(err,result)=>{

        if(err){
            console.log(err);
        }else{
            // console.log(result);
            res.send(result);
        }
    })
})
//delete button for cart
app.delete('/delcart/:id',(req,res)=>{
    const id=req.params.id
    dbcon.query("delete from customerorder where id=?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result);}
    });
});


//view order Details
app.get('/orderview/:id/',(req,res)=>{
    const uid=req.params.id;
    const q="select a.id,a.pid,a.userid,a.qty,a.price,a.total,a.orderdate,a.ordertime,a.orderstatus,a.paymentstatus,b.productname from  customerorder as a join product as b  on a.userid=? and a.pid=b.id and a.orderstatus=?";
    dbcon.query(q,[uid,'confirm'],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            // console.log(result);
            res.send(result);
        }
    })
})




//paybill next
app.post('/paybillnext/:price',(req,res)=>{
    console.log("Payment Inserted");
    price=req.body.price,
    payment_id=req.body.payment_id
    uid=req.body.uid
    const status="Paid"
    const id=Math.floor(Math.random()*(9999-1000+1)+1000)
    const q="update customerorder set paymentstatus=?,orderstatus=? where userid=?";
    dbcon.query(q,[status,'confirm',uid],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            dbcon.query("insert into payment(orderid,order_amount,payment_date,userid,transaction_no)values(?,?,?,?,?)",
            [id,price,cdate,uid,payment_id])
            res.send(result);
        }
    });
    
})

//

//paybill now by order
// Do Payment through razorpay  
app.post('/paybill/:id',(req,res) => {
    console.log("Payment Inserted")
    const id=req.params.id
    price=req.body.price,
    payment_id=req.body.payment_id
    uid=req.body.uid
    const status='Paid'
    const q="update customerorder set paymentstatus=? where id=?";
    dbcon.query(q,[status,id],(err,result) => {
        if(err){
        console.log(err);}
        else{ 
            dbcon.query("insert into payment(orderid,order_amount,payment_date,userid,transaction_no)values(?,?,?,?,?)",
            [id,price,cdate,uid,payment_id])
            //console.log(result[0].price)
            res.send(result);
        }
    }); 
});


//view cust Details
app.get('/cust',(req,res)=>{
    // const uid=req.params.id;

    // const q="select * from customerorder where orderstatus=? and userid=?";
    const q="select a.id,a.pid,a.userid,a.qty,a.price,a.total,a.orderdate,a.ordertime,a.orderstatus,a.paymentstatus,b.productname from  customerorder as a join product as b  on a.paymentstatus=? and a.pid=b.id";
    dbcon.query(q,["Paid"],(err,result)=>{

        if(err){
            console.log(err);
        }else{
            // console.log(result);
            res.send(result);
        }
    })
})
//

//

//Todays Order Details 
app.get('/today',(req,res)=>{
    // const uid=req.params.id;
     // console.log(cdate)
    // const q="select * from customerorder where orderstatus=? and userid=?";
    const q="select a.id,a.pid,a.userid,a.qty,a.price,a.total,a.orderdate,a.ordertime,a.orderstatus,a.paymentstatus,b.productname from  customerorder as a join product as b  on a.paymentstatus=? and a.pid=b.id and orderdate=?";
    dbcon.query(q,["Paid",cdate],(err,result)=>{

        if(err){
            console.log(err);
        }else{
            // console.log(result);
            res.send(result);
        }
    })
})



