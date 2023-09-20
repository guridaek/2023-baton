<<<<<<< HEAD
import { patchRequest } from '@/api/fetch';
=======
>>>>>>> dev/FE
import ConfirmModal from '@/components/ConfirmModal/ConfirmModal';
import TechLabel from '@/components/TechLabel/TechLabel';
import Avatar from '@/components/common/Avatar/Avatar';
import Button from '@/components/common/Button/Button';
<<<<<<< HEAD
import { ERROR_DESCRIPTION, ERROR_TITLE, TOAST_COMPLETION_MESSAGE } from '@/constants/message';
import { ToastContext } from '@/contexts/ToastContext';
import { usePageRouter } from '@/hooks/usePageRouter';
import { useToken } from '@/hooks/useToken';
=======
import { TOAST_COMPLETION_MESSAGE } from '@/constants/message';
import { ToastContext } from '@/contexts/ToastContext';
import { useFetch } from '@/hooks/useFetch';
import { usePageRouter } from '@/hooks/usePageRouter';
import useViewport from '@/hooks/useViewport';
>>>>>>> dev/FE
import { Candidate } from '@/types/supporterCandidate';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

interface Props {
  supporter: Candidate;
}

const SupporterCardItem = ({ supporter }: Props) => {
  const { runnerPostId } = useParams();

<<<<<<< HEAD
  const { getToken } = useToken();
  const { goToMyPage, goToSupporterProfilePage } = usePageRouter();

  const { showErrorToast, showCompletionToast } = useContext(ToastContext);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

=======
  const { goToMyPage, goToSupporterProfilePage } = usePageRouter();
  const { patchRequestWithAuth } = useFetch();

  const { showCompletionToast } = useContext(ToastContext);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { isMobile } = useViewport();

>>>>>>> dev/FE
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const viewProfile = () => {
    goToSupporterProfilePage(supporter.supporterId);
  };

  const selectSupporter = () => {
<<<<<<< HEAD
    const token = getToken()?.value;
    if (!token) return;

    const body = JSON.stringify({ supporterId: supporter.supporterId });

    patchRequest(`/posts/runner/${runnerPostId}/supporters`, token, body)
      .then(async () => {
        showCompletionToast(TOAST_COMPLETION_MESSAGE.SUPPORTER_SELECT);

        goToMyPage();
      })
      .catch((error: Error) =>
        showErrorToast({
          description: error instanceof Error ? error.message : ERROR_DESCRIPTION.UNEXPECTED,
          title: ERROR_TITLE.REQUEST,
        }),
      );
=======
    const body = JSON.stringify({ supporterId: supporter.supporterId });

    patchRequestWithAuth(
      `/posts/runner/${runnerPostId}/supporters`,
      async (response) => {
        showCompletionToast(TOAST_COMPLETION_MESSAGE.SUPPORTER_SELECT);

        goToMyPage();
      },
      body,
    );
>>>>>>> dev/FE
  };

  return (
    <S.SupporterCardItemContainer>
<<<<<<< HEAD
      <S.ProfileContainer>
        <Avatar imageUrl={supporter.imageUrl} width={'80px'} height={'80px'} />
        <S.InfoContainer>
          <S.Name>{supporter.name}</S.Name>
          <S.Company>{supporter.company}</S.Company>
          <S.TechStackContainer>
            {supporter.technicalTags.map((tag) => (
              <TechLabel key={tag} tag={tag} />
            ))}
          </S.TechStackContainer>
        </S.InfoContainer>
        <S.ReviewCountContainer>
          완료된 리뷰
          <S.ReviewCount> {supporter.reviewCount}</S.ReviewCount>
        </S.ReviewCountContainer>
      </S.ProfileContainer>
=======
      <S.ReviewCountContainer>
        완료된 리뷰
        <S.ReviewCount> {supporter.reviewCount}</S.ReviewCount>
      </S.ReviewCountContainer>
      <S.TitleContainer>
        <S.ProfileContainer>
          <Avatar
            imageUrl={supporter.imageUrl}
            width={isMobile ? '60px' : '80px'}
            height={isMobile ? '60px' : '80px'}
          />
          <S.InfoContainer>
            <S.Name>{supporter.name}</S.Name>
            <S.Company>{supporter.company}</S.Company>
          </S.InfoContainer>
        </S.ProfileContainer>
        <S.TechStackContainer>
          {supporter.technicalTags.map((tag) => (
            <TechLabel key={tag} tag={tag} />
          ))}
        </S.TechStackContainer>
      </S.TitleContainer>
>>>>>>> dev/FE
      <S.MessageContainer>
        📮 남긴 메시지
        <S.Message> {supporter.message}</S.Message>
      </S.MessageContainer>
      <S.ButtonContainer>
        <Button colorTheme="BLACK" width="94px" height="35px" fontSize="14px" fontWeight={700} onClick={viewProfile}>
          프로필 보기
        </Button>
        <Button colorTheme="WHITE" width="94px" height="35px" fontSize="14px" fontWeight={700} onClick={openModal}>
          선택하기
        </Button>
      </S.ButtonContainer>
      {isModalOpen && (
        <ConfirmModal
          contents={`정말 ${supporter.name}님을 서포터로 선택하시겠습니까?`}
          closeModal={closeModal}
          handleClickConfirmButton={selectSupporter}
        />
      )}
    </S.SupporterCardItemContainer>
  );
};

export default SupporterCardItem;

const S = {
  SupporterCardItemContainer: styled.div`
    display: flex;
    flex-direction: column;

<<<<<<< HEAD
    height: 500px;

=======
>>>>>>> dev/FE
    padding: 30px 40px 40px 40px;
    border: 1px solid var(--gray-500);
    border-radius: 10px;
    box-shadow: 1px 4px 5px rgba(0, 0, 0, 0.2);
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      padding: 30px 23px;
    }
  `,

  TitleContainer: styled.div`
    height: 175px;

    @media (max-width: 768px) {
      height: 100%;
    }
>>>>>>> dev/FE
  `,

  ProfileContainer: styled.div`
    display: flex;
<<<<<<< HEAD
    flex-wrap: wrap column;
    gap: 20px;

    height: 100px;
=======
    align-items: center;
    flex-wrap: wrap column;
    gap: 20px;

    margin-bottom: 15px;

    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
>>>>>>> dev/FE
  `,

  InfoContainer: styled.div`
    display: flex;
    flex-direction: column;
<<<<<<< HEAD
    gap: 10px;

    height: 100%;
=======
    justify-content: center;
    gap: 10px;
>>>>>>> dev/FE
  `,

  Name: styled.div`
    font-size: 20px;
    font-weight: 700;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      font-size: 16px;
    }
>>>>>>> dev/FE
  `,

  Company: styled.div`
    font-size: 18px;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      font-size: 14px;
    }
>>>>>>> dev/FE
  `,

  ReviewCountContainer: styled.div`
    margin-left: auto;
<<<<<<< HEAD
=======
    margin-bottom: 20px;

    @media (max-width: 768px) {
      margin-bottom: 15px;

      font-size: 14px;
    }
>>>>>>> dev/FE
  `,

  ReviewCount: styled.span`
    font-weight: 700;
  `,

  TechStackContainer: styled.div`
    display: flex;
<<<<<<< HEAD
    gap: 4px;
=======
    flex-wrap: wrap;
    gap: 4px;

    margin-bottom: 55px;

    @media (max-width: 768px) {
      margin-bottom: 45px;
    }
>>>>>>> dev/FE
  `,

  MessageContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    font-size: 18px;
<<<<<<< HEAD
=======
    margin-bottom: 35px;

    @media (max-width: 768px) {
      margin-bottom: 30px;

      font-size: 14px;
    }
>>>>>>> dev/FE
  `,

  Message: styled.div`
    height: 220px;

    padding: 20px;
    border-radius: 5px;

    background-color: var(--gray-100);

    font-size: 16px;
    line-height: 26px;

    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      font-size: 14px;
    }
>>>>>>> dev/FE
  `,

  ButtonContainer: styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;

    margin-top: auto;
  `,
};
