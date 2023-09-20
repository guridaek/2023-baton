import InputBox from '@/components/InputBox/InputBox';
import TagInput from '@/components/TagInput/TagInput';
<<<<<<< HEAD
import TextArea from '@/components/Textarea/Textarea';
import Button from '@/components/common/Button/Button';
import { usePageRouter } from '@/hooks/usePageRouter';
import Layout from '@/layout/Layout';
import React, { useContext, useState } from 'react';
import { styled } from 'styled-components';
import { CreateRunnerPostRequest } from '@/types/runnerPost';
import { useToken } from '@/hooks/useToken';
import { addDays, addHours, getDatetime, getDayLastTime, isPastTime } from '@/utils/date';
import { postRequest } from '@/api/fetch';
import { validateDeadline, validatePullRequestUrl, validateTags, validateTitle } from '@/utils/validate';
import { ERROR_DESCRIPTION, ERROR_TITLE } from '@/constants/message';
import { ToastContext } from '@/contexts/ToastContext';
=======
import Button from '@/components/common/Button/Button';
import { usePageRouter } from '@/hooks/usePageRouter';
import Layout from '@/layout/Layout';
import githubIcon from '@/assets/github-icon.svg';
import React, { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { CreateRunnerPostRequest } from '@/types/runnerPost';
import { addDays, addHours, getDatetime, getDayLastTime } from '@/utils/date';

import {
  validateCuriousContents,
  validateDeadline,
  validateImplementContents,
  validatePullRequestUrl,
  validateTags,
  validateTitle,
} from '@/utils/validate';
import { ERROR_DESCRIPTION, ERROR_TITLE, TOAST_COMPLETION_MESSAGE } from '@/constants/message';
import { ToastContext } from '@/contexts/ToastContext';
import useViewport from '@/hooks/useViewport';
import GuideTextarea from '@/components/GuideTextarea/GuideTextarea';
import { CURIOUS_GUIDE_MESSAGE, IMPLEMENTED_GUIDE_MESSAGE, POSTSCRIPT_GUIDE_MESSAGE } from '@/constants/guide';
import { GetMyPageProfileResponse } from '@/types/myPage';
import { useLogin } from '@/hooks/useLogin';
import { useFetch } from '@/hooks/useFetch';
>>>>>>> dev/FE

const RunnerPostCreatePage = () => {
  const nowDate = new Date();

<<<<<<< HEAD
  const { goBack, goToCreationResultPage } = usePageRouter();
  const { getToken } = useToken();

  const { showErrorToast } = useContext(ToastContext);
=======
  const { goBack, goToMainPage } = usePageRouter();
  const { postRequestWithAuth } = useFetch();
  const { showErrorToast, showCompletionToast } = useContext(ToastContext);

  const { isMobile } = useViewport();
>>>>>>> dev/FE

  const [tags, setTags] = useState<string[]>([]);
  const [title, setTitle] = useState<string>('');
  const [pullRequestUrl, setPullRequestUrl] = useState<string>('');
  const [deadline, setDeadline] = useState<string>(getDayLastTime(addDays(nowDate, 1)));
<<<<<<< HEAD
  const [contents, setContents] = useState<string>('');
=======
  const [implementedContents, setImplementedContents] = useState<string>('');
  const [curiousContents, setCuriousContents] = useState<string>('');
  const [postscriptContents, setPostscriptContents] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [githubUrl, setGithubUrl] = useState<string>('');

  const { isLogin } = useLogin();
  const { getRequestWithAuth } = useFetch();

  useEffect(() => {
    getGithubUrl();
  }, []);

  const getGithubUrl = () => {
    if (!isLogin) return;

    getRequestWithAuth(`/profile/runner/me`, async (response) => {
      const data: GetMyPageProfileResponse = await response.json();

      const url = data.githubUrl;
      setGithubUrl(url);

      const githubId = data.githubUrl.split('/').splice(-1)[0];
    });
  };
>>>>>>> dev/FE

  const pushTag = (newTag: string) => {
    const newTags = [...tags, newTag];

    try {
      validateTags(newTags);
    } catch (error) {
      const description = error instanceof Error ? error.message : ERROR_DESCRIPTION.UNEXPECTED;
      showErrorToast({ title: ERROR_TITLE.VALIDATION, description });

      return;
    }

    setTags(newTags);
  };

  const removeTag = (tag?: string) => {
    if (!tag) {
      setTags((current) => current.slice(0, -1));
      return;
    }

    const newTags = tags.filter((item) => item !== tag);
    setTags(newTags);
  };

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value.trim());
  };

  const changePullRequestUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPullRequestUrl(e.target.value);
  };

  const changeDeadline = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      validateDeadline(e.target.value);
    } catch (error) {
      const newDeadline = getDatetime(addHours(nowDate, 1));
      setDeadline(newDeadline);

      const description = error instanceof Error ? error.message : ERROR_DESCRIPTION.UNEXPECTED;
      return showErrorToast({ title: ERROR_TITLE.VALIDATION, description });
    }
    setDeadline(e.target.value);
  };

<<<<<<< HEAD
  const changeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
=======
  const changeImplementedContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setImplementedContents(e.target.value);
  };

  const changeCuriousContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCuriousContents(e.target.value);
  };

  const changePostscriptContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostscriptContents(e.target.value);
>>>>>>> dev/FE
  };

  const cancelPostWrite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    goBack();
  };

<<<<<<< HEAD
  const goToNextForm = () => {
=======
  const handleSubmitButton = () => {
>>>>>>> dev/FE
    try {
      validateInputs();
    } catch (error) {
      const description = error instanceof Error ? error.message : ERROR_DESCRIPTION.UNEXPECTED;
      return showErrorToast({ title: ERROR_TITLE.VALIDATION, description });
    }

<<<<<<< HEAD
    submitForm();
=======
    setIsLoading(true);

    postRunnerForm().finally(() => {
      setIsLoading(false);
    });
>>>>>>> dev/FE
  };

  const validateInputs = () => {
    validateTitle(title);
    validateTags(tags);
    validatePullRequestUrl(pullRequestUrl);
    validateDeadline(deadline);
<<<<<<< HEAD
  };

  const postRunnerForm = (data: CreateRunnerPostRequest) => {
    const token = getToken()?.value;
    if (!token) return;

    const body = JSON.stringify(data);

    postRequest(`/posts/runner`, token, body)
      .then(async () => {
        goToCreationResultPage();
      })
      .catch((error: Error) => {
        const description = error instanceof Error ? error.message : ERROR_DESCRIPTION.UNEXPECTED;
        showErrorToast({ title: ERROR_TITLE.REQUEST, description });
      });
  };

  const submitForm = async () => {
=======
    validateImplementContents(implementedContents);
    validateCuriousContents(curiousContents);
  };

  const postRunnerForm = async () => {
>>>>>>> dev/FE
    const postData: CreateRunnerPostRequest = {
      tags,
      title,
      pullRequestUrl,
      deadline,
<<<<<<< HEAD
      contents,
    };

    await postRunnerForm(postData);
=======
      implementedContents,
      curiousContents,
      postscriptContents,
    };

    const body = JSON.stringify(postData);

    await postRequestWithAuth(
      `/posts/runner`,
      async () => {
        showCompletionToast(TOAST_COMPLETION_MESSAGE.CREATE_POST);

        goToMainPage();
      },
      body,
    );
>>>>>>> dev/FE
  };

  return (
    <Layout>
      <S.FormContainer>
        <S.Form>
          <S.InputContainer>
            <InputBox
              inputTextState={title}
              handleInputTextState={changeTitle}
              maxLength={30}
<<<<<<< HEAD
              width="800px"
              height="40px"
              fontSize="38px"
=======
              width={isMobile ? '300px' : '800px'}
              height="40px"
              fontSize={isMobile ? '20px' : '38px'}
              maxLengthFontSize={isMobile ? '14px' : '18px'}
>>>>>>> dev/FE
              fontWeight="700"
              placeholder="제목을 입력해주세요"
              autoFocus={true}
            />
          </S.InputContainer>
          <S.InputContainer>
<<<<<<< HEAD
            <TagInput tags={tags} pushTag={pushTag} popTag={removeTag} width="100%" />
=======
            <TagInput
              tags={tags}
              pushTag={pushTag}
              popTag={removeTag}
              width="100%"
              fontSize={isMobile ? '14px' : '18px'}
            />
>>>>>>> dev/FE
          </S.InputContainer>

          <S.InputContainer>
            <InputBox
              inputTextState={pullRequestUrl}
              handleInputTextState={changePullRequestUrl}
<<<<<<< HEAD
              width="500px"
              placeholder="코드 리뷰받을 PR 주소를 입력해주세요"
            />
=======
              width={isMobile ? '300px' : '500px'}
              placeholder="코드 리뷰받을 PR 주소를 입력해주세요"
              value={pullRequestUrl}
            />

            {githubUrl && (
              <S.Anchor href={githubUrl + '?tab=repositories'} target="_blank">
                <img src={githubIcon} />
                {!isMobile && <S.GoToGitHub>github</S.GoToGitHub>}
              </S.Anchor>
            )}
>>>>>>> dev/FE
          </S.InputContainer>

          <S.InputContainer>
            <S.InputName>마감기한</S.InputName>
            <S.Deadline
              type="datetime-local"
              value={deadline}
              max={getDatetime(addDays(nowDate, 365))}
              min={getDatetime(nowDate)}
              onChange={changeDeadline}
            />
          </S.InputContainer>
<<<<<<< HEAD
          <TextArea
            inputTextState={contents}
            width="1200px"
            height="340px"
            maxLength={500}
            handleInputTextState={changeContents}
            placeholder="> 리뷰어가 작성된 코드의 의미를 파악할 수 있도록 내용을 작성해주시면 더 나은 리뷰가 될 수 있어요 :)"
          />

=======
          <GuideTextarea
            title="무엇을 구현하였나요?"
            inputTextState={implementedContents}
            maxLength={200}
            guideTexts={IMPLEMENTED_GUIDE_MESSAGE}
            handleInputTextState={changeImplementedContents}
            placeholder="구현 기능에 대한 설명을 해주세요"
          />
          <GuideTextarea
            title="아쉬운 점이나 궁금한 점이 있나요?"
            inputTextState={curiousContents}
            maxLength={200}
            guideTexts={CURIOUS_GUIDE_MESSAGE}
            handleInputTextState={changeCuriousContents}
            placeholder="궁금한 점을 적어주세요"
          />
          <GuideTextarea
            title="서포터에게 하고싶은 말이 있나요?"
            inputTextState={postscriptContents}
            maxLength={200}
            guideTexts={POSTSCRIPT_GUIDE_MESSAGE}
            handleInputTextState={changePostscriptContents}
            placeholder="서포터에게 하고 싶은 말을 적어주세요"
            isOptional={true}
          />
>>>>>>> dev/FE
          <S.ButtonContainer>
            <Button type="button" onClick={cancelPostWrite} colorTheme="GRAY" fontWeight={700}>
              취소
            </Button>
<<<<<<< HEAD
            <Button type="button" colorTheme="WHITE" fontWeight={700} onClick={goToNextForm}>
=======
            <Button
              type="button"
              colorTheme={isLoading ? 'GRAY' : 'WHITE'}
              fontWeight={700}
              onClick={handleSubmitButton}
              disabled={isLoading}
            >
>>>>>>> dev/FE
              리뷰요청 글 생성
            </Button>
          </S.ButtonContainer>
        </S.Form>
      </S.FormContainer>
    </Layout>
  );
};

export default RunnerPostCreatePage;

const S = {
  Title: styled.div`
    margin: 40px 0 50px 0;

    color: var(--gray-800);
    font-size: 32px;
    font-weight: 700;
  `,

  FormContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 0 20px;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      padding: 0;
    }
>>>>>>> dev/FE
  `,

  InputContainer: styled.div`
    display: flex;
    justify-content: start;
  `,

  Form: styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;

    &:first-child {
      margin-top: 60px;
    }
  `,

  InputName: styled.div`
    display: flex;
    align-items: center;

    height: 36px;
    margin-right: 20px;

    color: var(--gray-800);
    font-size: 18px;
    font-weight: 500px;
  `,

  Deadline: styled.input`
    gap: 10px;

    &:focus {
      outline: 0;
    }
  `,

  ButtonContainer: styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    margin: 50px 0;
  `,

  SelectedSupporter: styled.div`
    display: flex;
    align-items: end;
    gap: 30px;
  `,
<<<<<<< HEAD
=======

  Anchor: styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 100px;
    height: 36px;
    border-radius: 3px;
    border: 1px solid var(--gray-800);

    font-weight: 700;

    @media (max-width: 768px) {
      width: 40px;
      height: 36px;
    }
  `,

  GoToGitHub: styled.p``,
>>>>>>> dev/FE
};
