const product = require('../models/productModele');

exports.allproduct = async ( req , res , next)=>{
  const data = await product.find().sort({_id:-1});
  res.status(200).json({product:data });
}


exports.userbyname = async (req , res , next)=> {
  const {name} = req.params;
  const data = await product.findOne({name:name});

  res.status(200).json({
   data_pro : data
 })
 
}

exports.userbyid = async (req , res , next)=> {
   const {id} = req.params;
   const data = await product.findById(id);

   res.status(200).json({
    data : data
  })
}
exports.insertproduct = async (req , res , next)=>{
  const {name , price} = req.body;
  let Updateproduct = new product({
    name: name ,
    price: price
  });

  await Updateproduct.save();

  res.status(200).json({
    message : "เพิ่มข้อมูลเรียบร้อย",
  })

}


exports.Updateproduct = async ( req , res , next )=>{
     
  try {
   
    const {id} = req.params;
    const {name , price} = req.body;
    const PRODUCT = await product.findByIdAndUpdate ( id , {
      name: name ,
      price : price
      
    });

    res.status(200).json({
      data:{
        message: `แก้ไขข้อมูลสินค้า ที่ ID : ${id} เสร็จเรียบร้อย`
      }
    })

  } catch (error) {
       res.status(400).json({
        error:{
          message: `เกิดข้อผิดพลาด ${error.message}`
        }
       })
    }
  }

exports.deleteproduct = async ( req , res , next )=>{

  try{

    const {id} = req.params
    const PRODUCT = await product.deleteOne({_id:id});
    // ในกรณี ที่หา id ไม่เจอ
    if(PRODUCT.deleteproduct ===0 ){
      throw new Error('ไม่สามารถลบข้อมูลได้สำเร็จ');
    } else {
      res.json({
        data:{
          message:`ลบข้อมูลสินค้า  id: ${id}  `
        }
      }).status(200)
    }

  
  } catch (error) {
    res.json ({
      error:{
        message:`เกิดข้ดผิดพลาด ${error.message}`,
      }
    }).status(400)
  }
}