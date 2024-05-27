const express = require('express');
const router = express.Router();
const DiaryEntry = require('./DiaryEntryModel');

router.get('/diaryEntries', async (req, res) => { 
    const diaryEntries = await DiaryEntry.findAll();
    res.json(diaryEntries);
});

router.get('/diaryEntries/:id', async (req, res) => {
    const diaryEntry = await DiaryEntry.findByPk(req.params.id);
    res.json(diaryEntry);
});

router.post('/diaryEntries', async (req, res) => {
    const newDiaryEntry = await DiaryEntry.create(req.body);
    res.json(newDiaryEntry);
});

router.put('/diaryEntries/:id', async (req, res) => {
    await DiaryEntry.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'DiaryEntry has been updated' });
});

router.delete('/diaryEntries/:id', async (req, res) => {
    await DiaryEntry.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'DiaryEntry has been deleted' });
});


module.exports = router;