import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api';
// import { useParams } from 'react-router-dom';
import { failureToast, successToast } from '../../Authentication/Toast/Toast';

export const UPDATEUSER = createAsyncThunk(
  'user/update',
  async ({ upload_photo, first_name, last_name, tagline, id, bio }, { rejectWithValue }) => {
    try {
      const { data } = await api.patch(`users/update_user/${id}`, {
        upload_photo,
        first_name,
        last_name,
        tagline,
        bio
      });
      successToast(`${data.message}`);
      console.log(data, 'data');
      return data;
    } catch (error) {
      console.log(error.response, 'error');
      failureToast(`${error.response?.data?.message}`);
      return rejectWithValue(error.response.data);
    }
  }
);

// export const GETPROFILE = createAsyncThunk('user/getProfile', async ({data}, {rejectWithValue}) =>{
//   try{
//     const {userData} = await api.get("blogs/profile/user-53b91e4e7bb211eda296a7645d2b13e4", {

//     })
//   }
// })
