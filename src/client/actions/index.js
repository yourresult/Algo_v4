
// export const FETCH_JOBS_NOTIFICATION = 'fetch_jobs_notification';
// export const fetchJobs = () => async (dispatch, getState, api) => {
//   const res = await api.get('/job/jobs_notification');

//   dispatch({
//     type: FETCH_JOBS_NOTIFICATION,
//     payload: res
//   });
// };

export const SUBSCRIBE = 'subscribe';
export const getSubscribe = (dat) => async (dispatch, getState, api) => {
  // const res = await api.post('/api/admin/order');
  const ar = dat
  dispatch({
    type: SUBSCRIBE,
    payload: ar
  });
};

export const ORDER = 'order';
export const getOrders = () => async (dispatch, getState, api) => {
  const res = await api.post('/api/admin/order');
  dispatch({
    type: ORDER,
    payload: res
  });
};

export const FETCH_JOBS = 'fetch_jobs';
export const fetchJobs = () => async (dispatch, getState, api) => {
  const res = await api.get('/job/jobs_notification?limit=6');
  dispatch({
    type: FETCH_JOBS,
    payload: res
  });
};

export const DETAIL_JOBS = 'detail_jobs';
export const detailJobs = () => async (dispatch, getState, api) => {
  const res = await api.get('/job/bihar-bpsc-apo-admit-card-2021');
  dispatch({
    type: DETAIL_JOBS,
    payload: res
  });
};

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/job/jobs_notification');

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};


export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');

  dispatch({
    type: FETCH_ADMINS,
    payload: res
  });
};
