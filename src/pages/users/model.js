import * as usersService from './service';

export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const res = yield call(usersService.fetch, { page });
      const { list, total } = res.data.data
      yield put({
        type: 'save',
        payload: {
          list,
          total,
          page
        },
      });
    },
    *remove({ payload: id }, { call, put }) {
      yield call(usersService.remove, id);
      yield put({ type: 'reload' });
    },
    *patch({ payload: params }, { call, put }) {
      yield call(usersService.patch, params);
      yield put({ type: 'reload' });
    },
    *create({ payload: params }, { call, put }) {
      yield call(usersService.create, params);
      yield put({ type: 'reload' });
    },
    *reload(action, { put, select }) {
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          if (!query) {
            query = { page:1 }
          }
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
