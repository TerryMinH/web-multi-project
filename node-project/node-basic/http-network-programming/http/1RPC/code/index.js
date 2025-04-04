/*
 * @Author: TerryMin
 * @Date: 2022-05-19 16:26:22
 * @LastEditors: TerryMin
 * @LastEditTime: 2022-05-19 16:27:45
 * @Description: file not
 */
const { BOOKS, BOOKS_IDS } = require('./constant');

/**
 * @func: func
 * @descripition: 
 */
const getRandomBookId = () => BOOKS_IDS[Math.floor(Math.random() * BOOKS_IDS.length)];

/**
 * 查询书籍名称
 * @param {string} bookId 书籍id
 */
const searchBookName = (bookId) => {
    const book = BOOKS.find(item => item.id == bookId);
    if (typeof book === 'object' && book !== null) {
        return book.name;
    }
    return '没有这本书哦~~';
}

module.exports = {
    getRandomBookId,
    searchBookName,
};