const express = require('express');
const router = express.Router();
const News = require('./NewsModel');


router.get('/news', async (req, res) => {
    const news = await News.findAll();
    res.json(news);
});


router.get('/news/:id', async (req, res) => {
    const newsItem = await News.findByPk(req.params.id);
    res.json(newsItem);
});

router.post('/news', async (req, res) => {
    const newNewsItem = await News.create(req.body);
    res.json(newNewsItem);
});

router.put('/news/:id', async (req, res) => {
    await News.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'News item has been updated' });
});

// DELETE a news item
router.delete('/news/:id', async (req, res) => {
    await News.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'News item has been deleted' });
});

module.exports = router;