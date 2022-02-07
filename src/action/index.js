import reduxType from '../config/reduxType';
import api from '../api';

export const fetchAllUnit = () => async (dispatch) => {
  const res = await api.get(`/km`);
  dispatch({ type: reduxType.FETCH_ALL_UNIT, payload: res.data.data });
};

export const fetchAllProject = () => async (dispatch) => {
  const res = await api.get(`/project`);
  dispatch({ type: reduxType.FETCH_ALL_PROJECT, payload: res.data.data });
};

export const createProject = (body) => async (dispatch) => {
  const res = await api.post(`/km`, body);
  dispatch({ type: reduxType.CREATE_PROJECT, payload: res.data.data });
};
