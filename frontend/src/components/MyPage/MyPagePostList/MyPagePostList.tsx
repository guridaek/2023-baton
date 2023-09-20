import React from 'react';
import { styled } from 'styled-components';
import { GetMyPagePostResponse, MyPagePost } from '@/types/myPage';
import MyPagePostItem from '../MyPagePostItem/MyPagePostItem';

interface Props {
  filteredPostList: MyPagePost[];
  isRunner: boolean;
<<<<<<< HEAD
}

const MyPagePostList = ({ filteredPostList, isRunner }: Props) => {
=======
  handleDeletePost: (handleDeletePost: number) => void;
}

const MyPagePostList = ({ filteredPostList, isRunner, handleDeletePost }: Props) => {
>>>>>>> dev/FE
  if (filteredPostList?.length === 0) return <p>게시글 정보가 없습니다.</p>;

  return (
    <S.RunnerPostWrapper>
      {filteredPostList?.map((item: MyPagePost) => (
<<<<<<< HEAD
        <MyPagePostItem key={item.runnerPostId} {...item} isRunner={isRunner} />
=======
        <MyPagePostItem handleDeletePost={handleDeletePost} key={item.runnerPostId} {...item} isRunner={isRunner} />
>>>>>>> dev/FE
      ))}
    </S.RunnerPostWrapper>
  );
};

export default MyPagePostList;

const S = {
  RunnerPostWrapper: styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
<<<<<<< HEAD

    gap: 30px;
=======
    gap: 30px;

    width: 100%;

    @media (max-width: 768px) {
      gap: 20px;
    }
>>>>>>> dev/FE
  `,
};
