import React from 'react';
import { styled } from 'styled-components';
import { usePageRouter } from '@/hooks/usePageRouter';
import Avatar from '@/components/common/Avatar/Avatar';
import { RunnerPost } from '@/types/runnerPost';
import Label from '@/components/common/Label/Label';
import { REVIEW_STATUS_LABEL_TEXT } from '@/constants';
import eyeIcon from '@/assets/eye-icon.svg';
import applicantIcon from '@/assets/applicant-icon.svg';
<<<<<<< HEAD
=======
import useViewport from '@/hooks/useViewport';
>>>>>>> dev/FE

const RunnerPostItem = ({
  runnerPostData: { runnerPostId, title, deadline, tags, runnerProfile, watchedCount, applicantCount, reviewStatus },
}: {
  runnerPostData: RunnerPost;
}) => {
<<<<<<< HEAD
=======
  const { isMobile } = useViewport();

>>>>>>> dev/FE
  const { goToRunnerPostPage } = usePageRouter();

  const handlePostClick = () => {
    goToRunnerPostPage(runnerPostId);
  };

  return (
    <S.RunnerPostItemContainer onClick={handlePostClick}>
      <S.LeftSideContainer>
        <S.PostTitle>{title}</S.PostTitle>
        <S.DeadLineContainer>
          <S.DeadLine>{deadline.replace('T', ' ')} 까지</S.DeadLine>
          <Label
<<<<<<< HEAD
            colorTheme={reviewStatus === 'NOT_STARTED' ? 'WHITE' : reviewStatus === 'IN_PROGRESS' ? 'RED' : 'GRAY'}
=======
            height={isMobile ? '18px' : '22px'}
            colorTheme={reviewStatus === 'NOT_STARTED' ? 'WHITE' : reviewStatus === 'IN_PROGRESS' ? 'RED' : 'GRAY'}
            fontSize={isMobile ? '10px' : ''}
>>>>>>> dev/FE
          >
            {REVIEW_STATUS_LABEL_TEXT[reviewStatus]}
          </Label>
        </S.DeadLineContainer>
        <S.TagContainer>
          {tags.map((tag, index) => (
            <S.Tag key={index}>#{tag}</S.Tag>
          ))}
        </S.TagContainer>
      </S.LeftSideContainer>
      <S.RightSideContainer>
        {runnerProfile ? (
          <>
            <S.ProfileContainer>
<<<<<<< HEAD
              <Avatar width="50px" height="50px" imageUrl={runnerProfile.imageUrl} />
=======
              <Avatar
                width={isMobile ? '30px' : '50px'}
                height={isMobile ? '30px' : '50px'}
                imageUrl={runnerProfile.imageUrl}
              />
>>>>>>> dev/FE
              <S.ProfileName>{runnerProfile.name}</S.ProfileName>
            </S.ProfileContainer>
          </>
        ) : null}
        <S.ChatViewContainer>
          <S.statisticsContainer>
            <S.statisticsImage src={eyeIcon} />
            <S.statisticsText>{watchedCount}</S.statisticsText>
            <S.statisticsImage src={applicantIcon} />
            <S.statisticsText>{applicantCount}</S.statisticsText>
          </S.statisticsContainer>
        </S.ChatViewContainer>
      </S.RightSideContainer>
    </S.RunnerPostItemContainer>
  );
};

export default RunnerPostItem;

const S = {
  RunnerPostItemContainer: styled.li`
    display: flex;
    justify-content: space-between;

<<<<<<< HEAD
    width: 1200px;
    height: 206px;
=======
    min-width: 340px;
    width: 100%;
    height: max-content;
>>>>>>> dev/FE
    padding: 35px 40px;

    border: 0.5px solid var(--gray-500);
    border-radius: 12px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);

    cursor: pointer;

    &:hover {
      transition: all 0.3s ease;
      transform: scale(1.015);
      outline: 1.5px solid var(--baton-red);
    }
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      padding: 25px 30px;
    }
>>>>>>> dev/FE
  `,

  PostTitle: styled.p`
    margin-bottom: 15px;

    font-size: 28px;
    font-weight: 700;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
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
    margin-bottom: 60px;

    color: var(--gray-600);
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      margin-bottom: 40px;

      font-size: 12px;
    }
>>>>>>> dev/FE
  `,

  TagContainer: styled.div`
    & span {
      margin-right: 10px;

      font-size: 14px;
      color: var(--gray-600);
    }
  `,
<<<<<<< HEAD
  Tag: styled.span``,

  LeftSideContainer: styled.div``,
=======

  Tag: styled.span``,

  LeftSideContainer: styled.div``,

>>>>>>> dev/FE
  RightSideContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
  `,

  ProfileContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    margin-bottom: 30px;
    gap: 10px;
  `,

  ProfileName: styled.p`
    min-width: 50px;

    font-size: 14px;
    text-align: center;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      min-width: 30px;

      font-size: 12px;
    }
>>>>>>> dev/FE
  `,

  ChatViewContainer: styled.div`
    display: flex;

    gap: 10px;

    font-size: 12px;
  `,

  statisticsContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    margin-bottom: auto;

    & > p {
      color: #a4a4a4;
    }
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      gap: 2px;
    }
>>>>>>> dev/FE
  `,

  statisticsImage: styled.img`
    width: 20px;

    margin-left: 8px;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      width: 15px;
    }
>>>>>>> dev/FE
  `,

  statisticsText: styled.p`
    font-size: 14px;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      font-size: 10px;
    }
>>>>>>> dev/FE
  `,
};
