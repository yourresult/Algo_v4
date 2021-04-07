const register = require('./post/register');
const login = require('./post/login');
const newPost = require('./post/newPost');
const postList = require('./post/postList');
const getPost = require('./post/getPost');
const updatePost = require('./post/updatePost');
const newJob = require('./jobs/newJob');
const updateJob = require('./jobs/updateJob');
const getJob = require('./jobs/getJob');
const jobList = require('./jobs/jobList');
// Orders Pages
const placeOrder = require('./order/placeOrder');
const viewUserOrders = require('./order/viewUserOrders');

module.exports = {
    register,
    login,
    newPost,
    postList,
    getPost,
    updatePost,
    newJob,
    updateJob,
    getJob,
    jobList,
    placeOrder,
    viewUserOrders
}