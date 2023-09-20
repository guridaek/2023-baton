<<<<<<< HEAD
import { Candidate, GetSupporterCandidateResponse } from '@/types/supporterCandidate';
=======
import { Candidate } from '@/types/supporterCandidate';
>>>>>>> dev/FE
import React, { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import SupporterCardItem from '../SupporterCardItem/SupporterCardItem';
import { useParams } from 'react-router-dom';
<<<<<<< HEAD
import { useToken } from '@/hooks/useToken';
import { getRequest } from '@/api/fetch';
import { ToastContext } from '@/contexts/ToastContext';
=======
import { ToastContext } from '@/contexts/ToastContext';
import { useFetch } from '@/hooks/useFetch';
import { useLogin } from '@/hooks/useLogin';
import { usePageRouter } from '@/hooks/usePageRouter';
>>>>>>> dev/FE
import { ERROR_DESCRIPTION, ERROR_TITLE } from '@/constants/message';

const SupporterCardList = () => {
  const { runnerPostId } = useParams();

<<<<<<< HEAD
  const { getToken } = useToken();

  const { showErrorToast } = useContext(ToastContext);
=======
  const { isLogin } = useLogin();
  const { getRequestWithAuth } = useFetch();
  const { showErrorToast } = useContext(ToastContext);
  const { goToLoginPage } = usePageRouter();
>>>>>>> dev/FE

  const [supporterList, setSupporterList] = useState<Candidate[]>([]);

  useEffect(() => {
<<<<<<< HEAD
=======
    if (!isLogin) {
      showErrorToast({ title: ERROR_TITLE.REQUEST, description: ERROR_DESCRIPTION.NO_TOKEN });
      goToLoginPage();

      return;
    }
>>>>>>> dev/FE
    getSupporterList();
  }, []);

  const getSupporterList = async () => {
<<<<<<< HEAD
    const token = getToken()?.value;
    if (!token) return;

    getRequest(`/posts/runner/${runnerPostId}/supporters`, token)
      .then(async (response) => {
        const data = await response.json();
        setSupporterList(data.data);
      })
      .catch((error: Error) => {
        const description = error instanceof Error ? error.message : ERROR_DESCRIPTION.UNEXPECTED;
        showErrorToast({ title: ERROR_TITLE.REQUEST, description });
      });
=======
    getRequestWithAuth(`/posts/runner/${runnerPostId}/supporters`, async (response) => {
      const data = await response.json();
      setSupporterList(data.data);
    });
>>>>>>> dev/FE
  };

  return (
    <S.SupporterCardListContainer>
      {supporterList.map((supporter) => (
        <SupporterCardItem key={supporter.supporterId} supporter={supporter} />
      ))}
    </S.SupporterCardListContainer>
  );
};

export default SupporterCardList;

const S = {
  SupporterCardListContainer: styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 80px;
    column-gap: 40px;

    width: 100%;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);

      row-gap: 50px;
      column-gap: 0;
    }
>>>>>>> dev/FE
  `,
};
