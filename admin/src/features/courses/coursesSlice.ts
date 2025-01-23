import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addCourse, deleteCourse, fetchCourse, fetchCourses, updateCourse } from './coursesThunk';

interface Course {
  id: number;
  // Другие свойства курса
  [key: string]: any;
}

interface CoursesState {
  courses: Course[];
  course: Course | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  totalPages?: number;
  currentPage?: number;
}

const initialState: CoursesState = {
  courses: [],
  course: null,
  status: 'idle',
  error: null,
  totalPages: undefined,
  currentPage: undefined,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCourses.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action:PayloadAction<{courses:Course[], totalPages: number, currentPage: number}>) => {
        state.status = 'succeeded';
        state.courses = action.payload.courses;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message || null;
      })
      .addCase(fetchCourse.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchCourse.fulfilled, (state, action:PayloadAction<Course>) => {
        state.status = 'succeeded';
        state.course = action.payload;
      })
      .addCase(fetchCourse.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error?.message || null;
      })
      .addCase(updateCourse.fulfilled, (state, action:PayloadAction<Course>) => {
        const index = state.courses.findIndex(course => course.id === action.payload.id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      .addCase(deleteCourse.fulfilled, (state, action:PayloadAction<number>) => {
        state.courses = state.courses.filter(course => course.id !== action.payload);
    });
  },
});

export default coursesSlice.reducer;