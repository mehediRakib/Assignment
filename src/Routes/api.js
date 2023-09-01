const express=require('express');
const app=new express();
const router=express.Router();

const blogController=require('../Controllers/blogController');
const blogDetailsController=require('../Controllers/blogDetailsController');
const commentController=require('../Controllers/commentController');
const messageController=require('../Controllers/messageController');
const portfolio=require('../Controllers/portfolioController');
const productController=require('../Controllers/productController');
const profitController=require('../Controllers/profitController');
const projectController=require('../Controllers/projectController');
const serviceController=require('../Controllers/serviceController');
const titleController=require('../Controllers/titleController');


router.get('/create1',blogController.create);
router.get('/read1',blogController.read);
router.get('/delete1',blogController.delete);
router.get('/update1',blogController.update);

router.get('/create2',blogDetailsController.create);
router.get('/read2',blogDetailsController.read);
router.get('/delete2',blogDetailsController.delete);
router.get('/update2',blogDetailsController.update);

router.get('/create3',commentController.create);
router.get('/read3',commentController.read);
router.get('/delete3',commentController.delete);
router.get('/update3',commentController.update);

router.get('/create4',messageController.create);
router.get('/read4',messageController.read);
router.get('/delete4',messageController.delete);
router.get('/update4',messageController.update);


router.get('/create5',portfolio.create);
router.get('/read5',portfolio.read);
router.get('/delete5',portfolio.delete);
router.get('/update5',portfolio.update);


router.get('/create6',productController.create);
router.get('/read6',productController.read);
router.get('/delete6',productController.delete);
router.get('/update6',productController.update);

router.get('/create7',profitController.create);
router.get('/read7',profitController.read);
router.get('/delete7',profitController.delete);
router.get('/update7',profitController.update);


router.get('/create8',projectController.create);
router.get('/read8',projectController.read);
router.get('/delete8',projectController.delete);
router.get('/update8',projectController.update);


router.get('/create9',serviceController.create);
router.get('/read9',serviceController.read);
router.get('/delete9',serviceController.delete);
router.get('/update9',serviceController.update);

router.get('/create10',titleController.create);
router.get('/read10',titleController.read);
router.get('/delete10',titleController.delete);
router.get('/update10',titleController.update);





module.exports=router;