const express = require('express');
const router = express.Router();
const DiaryEntriesController = require('../controllers/DiaryEntriesController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

router
    .route('/diaryEntries')
    .get(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,DiaryEntriesController.getAll)
    .post(DiaryEntriesController.create);

router
    .route('/diaryEntries/:id')
    .get(DiaryEntriesController.get)
    .put(DiaryEntriesController.update)
    .delete(DiaryEntriesController.delete);

module.exports = router;