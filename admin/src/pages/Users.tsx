import { Button, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { fetchUsers } from '../features/users/usersThunk';
import { AppState } from '../app/store';

export const Users = () => {
  const dispatch = useDispatch();
  const { users = [], status } = useSelector((state: AppState) => state.users);

  const columns = [
    { field: 'first_name', headerName: 'First Name', width: 130 },
    { field: 'last_name', headerName: 'Last Name', width: 250 },
    { field: 'role', headerName: 'Role', width: 250 },
    { field: 'username', headerName: 'Username', width: 250 },
    { field: 'modules', headerName: 'Modules', width: 150 },
    { field: 'instructor', headerName: 'Instructor', width: 150 },
    { field: 'students', headerName: 'students', width: 150 },
  ];

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const navigate = useNavigate();

  const createUpdateUser = (userId: number) => {
    let path = '/dashboard/add-user';
    if (userId) path = `/dashboard/update-user/${userId}`;
    navigate(path);
  };

  const paginationModel = { page: 0, pageSize: 5 };

  const getRowId = row => {
    return row._id;
  };
  return (
    <div>
      <div className="usersTitle">
        <h1>Users List</h1>
        <Button
          onClick={() => {
            createUpdateUser();
          }}
          variant="contained"
        >
          Create New User
        </Button>
      </div>

      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          getRowId={getRowId}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};
