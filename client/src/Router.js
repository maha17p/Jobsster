import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AboutPage,
  AddJobPage,
  AllJobProviderPage,
  AllJobSeekerPage,
  ContactPage,
  ErrorPage,
  HomePage,
  JobDescription,
  MyJobs,
  ProfilePage,
  ProtectedRoute,
  RegisterPage,
  RolePage,
  SharedLayoutPage,
} from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/role" element={<RolePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/all_job/job_description/:id" element={<JobDescription />} />
      <Route
        path="/job_seeker"
        element={
          <ProtectedRoute>
            <SharedLayoutPage />
          </ProtectedRoute>
        }
      >
        <Route path="all_job" element={<AllJobSeekerPage />} />
        <Route path="my_jobs" element={<MyJobs />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
      <Route
        path="/job_provider"
        element={
          <ProtectedRoute>
            <SharedLayoutPage />
          </ProtectedRoute>
        }
      >
        <Route path="add_job" element={<AddJobPage />} />
        <Route path="all_job" element={<AllJobProviderPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>

      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
