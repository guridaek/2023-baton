<<<<<<< HEAD
import { getRequest } from '@/api/fetch';
import RunnerPostList from '@/components/RunnerPost/RunnerPostList/RunnerPostList';
import Button from '@/components/common/Button/Button';
import { ERROR_DESCRIPTION, ERROR_TITLE } from '@/constants/message';
import { ToastContext } from '@/contexts/ToastContext';
import { usePageRouter } from '@/hooks/usePageRouter';
import { useToken } from '@/hooks/useToken';
import Layout from '@/layout/Layout';
import { GetRunnerPostResponse, RunnerPost } from '@/types/runnerPost';
=======
import Banner from '@/components/Banner/Banner';
import RunnerPostList from '@/components/RunnerPost/RunnerPostList/RunnerPostList';
import RunnerPostSearchBox from '@/components/RunnerPost/RunnerPostSearchBox/RunnerPostSearchBox';
import Button from '@/components/common/Button/Button';
import { ERROR_DESCRIPTION, ERROR_TITLE } from '@/constants/message';
import { ToastContext } from '@/contexts/ToastContext';
import { useFetch } from '@/hooks/useFetch';
import { useLogin } from '@/hooks/useLogin';
import { usePageRouter } from '@/hooks/usePageRouter';
import useViewport from '@/hooks/useViewport';
import Layout from '@/layout/Layout';
import { GetRunnerPostResponse, ReviewStatus, RunnerPost } from '@/types/runnerPost';
import { Tag } from '@/types/tags';
>>>>>>> dev/FE
import React, { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components';

const MainPage = () => {
  const { goToRunnerPostCreatePage, goToLoginPage } = usePageRouter();

<<<<<<< HEAD
  const { getToken } = useToken();

  const { showErrorToast } = useContext(ToastContext);
=======
  const { isLogin } = useLogin();
  const { getRequest } = useFetch();
  const { showErrorToast } = useContext(ToastContext);
  const { isMobile } = useViewport();
>>>>>>> dev/FE

  const [runnerPostList, setRunnerPostList] = useState<RunnerPost[]>([]);
  const [isLast, setIsLast] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
<<<<<<< HEAD

  const handleClickMoreButton = () => {
    setPage(page + 1);

    getRunnerPost();
  };

  useEffect(() => {
    getRunnerPost();
  }, []);

  const handleClickPostButton = () => {
    if (getToken()) {
      goToRunnerPostCreatePage();
=======
  const [reviewStatus, setReviewStatus] = useState<ReviewStatus>('NOT_STARTED');
  const [tag, setTag] = useState<string>('');
  const [searchedTags, setSearchedTags] = useState<Tag[]>([]);

  const handleClickMoreButton = () => {
    getNextPage();
  };

  useEffect(() => {
    searchPosts(reviewStatus);
  }, []);

  const handleClickPostButton = () => {
    if (!isLogin) {
      showErrorToast({ title: ERROR_TITLE.NO_PERMISSION, description: ERROR_DESCRIPTION.NO_TOKEN });
      goToLoginPage();
>>>>>>> dev/FE

      return;
    }

<<<<<<< HEAD
    goToLoginPage();
  };

  const getRunnerPost = () => {
    getRequest(`/posts/runner?size=10&page=${page}`)
      .then(async (response) => {
        const data: GetRunnerPostResponse = await response.json();
        setRunnerPostList([...runnerPostList, ...data.data]);
        setIsLast(data.pageInfo.isLast);
      })
      .catch((error: Error) => showErrorToast({ description: error.message, title: ERROR_TITLE.REQUEST }));
  };

  return (
    <Layout>
      <S.TitleWrapper>
        <S.Title>서포터를 찾고 있어요 👀</S.Title>
      </S.TitleWrapper>
      <S.ControlPanelContainer>
        <S.LeftSideContainer>
          {/* <S.FormContainer>
            <S.SearchLabel htmlFor="search-tag">#tags</S.SearchLabel>
            <S.SearchInput id="search-tag" type="text" placeholder="태그명 검색 (최대 5개 설정 가능)" />
          </S.FormContainer>
          <S.TagContainer>
            <Tag>자바</Tag>
            <Tag>javascript</Tag>
            <Tag>react</Tag>
          </S.TagContainer> */}
        </S.LeftSideContainer>

        <Button onClick={handleClickPostButton} colorTheme="WHITE" fontSize="18px" ariaLabel="리뷰 요청 글 작성하기">
          리뷰 요청 글 작성하기
        </Button>
      </S.ControlPanelContainer>
      <S.RunnerPostContainer>
        <RunnerPostList posts={runnerPostList} />
        {!isLast && (
          <Button colorTheme="RED" width="1200px" height="55px" onClick={handleClickMoreButton}>
            더보기
          </Button>
        )}
      </S.RunnerPostContainer>
=======
    goToRunnerPostCreatePage();
  };

  const getNextPage = () => {
    const params = new URLSearchParams([
      ['size', '10'],
      ['page', (page + 1).toString()],
      ['reviewStatus', reviewStatus],
    ]);

    if (tag) {
      params.set('tagName', tag);
    }

    setIsLast(true);

    getRequest(`/posts/runner/tags/search?${params.toString()}`, async (response) => {
      const data: GetRunnerPostResponse = await response.json();

      setRunnerPostList([...runnerPostList, ...data.data]);
      setPage(data.pageInfo.currentPage);
      setIsLast(data.pageInfo.isLast);
    });
  };

  const searchPosts = (reviewStatus: ReviewStatus, tag?: string) => {
    const params = new URLSearchParams([
      ['size', '10'],
      ['page', '1'],
      ['reviewStatus', reviewStatus],
    ]);

    if (tag) {
      params.set('tagName', tag);
      setTag(tag);
    }

    setIsLast(true);
    setRunnerPostList([]);

    getRequest(`/posts/runner/tags/search?${params.toString()}`, async (response) => {
      const data: GetRunnerPostResponse = await response.json();

      setRunnerPostList(() => [...data.data]);
      setPage(data.pageInfo.currentPage);
      setIsLast(data.pageInfo.isLast);
    });
  };

  return (
    <Layout maxWidth="none">
      <Banner />
      <S.MainContainer>
        <S.TitleWrapper>
          <S.Title>서포터를 찾고 있어요 👀</S.Title>
        </S.TitleWrapper>
        <S.ControlPanelContainer>
          <S.LeftSideContainer>
            <RunnerPostSearchBox
              tag={tag}
              setTag={setTag}
              reviewStatus={reviewStatus}
              setReviewStatus={setReviewStatus}
              searchedTags={searchedTags}
              setSearchedTags={setSearchedTags}
              searchPosts={searchPosts}
            />
          </S.LeftSideContainer>
          <S.RightSideContainer>
            <Button
              width="100%"
              onClick={handleClickPostButton}
              colorTheme="WHITE"
              fontSize={isMobile ? '14px' : '18px'}
              ariaLabel="리뷰 요청 글 작성하기"
            >
              리뷰 요청 글 작성하기
            </Button>
          </S.RightSideContainer>
        </S.ControlPanelContainer>
        <S.RunnerPostContainer>
          <RunnerPostList posts={runnerPostList} />
          <S.MoreButtonWrapper>
            {!isLast && (
              <Button
                colorTheme="RED"
                width={isMobile ? '100%' : '1150px'}
                height="55px"
                onClick={handleClickMoreButton}
              >
                더보기
              </Button>
            )}
          </S.MoreButtonWrapper>
        </S.RunnerPostContainer>
      </S.MainContainer>
>>>>>>> dev/FE
    </Layout>
  );
};

export default MainPage;

const S = {
<<<<<<< HEAD
  TitleWrapper: styled.header`
    margin: 72px 0 53px 0;
  `,
  Title: styled.h1`
    font-size: 36px;
    font-weight: 700;
  `,
=======
  MainContainer: styled.div`
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto;

    @media (max-width: 768px) {
      padding: 0;
    }
  `,

  TitleWrapper: styled.header`
    margin: 72px 0 53px 0;

    @media (max-width: 768px) {
      margin: 40px 0 40px 0;
    }
  `,

  Title: styled.h1`
    font-size: 36px;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  `,

>>>>>>> dev/FE
  ControlPanelContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;

    margin-bottom: 36px;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      align-items: start;
      flex-direction: column;

      gap: 18px;
    }

    @media (max-height: 768px) {
      margin-bottom: 24px;
    }
>>>>>>> dev/FE
  `,

  LeftSideContainer: styled.div`
    display: flex;
    align-items: end;
    gap: 20px;
  `,

<<<<<<< HEAD
  FormContainer: styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
=======
  RightSideContainer: styled.div`
    align-self: flex-end;
>>>>>>> dev/FE
  `,

  SearchInput: styled.input`
    width: 263px;
    height: 40px;
    padding: 10px 10px;

    font-size: 14px;

    border-radius: 6px;
    border: 1px solid var(--gray-500);
  `,

  SearchLabel: styled.label`
    margin-bottom: 12px;

    font-size: 18px;
  `,

  TagContainer: styled.div`
    display: flex;

    margin-bottom: 3px;
    gap: 10px;
  `,

<<<<<<< HEAD
=======
  MoreButtonWrapper: styled.div`
    max-width: 1200px;
    width: 100%;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      min-width: 340px;
    }
  `,

>>>>>>> dev/FE
  RunnerPostContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  `,
};
