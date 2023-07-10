import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public/images');
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, req.body.name);
  }
});

const upload = multer({
  dest: '../public/images',
});

router.post('/', upload.single('name'), (req, res) => {
  try {
    console.log('checking code');
    return res.status(200).json('File uploaded successfully');
  } catch (error) {
    console.log(error);
    return res.status(500).json('An error occurred');
  }
});



export default router;
