const express = require('express');
const router = express.Router();
const DiaryEntriesController = require('./DiaryEntriesController');

router
    .route('/diaryEntries')
    .get(DiaryEntriesController.getAll)
    .post(DiaryEntriesController.create);

router
    .route('/diaryEntries/:id')
    .get(DiaryEntriesController.get)
    .put(DiaryEntriesController.update)
    .delete(DiaryEntriesController.delete);

module.exports = router;