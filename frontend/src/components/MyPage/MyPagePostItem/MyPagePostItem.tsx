import Label from '@/components/common/Label/Label';
import { REVIEW_STATUS_LABEL_TEXT } from '@/constants';
import { usePageRouter } from '@/hooks/usePageRouter';
import React from 'react';
import styled from 'styled-components';
import eyeIcon from '@/assets/eye-icon.svg';
import applicantIcon from '@/assets/applicant-icon.svg';
import { MyPagePost } from '@/types/myPage';
import MyPagePostButton from '../MyPagePostButton/MyPagePostButton';
<<<<<<< HEAD

interface Props extends MyPagePost {
  isRunner: boolean;
=======
import useViewport from '@/hooks/useViewport';

interface Props extends MyPagePost {
  isRunner: boolean;
  handleDeletePost: (handleDeletePost: number) => void;
>>>>>>> dev/FE
}

const MyPagePostItem = ({
  runnerPostId,
  title,
  deadline,
  reviewStatus,
  tags,
  watchedCount,
  applicantCount,
  isRunner,
  supporterId,
<<<<<<< HEAD
}: Props) => {
  const { goToRunnerPostPage } = usePageRouter();

=======
  handleDeletePost,
}: Props) => {
  const { goToRunnerPostPage } = usePageRouter();

  const { isMobile } = useViewport();

>>>>>>> dev/FE
  const handlePostClick = () => {
    goToRunnerPostPage(runnerPostId);
  };

  return (
    <S.RunnerPostItemContainer onClick={handlePostClick}>
<<<<<<< HEAD
      <S.LeftSideContainer>
        <S.PostTitle>{title}</S.PostTitle>
        <S.DeadLineContainer>
          <S.DeadLine>{deadline} 까지</S.DeadLine>
          <Label
            colorTheme={reviewStatus === 'NOT_STARTED' ? 'WHITE' : reviewStatus === 'IN_PROGRESS' ? 'RED' : 'GRAY'}
          >
            {REVIEW_STATUS_LABEL_TEXT[reviewStatus]}
          </Label>
        </S.DeadLineContainer>
=======
      <S.SideContainer>
        <S.PostTitle>{title}</S.PostTitle>
        <S.statisticsContainer>
          <S.statisticsImage src={eyeIcon} />
          <S.statisticsText>{watchedCount}</S.statisticsText>
          <S.statisticsImage src={applicantIcon} />
          <S.statisticsText>{applicantCount}</S.statisticsText>
        </S.statisticsContainer>
      </S.SideContainer>
      <S.DeadLineContainer>
        <S.DeadLine>{deadline.replace('T', ' ')} 까지</S.DeadLine>
        <Label
          height={isMobile ? '18px' : '22px'}
          colorTheme={reviewStatus === 'NOT_STARTED' ? 'WHITE' : reviewStatus === 'IN_PROGRESS' ? 'RED' : 'GRAY'}
          fontSize={isMobile ? '10px' : ''}
        >
          {REVIEW_STATUS_LABEL_TEXT[reviewStatus]}
        </Label>
      </S.DeadLineContainer>

      <S.BottomContainer>
>>>>>>> dev/FE
        <S.TagContainer>
          {tags.map((tag, index) => (
            <S.Tag key={index}>#{tag}</S.Tag>
          ))}
        </S.TagContainer>
<<<<<<< HEAD
      </S.LeftSideContainer>
      <S.RightSideContainer>
        <S.ChatViewContainer>
          <S.statisticsContainer>
            <S.statisticsImage src={eyeIcon} />
            <S.statisticsText>{watchedCount}</S.statisticsText>
            <S.statisticsImage src={applicantIcon} />
            <S.statisticsText>{applicantCount}</S.statisticsText>
          </S.statisticsContainer>
        </S.ChatViewContainer>
        <MyPagePostButton
=======

        <MyPagePostButton
          handleDeletePost={handleDeletePost}
          applicantCount={applicantCount}
>>>>>>> dev/FE
          runnerPostId={runnerPostId}
          isRunner={isRunner}
          reviewStatus={reviewStatus}
          supporterId={supporterId}
        />
<<<<<<< HEAD
      </S.RightSideContainer>
=======
      </S.BottomContainer>
>>>>>>> dev/FE
    </S.RunnerPostItemContainer>
  );
};

export default MyPagePostItem;

const S = {
  RunnerPostItemContainer: styled.li`
    display: flex;
<<<<<<< HEAD
    justify-content: space-between;

    width: 1200px;
    height: 206px;
=======
    flex-direction: column;
    gap: 20px;

    min-width: 340px;
    width: 100%;
>>>>>>> dev/FE
    padding: 35px 40px;

    border: 0.5px solid var(--gray-500);
    border-radius: 12px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);

    cursor: pointer;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      padding: 25px 27px;
      gap: 12px;
    }

    & button:hover {
      transition: all 0.3s ease;
      background-color: var(--baton-red);
      color: var(--white-color);
    }
  `,

  SideContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;

    gap: 12px;
>>>>>>> dev/FE
  `,

  PostTitle: styled.p`
    margin-bottom: 15px;

    font-size: 28px;
    font-weight: 700;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      margin-bottom: 0;

      font-size: 16px;
    }
>>>>>>> dev/FE
  `,

  DeadLineContainer: styled.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
  `,

  DeadLine: styled.p`
<<<<<<< HEAD
    margin-bottom: 60px;

    color: var(--gray-600);
  `,

  TagContainer: styled.div`
    & span {
      margin-right: 10px;

      font-size: 14px;
      color: var(--gray-600);
    }
  `,
  Tag: styled.span``,

  LeftSideContainer: styled.div``,

  RightSideContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 15px;

    & button:hover {
      transition: all 0.3s ease;
      background-color: var(--baton-red);
      color: var(--white-color);
    }
  `,

  ChatViewContainer: styled.div`
    display: flex;
    justify-content: end;

    gap: 10px;

    font-size: 12px;
=======
    margin-bottom: 40px;

    color: var(--gray-600);

    @media (max-width: 768px) {
      margin-bottom: 15px;

      font-size: 12px;
    }
  `,

  TagContainer: styled.div``,

  Tag: styled.span`
    margin-right: 10px;

    font-size: 14px;
    color: var(--gray-600);

    @media (max-width: 768px) {
      font-size: 14px;
    }
  `,

  BottomContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: start;
    }
>>>>>>> dev/FE
  `,

  statisticsContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    margin-bottom: auto;

    & > p {
      color: #a4a4a4;
    }
  `,

  statisticsImage: styled.img`
    width: 20px;

    margin-left: 8px;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      width: 15px;
      margin-left: 4px;
    }
>>>>>>> dev/FE
  `,

  statisticsText: styled.p`
    font-size: 14px;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      font-size: 12px;
    }
>>>>>>> dev/FE
  `,
};
