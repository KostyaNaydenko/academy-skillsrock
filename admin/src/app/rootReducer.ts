import { combineReducers } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import coursesReducer from '../features/courses/coursesSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import permissionReducer from '../features/permissions/permissionSlice';
import permissionsReducer from '../features/permissions/permissionsSlice';
import userReducer from '../features/users/userSlice';
import usersReducer from '../features/users/usersSlice';
import { shopCardsReducer } from '../pages/Shop/slices';
import { shopCartReducer } from '../pages/Shop/slices';

export const rootReducer = combineReducers({
  shopCards: shopCardsReducer,
  shopCart: shopCartReducer,
  auth: authReducer,
  dashboard: dashboardReducer,
  courses: coursesReducer,
  permissions: permissionsReducer,
  permission: permissionReducer,
  users: usersReducer,
  user: userReducer,
});
