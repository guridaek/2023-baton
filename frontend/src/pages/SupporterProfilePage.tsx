<<<<<<< HEAD
import { getRequest } from '@/api/fetch';
=======
>>>>>>> dev/FE
import TechLabel from '@/components/TechLabel/TechLabel';
import Avatar from '@/components/common/Avatar/Avatar';
import Button from '@/components/common/Button/Button';
import Layout from '@/layout/Layout';
import { GetSupporterProfileResponse } from '@/types/profile';
<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> dev/FE
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import githubIcon from '@/assets/github-icon.svg';
import { GetRunnerPostResponse } from '@/types/runnerPost';
import RunnerPostItem from '@/components/RunnerPost/RunnerPostItem/RunnerPostItem';
import { ToastContext } from '@/contexts/ToastContext';
<<<<<<< HEAD
import { ERROR_TITLE } from '@/constants/message';
=======
import { useFetch } from '@/hooks/useFetch';
import useViewport from '@/hooks/useViewport';
>>>>>>> dev/FE

const SupporterProfilePage = () => {
  const [supporterProfile, setSupporterProfile] = useState<GetSupporterProfileResponse | null>(null);
  const [supporterProfilePost, setSupporterProfilePost] = useState<GetRunnerPostResponse | null>(null);

  const { supporterId } = useParams();

<<<<<<< HEAD
  const { showErrorToast } = useContext(ToastContext);
=======
  const { getRequest } = useFetch();

  const { isMobile } = useViewport();
>>>>>>> dev/FE

  useEffect(() => {
    getProfile();
    getPost();
  }, [supporterId]);

  const getProfile = () => {
<<<<<<< HEAD
    getRequest(`/profile/supporter/${supporterId}`)
      .then(async (response) => {
        const data: GetSupporterProfileResponse = await response.json();

        setSupporterProfile(data);
      })
      .catch((error: Error) => showErrorToast({ description: error.message, title: ERROR_TITLE.REQUEST }));
  };

  const getPost = async () => {
    getRequest(`/posts/runner/search/${supporterId}`)
      .then(async (response) => {
        const data: GetRunnerPostResponse = await response.json();

        setSupporterProfilePost(data);
      })
      .catch((error: Error) => showErrorToast({ description: error.message, title: ERROR_TITLE.REQUEST }));
=======
    getRequest(`/profile/supporter/${supporterId}`, async (response) => {
      const data: GetSupporterProfileResponse = await response.json();

      setSupporterProfile(data);
    });
  };

  const getPost = async () => {
    if (supporterId === undefined || typeof Number(supporterId) !== 'number') return;

    const params = new URLSearchParams([
      ['supporterId', supporterId],
      ['reviewStatus', 'DONE'],
    ]);

    getRequest(`/posts/runner/search?${params.toString()}`, async (response) => {
      const data: GetRunnerPostResponse = await response.json();

      setSupporterProfilePost(data);
    });
>>>>>>> dev/FE
  };

  return (
    <Layout>
      <S.ProfileContainer>
        <S.InfoContainer>
          <Avatar
            imageUrl={supporterProfile?.imageUrl || 'https://via.placeholder.com/150'}
            width="100px"
            height="100px"
          />
          <S.InfoDetailContainer>
            <S.Name>{supporterProfile?.name}</S.Name>
            <S.Company>{supporterProfile?.company}</S.Company>
            <S.TechLabel>
              {supporterProfile?.technicalTags.map((tag) => (
                <TechLabel key={tag} tag={tag} />
              ))}
            </S.TechLabel>
          </S.InfoDetailContainer>
        </S.InfoContainer>
      </S.ProfileContainer>

      <S.IntroductionContainer>
        <S.Introduction>{supporterProfile?.introduction}</S.Introduction>
<<<<<<< HEAD
        <Button width="127px" height="43px" colorTheme="BLACK" fontWeight={700}>
          <S.Anchor href={supporterProfile?.githubUrl} target="_blank">
            <img src={githubIcon} />
            <S.GoToGitHub>Github</S.GoToGitHub>
          </S.Anchor>
        </Button>
=======
        <S.GithubButtonWrapper>
          <Button fontSize={isMobile ? '16px' : '20px'} width="127px" height="43px" colorTheme="BLACK" fontWeight={700}>
            <S.Anchor href={supporterProfile?.githubUrl} target="_blank">
              <img src={githubIcon} />
              <S.GoToGitHub>Github</S.GoToGitHub>
            </S.Anchor>
          </Button>
        </S.GithubButtonWrapper>
>>>>>>> dev/FE
      </S.IntroductionContainer>

      <S.ReviewCountWrapper>
        <S.ReviewCountTitle>완료된 리뷰</S.ReviewCountTitle>
<<<<<<< HEAD
        <S.ReviewCount>{supporterProfilePost?.data.length}</S.ReviewCount>
      </S.ReviewCountWrapper>
      <S.PostsContainer>
        {supporterProfilePost?.data.map((runnerPostData) => (
=======
        <S.ReviewCount>{supporterProfilePost?.data?.length}</S.ReviewCount>
      </S.ReviewCountWrapper>
      <S.PostsContainer>
        {supporterProfilePost?.data?.map((runnerPostData) => (
>>>>>>> dev/FE
          <RunnerPostItem key={runnerPostData.runnerPostId} runnerPostData={runnerPostData} />
        ))}
      </S.PostsContainer>
    </Layout>
  );
};

export default SupporterProfilePage;

const S = {
  ProfileContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding: 50px 0;
<<<<<<< HEAD
=======

    @media (min-width: 768px) {
      padding: 50px 20px;
    }
>>>>>>> dev/FE
  `,

  InfoContainer: styled.div`
    display: flex;
    align-items: center;

    gap: 20px;
  `,

  InfoDetailContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,

  Name: styled.div`
    font-size: 26px;
    font-weight: 700;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      font-size: 22px;
    }
>>>>>>> dev/FE
  `,

  Company: styled.div`
    font-size: 18px;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      font-size: 16px;
    }
>>>>>>> dev/FE
  `,
  TechLabel: styled.div`
    display: flex;
    gap: 8px;
  `,

  ButtonContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `,

  RunnerSupporterButton: styled.button<{ $isSelected: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 95px;
    height: 38px;
    border-radius: 18px;
    border: 1px solid ${({ $isSelected }) => ($isSelected ? 'white' : 'var(--baton-red)')};

    background-color: ${({ $isSelected }) => ($isSelected ? 'var(--baton-red)' : 'white')};

    color: ${({ $isSelected }) => ($isSelected ? 'white' : 'var(--baton-red)')};
  `,

  IntroductionContainer: styled.div`
    display: flex;
    justify-content: space-between;

    padding: 0 10px;
    margin-bottom: 80px;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 40px;
    }
>>>>>>> dev/FE
  `,

  Introduction: styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 9px 7px;

    margin-left: 40px;
    width: 75%;

    &::before {
      position: absolute;
      content: '';

      left: -30px;
      height: 100%;
      width: 4.5px;
      border-radius: 2px;

      background-color: var(--gray-400);
    }

    font-size: 18px;
    line-height: 1.8;

    white-space: pre-line;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      width: calc(75% + 40px);

      font-size: 14px;
    }
  `,

  GithubButtonWrapper: styled.div`
    margin-left: auto;

    @media (max-width: 768px) {
      padding: 20px 0;
    }
>>>>>>> dev/FE
  `,

  Anchor: styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,

  GoToGitHub: styled.p``,

  PostsContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
<<<<<<< HEAD
=======

    @media (min-width: 768px) {
      padding: 0 20px;
    }
>>>>>>> dev/FE
  `,

  ReviewCountWrapper: styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 40px 20px;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      margin: 0 0 25px 5px;
    }
>>>>>>> dev/FE
  `,

  ReviewCountTitle: styled.span`
    font-size: 30px;
    margin-right: 15px;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      font-size: 22px;
    }
>>>>>>> dev/FE
  `,

  ReviewCount: styled.span`
    font-size: 40px;
    font-weight: 700;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      font-size: 28px;
    }
>>>>>>> dev/FE
  `,
};
