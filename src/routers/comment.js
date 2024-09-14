const express = require('express');
const router = express.Router();
const Comment = require('../models/comments');

router.get('/', async(req, res)=> {
    try{
        const comments = await Comment.getALL();
        res.json(comments);
    }catch(err){
        res.json({message: "get çalışmıyor"});
    }
});

router.get('/:id', async(req, res)=> {
    try{
        const comment = await Comment.getById(req.params.id);
        if(!comment){
          return  res.status(400).json({message: 'get id çalışmıyor'})
        }
        res.json(comment);
    }catch(err){
        res.status(400).json({message: 'get id çalışmıyor'})
    }
});

router.post('/', async(req, res)=> {
    try{
        const newComments = await Comment.create(req.body);
        res.status(201).json(newComments)
    }catch(err){
        res.status(400).json({message: 'get id çalışmıyor'})
    }
});

router.put('/:id', async(req, res)=> {
    try{
        const upComment = await Comment.update(req.body, req.params.id);
        res.json(upComment);
    }catch(err){
        res.status(400).json({message: 'get id çalışmıyor'})
    }
});

router.delete('/:id', async(req, res)=> {
    try{
        const deleteComment = await Comment.delete(req.params.id);
        res.json(deleteComment);
    }catch(err){
        res.status(400).json({message: 'get id çalışmıyor'})
    }
});
module.exports = router;