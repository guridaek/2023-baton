import { usePageRouter } from '@/hooks/usePageRouter';
<<<<<<< HEAD
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import LogoImage from '@/assets/logo-image.svg';
import { useToken } from '@/hooks/useToken';
import { GetHeaderProfileResponse } from '@/types/profile';
import Avatar from '@/components/common/Avatar/Avatar';
import { getRequest } from '@/api/fetch';
import { ToastContext } from '@/contexts/ToastContext';
import { ERROR_DESCRIPTION, ERROR_TITLE } from '@/constants/message';
import Button from '@/components/common/Button/Button';
=======
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LogoImage from '@/assets/logo-image.svg';
import LogoImageMobile from '@/assets/logo-image-mobile.svg';
import { GetHeaderProfileResponse } from '@/types/profile';
import Avatar from '@/components/common/Avatar/Avatar';
import Button from '@/components/common/Button/Button';
import { useFetch } from '@/hooks/useFetch';
import { useLogin } from '@/hooks/useLogin';
import useViewport from '@/hooks/useViewport';
>>>>>>> dev/FE

const Header = () => {
  const [profile, setProfile] = useState<GetHeaderProfileResponse | null>(null);

  const { goToMainPage, goToLoginPage, goToMyPage } = usePageRouter();
<<<<<<< HEAD

  const { getToken, removeToken, hasToken } = useToken();

  const { showErrorToast } = useContext(ToastContext);

  useEffect(() => {
    const isLogin = hasToken();

=======
  const { isLogin, logout } = useLogin();
  const { isMobile } = useViewport();
  const { getRequestWithAuth } = useFetch();

  useEffect(() => {
>>>>>>> dev/FE
    if (isLogin) getProfile();
  }, []);

  const getProfile = () => {
<<<<<<< HEAD
    const token = getToken()?.value;
    if (!token) return;

    getRequest(`/profile/me`, token)
      .then(async (response) => {
        const data: GetHeaderProfileResponse = await response.json();

        setProfile(data);
      })
      .catch((error: Error) =>
        showErrorToast({
          description: error instanceof Error ? error.message : ERROR_DESCRIPTION.UNEXPECTED,
          title: ERROR_TITLE.REQUEST,
        }),
      );
  };

  const handleClickLogoutButton = () => {
    removeToken();
=======
    getRequestWithAuth(`/profile/me`, async (response) => {
      const data: GetHeaderProfileResponse = await response.json();

      setProfile(data);
    });
  };

  const handleClickLogoutButton = () => {
    logout();
>>>>>>> dev/FE

    goToMainPage();
  };

  const handleClickProfile = () => {
    goToMyPage();
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
<<<<<<< HEAD
        <S.Logo src={LogoImage} onClick={goToMainPage} alt="바톤로고" />
        <S.MenuContainer>
          {hasToken() ? (
            <>
              <S.AvatarContainer onClick={handleClickProfile}>
                <Avatar width="35px" height="35px" imageUrl={profile?.imageUrl || 'https://via.placeholder.com/150'} />
                <p>{profile?.name}</p>
=======
        <S.Logo onClick={goToMainPage} />
        <S.MenuContainer>
          {isLogin ? (
            <>
              <S.AvatarContainer onClick={handleClickProfile}>
                {isMobile ? null : <S.ProfileName>{profile?.name}</S.ProfileName>}
                <Avatar width="35px" height="35px" imageUrl={profile?.imageUrl || 'https://via.placeholder.com/150'} />
>>>>>>> dev/FE
              </S.AvatarContainer>
              <Button fontSize="14px" width="76px" height="35px" colorTheme="WHITE" onClick={handleClickLogoutButton}>
                로그아웃
              </Button>
            </>
          ) : (
            <Button fontSize="14px" width="76px" height="35px" colorTheme="RED" onClick={goToLoginPage}>
              로그인
            </Button>
          )}
        </S.MenuContainer>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;

const S = {
  HeaderWrapper: styled.header`
    display: flex;
    justify-content: center;

    width: 100%;
    padding: 0 30px;

    border-bottom: 0.3px solid #333333;
  `,

  HeaderContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

<<<<<<< HEAD
    width: 1200px;
=======
    max-width: 1200px;
    width: 100%;
>>>>>>> dev/FE
    height: 80px;
  `,

  AvatarContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    cursor: pointer;
<<<<<<< HEAD
  `,

  Logo: styled.img`
    width: 140px;
    height: 40px;

    cursor: pointer;
=======

    @media (max-width: 768px) {
      gap: 5px;
    }
  `,

  ProfileName: styled.p`
    text-align: end;

    @media (max-width: 768px) {
    }
  `,

  Logo: styled.div`
    width: 197px;
    height: 35px;

    background-image: url(${LogoImage});
    background-size: cover;
    background-repeat: no-repeat;

    cursor: pointer;

    @media (max-width: 768px) {
      background-image: url(${LogoImageMobile});

      width: 53px;
      height: 30px;
    }
>>>>>>> dev/FE
  `,

  MenuContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      gap: 16px;
    }
>>>>>>> dev/FE
  `,

  LoginButton: styled.button`
    width: 76px;
    height: 35px;

    border-radius: 50px;

    background-color: var(--baton-red);
    color: var(--white-color);
    font-size: 14px;
  `,
};
