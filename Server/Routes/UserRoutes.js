import express from 'express';
import { deleteUser, followUser, getUser, unFollowUser, updateUser } from '../Controllers/UserControllers.js';

const router =  express.Router();

router.get('/:id',getUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);
router.put('/:id/follow',followUser);
router.put('/:id/unfollow',unFollowUser);

export default router;