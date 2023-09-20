import React, { useEffect } from 'react';
import Modal from '../common/Modal/Modal';
import Button from '../common/Button/Button';
import { styled } from 'styled-components';
<<<<<<< HEAD

interface Props {
  contents: string;
=======
import useViewport from '@/hooks/useViewport';

interface Props {
  contents: React.ReactNode;
>>>>>>> dev/FE
  closeModal: () => void;
  handleClickConfirmButton: () => void;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmModal = ({ contents, closeModal, handleClickConfirmButton, confirmText, cancelText }: Props) => {
<<<<<<< HEAD
=======
  const { isMobile } = useViewport();

>>>>>>> dev/FE
  useEffect(() => {
    const handleEscapeKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleEscapeKeyDown);

    return () => {
      window.removeEventListener('keydown', handleEscapeKeyDown);
    };
  }, []);

  return (
<<<<<<< HEAD
    <Modal width="495px" height="211px" closeModal={closeModal}>
=======
    <Modal width={isMobile ? '340px' : '540px'} height={isMobile ? '250px' : '211px'} closeModal={closeModal}>
>>>>>>> dev/FE
      <S.ConfirmModalContainer>
        <S.ConfirmMessage>{contents}</S.ConfirmMessage>
        <S.ButtonContainer>
          <Button colorTheme="GRAY" width="134px" height="35px" fontSize="16px" fontWeight={700} onClick={closeModal}>
            {cancelText || '취소'}
          </Button>
          <Button
            colorTheme="WHITE"
            width="134px"
            height="35px"
<<<<<<< HEAD
            fontSize="16px"
=======
            fontSize={isMobile ? '12px' : '14px'}
>>>>>>> dev/FE
            fontWeight={700}
            onClick={handleClickConfirmButton}
          >
            {confirmText || '확인'}
          </Button>
        </S.ButtonContainer>
      </S.ConfirmModalContainer>
    </Modal>
  );
};

export default ConfirmModal;

const S = {
  ConfirmModalContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
<<<<<<< HEAD
=======
    padding: 20px 0;

    @media (max-width: 768px) {
      padding: 10px 20px;
    }
>>>>>>> dev/FE
  `,

  ConfirmMessage: styled.p`
    margin-bottom: 40px;

<<<<<<< HEAD
    font-size: 18px;
=======
    white-space: pre-wrap;
    line-height: 1.5;
>>>>>>> dev/FE
  `,

  ButtonContainer: styled.div`
    display: flex;
    gap: 20px;
  `,
};
