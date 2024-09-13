const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async(req, res)=> {
    try{
        const posts = await Post.getAll();
        res.json(posts);
    }catch(err){
     res.json({message:'get çalışmıyor'});
    }
});

router.get('/:id', async(req, res)=> {
    try{
        const post = await Post.getById(req.params.id)
        if(!post){
            return res.status(404).json({message:"Kayıt yok"});
        }
        res.json(post);
    }catch(err){
        res.status(400).json({message: 'get id çalışmıyor'})
    }
});

router.post('/', async(req, res)=> {
    try{
        const newPost = await Post.create(req.body);
        res.status(201).json(newPost);
    }catch(err){
        res.status(400).json({message: 'post çalışmıyor.'});
    }
}); 

router.patch('/:id', async(req, res)=> {
    try{
        const upPost = await Post.update(req.params.id, req.body);
        res.json(upPost)
    }catch(err){
        res.status(400).json({message: 'update çalışmıyor'});
    }
});


module.exports = router;