import React from 'react';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RunnerPostPage from './pages/RunnerPostDetailPage';
import RunnerPostCreatePage from './pages/RunnerPostCreatePage';
import LoginPage from './pages/LoginPage';
<<<<<<< HEAD
import CreationResultPage from './pages/CreationResultPage';
=======
>>>>>>> dev/FE
import MyPage from './pages/MyPage';
import GithubCallbackPage from './pages/GithubCallbackPage';
import ProfileEditPage from './pages/ProfileEditPage';
import SupporterSelectPage from './pages/SupporterSelectPage';
import SupporterFeedbackPage from './pages/SupporterFeedbackPage';
import SupporterProfilePage from './pages/SupporterProfilePage';
import RunnerProfilePage from './pages/RunnerProfilePage';
<<<<<<< HEAD
=======
import NoticePage from './pages/NoticePage';
>>>>>>> dev/FE

export const ROUTER_PATH = {
  MAIN: '/',
  RUNNER_POST: '/runner-post/:runnerPostId',
  RUNNER_POST_CREATE: '/runner-post-create/',
  SUPPORTER_SELECT: '/supporter-select/:runnerPostId',
  MY_PAGE: '/my-page',
  LOGIN: '/login',
  NOT_FOUND: '/*',
<<<<<<< HEAD
  RESULT: '/result',
=======
>>>>>>> dev/FE
  RUNNER_PROFILE: '/runner-profile/:runnerId',
  SUPPORTER_PROFILE: '/supporter-profile/:supporterId',
  PROFILE_EDIT: '/profile-edit',
  SUPPORTER_FEEDBACK: '/supporter-feedback/:runnerPostId/:supporterId',
<<<<<<< HEAD
  GITHUB_CALLBACK: '/oauth/github/callback', // Authorization callback URL?
=======
  GITHUB_CALLBACK: '/oauth/github/callback',
  NOTICE: '/notice',
>>>>>>> dev/FE
};

export const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: ROUTER_PATH.RUNNER_POST,
          element: <RunnerPostPage />,
        },
        {
          path: ROUTER_PATH.RUNNER_POST_CREATE,
          element: <RunnerPostCreatePage />,
        },
        {
          path: ROUTER_PATH.LOGIN,
          element: <LoginPage />,
        },
        {
<<<<<<< HEAD
          path: ROUTER_PATH.RESULT,
          element: <CreationResultPage />,
        },
        {
=======
>>>>>>> dev/FE
          path: ROUTER_PATH.MY_PAGE,
          element: <MyPage />,
        },
        {
          path: ROUTER_PATH.PROFILE_EDIT,
          element: <ProfileEditPage />,
        },
        { path: ROUTER_PATH.GITHUB_CALLBACK, element: <GithubCallbackPage /> },
        {
          path: ROUTER_PATH.SUPPORTER_SELECT,
          element: <SupporterSelectPage />,
        },
        {
          path: ROUTER_PATH.SUPPORTER_FEEDBACK,
          element: <SupporterFeedbackPage />,
        },
        {
          path: ROUTER_PATH.RUNNER_PROFILE,
          element: <RunnerProfilePage />,
        },
        {
          path: ROUTER_PATH.SUPPORTER_PROFILE,
          element: <SupporterProfilePage />,
        },
<<<<<<< HEAD
=======
        {
          path: ROUTER_PATH.NOTICE,
          element: <NoticePage />,
        },
>>>>>>> dev/FE
      ],
    },
  ],
  {
    basename: '/',
  },
);
