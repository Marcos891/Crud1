const multer = require('multer');
const path = require('path');



const storageProducts = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './public/images/products')
    },
    filename: (req,file,cb) => {
        cb(null, 'product-' + Date.now() + path.extname(file.originalname))
    }
});

const uploadImgProduct = multer({
    storage : storageProducts
});

module.exports = {
    uploadImgProduct
}