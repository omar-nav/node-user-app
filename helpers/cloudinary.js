const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: "davd4ynha",
  api_key: "161114344241811",
  api_secret: "lnCDx6zo2imFZJuSYdspJoUlMR0"
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'Profile_pictures', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png'],
  filename: (req, file, cb) => {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;