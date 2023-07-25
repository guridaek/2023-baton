import { ReviewStatus } from '@/types/runnerPost';

export const BATON_BASE_URL = 'http://15.164.179.87:80/api/v1';

export const REVIEW_STATUS_LABEL_TEXT: { [key in ReviewStatus]: string } = {
  NOT_STARTED: '리뷰 대기중',
  IN_PROGRESS: '리뷰 진행중',
  DONE: '리뷰 완료',
};
