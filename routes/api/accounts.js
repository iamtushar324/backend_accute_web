const route = require('express').Router()
const {Accounts} = require('../../db/db')
const {auth} = require('../../middleware/auth')

route.post('/' , auth , (req,res) =>{

    let {

        acc_name
    ,
        print_name
    ,
        acc_type
    ,
        status
    ,
        gst_num
    ,
        pan_num
    ,
        aadhar_num
    ,
        address_line1
    ,
        address_line2
    ,
        state
    ,
        city
    ,
        pincode
    ,
        mob_num
    ,
        phone_num
    ,
        emailId
            
    ,
        notes
    ,
        bal
    } = req.body

    console.log(req.body)
    console.log(emailId)

    let newAcc = Accounts.create({



    acc_name
,
    print_name
,
    acc_type
,
    status
,
    gst_num
,
    pan_num
,
    aadhar_num
,
    address_line1
,
    address_line2
,
    state
,
    city
,
    pincode
,
    mob_num
,
    phone_num
,
    emailId
        
,
    notes
,
    bal

    ,
    UserId : req.user.id

    }).then((acc) =>{

        res.send({account:{id:acc.id}})
    })
    .catch((err) =>{
        res.send({error:err})
    })






})

route.get('/' , auth ,(req,res)=>{

    let accounts = Accounts.findAll({

        where:{
            UserId:req.user.id

        }
        ,
        order: [
            
            ['createdAt', 'ASC'],
        ]
    })
    .then((acc) =>{
        res.send({accounts:acc})
    })
    .catch((err)=>{
        res.send({error:err})
    })


})



route.delete('/:id' , auth , (req,res)=>{


    let id = req.params.id;

    Accounts.destroy({
        where : {

            UserId : req.user.id,
            id

        }
    })
    .then(()=> {

        console.log("deleted Product")

        res.send({
            deleted : `Accuont${id}` })
    })
    .catch((err) =>{
        console.log(err)
        res.send({
            error:err
        })
    })








} )

route.put('/' , auth , (req ,res)=>{

    const prod = Accounts.findOne({

        where:{
            UserId:req.user.id,
            id:req.body.id
        }


    }).then((acc) =>{

        let u = req.body

      

    
        

                acc.acc_name= u.acc_name
           
                acc.print_name = u.print_name
           
                acc.acc_type= u.acc_type
           
                acc.status= u.status
           
                acc.gst_num = u.gst_num
           
                acc.pan_num = u.pan_num
           
                acc.aadhar_num= u.aadhar_num
           
                acc.address_line1= u.address_line1            
                acc.address_line2= u.address_line2            
                acc.state = u.state
           
                acc.city = u.city
           
                acc.pincode = u.pincode
           
                acc.mob_num= u.mob_num
           
                acc.phone_num= u.phone_num
           
                acc.emailId= u.emailId
                   
            
                acc.notes= u.notes
           
                acc.bal = u.bal
           

            
        acc.save().then(()=>{
            

            res.send({account:{id:acc.id}})
        })
        .catch((err) =>{
            console.log(err)

            res.send({error:err})
        })

        

        
    })
    .catch((err) =>{
        console.log(err)
        res.send({error:err})
    })






})


module.exports = {route}