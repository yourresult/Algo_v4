import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';
import jobsNotifReducer from './homePageReducer';
import detailJob from './detailJobReducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer,
  jobsNotification: jobsNotifReducer,
  detailJob: detailJob
});
// export default combineReducers({
//   usersReducer,
//   authReducer,
//   adminsReducer,
//   jobsNotifReducer,
//   detailJob
// });
