import { useNavigate } from 'react-router-dom';
import { ROUTER_PATH } from '../router';

export const usePageRouter = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate(ROUTER_PATH.MAIN);
  };

  const goToRunnerPostPage = (runnerPostId: number) => {
    navigate(ROUTER_PATH.RUNNER_POST.replace(':runnerPostId', runnerPostId.toString()));
  };

  const goToRunnerPostCreatePage = () => {
    navigate(ROUTER_PATH.RUNNER_POST_CREATE);
  };

  const goToLoginPage = () => {
    navigate(ROUTER_PATH.LOGIN);
  };

  const goToMyPage = () => {
    navigate(ROUTER_PATH.MY_PAGE);
  };

  const goToCreationResultPage = () => {
    navigate(ROUTER_PATH.RESULT);
  };

  const goToSupporterProfilePage = (supporterId: number) => {
    navigate(ROUTER_PATH.SUPPORTER_PROFILE.replace(':supporterId', supporterId.toString()));
  };

  const goToRunnerProfilePage = (runnerId: number) => {
    navigate(ROUTER_PATH.RUNNER_PROFILE.replace(':runnerId', runnerId.toString()));
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    goToMainPage,
    goToRunnerPostPage,
    goToRunnerPostCreatePage,
    goToLoginPage,
    goToMyPage,
    goToCreationResultPage,
    goToSupporterProfilePage,
    goToRunnerProfilePage,
    goBack,
  };
};