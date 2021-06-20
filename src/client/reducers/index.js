import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';
import jobsNotifReducer from './homePageReducer';
import detailJob from './detailJobReducer';
import order from './orderReducer';
import subscribe from './subscribe';
import ltp from './ltp';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer,
  jobsNotification: jobsNotifReducer,
  detailJob: detailJob,
  order: order,
  subscribe: subscribe,
  ltp: ltp
});
// export default combineReducers({
//   usersReducer,
//   authReducer,
//   adminsReducer,
//   jobsNotifReducer,
//   detailJob
// });
