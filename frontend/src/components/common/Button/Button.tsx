import React from 'react';
import styled, { css } from 'styled-components';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  colorTheme: 'RED' | 'WHITE' | 'GRAY' | 'BLACK';
  fontSize?: string | number;
  fontWeight?: number;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
<<<<<<< HEAD
}

const Button = ({ colorTheme, children, width, height, type, fontSize, fontWeight, onClick, ariaLabel }: Props) => {
  return (
    <S.ButtonWrapper>
      <S.Button
        $width={width}
        $height={height}
        $colorTheme={colorTheme}
        type={type}
=======
  dataType?: string;
}

const Button = ({
  colorTheme,
  children,
  type,
  fontSize,
  fontWeight,
  onClick,
  ariaLabel,
  dataType,
  disabled,
  width,
  height,
}: Props) => {
  return (
    <S.ButtonWrapper>
      <S.Button
        data-type={dataType}
        $colorTheme={colorTheme}
        type={type}
        $disabled={disabled}
>>>>>>> dev/FE
        $fontSize={fontSize}
        $fontWeight={fontWeight}
        onClick={onClick}
        aria-label={ariaLabel}
<<<<<<< HEAD
=======
        $width={width}
        $height={height}
>>>>>>> dev/FE
      >
        {children}
      </S.Button>
    </S.ButtonWrapper>
  );
};

export default Button;

const S = {
<<<<<<< HEAD
  ButtonWrapper: styled.div``,
=======
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
>>>>>>> dev/FE

  Button: styled.button<{
    $colorTheme: 'RED' | 'WHITE' | 'GRAY' | 'BLACK';
    $width?: string | number;
    $height?: string | number;
    $fontSize?: string | number;
    $fontWeight?: number;
<<<<<<< HEAD
=======
    $disabled?: boolean;
>>>>>>> dev/FE
  }>`
    ${({ $colorTheme }) => themeStyles[$colorTheme]}

    width: ${({ $width }) => $width || '180px'};
    height: ${({ $height }) => $height || '40px'};

    padding: 10px 10px;

    font-size: ${({ $fontSize }) => $fontSize || '18px'};
    font-weight: ${({ $fontWeight }) => $fontWeight || '400'};
<<<<<<< HEAD
=======

    visibility: ${({ $disabled }) => ($disabled ? 'hidden' : 'visible')};

    @media (max-width: 768px) {
      width: ${({ $width }) => $width || '180px'};
      height: 100%;
    }
>>>>>>> dev/FE
  `,
};

export const themeStyles = {
  RED: css`
    background: var(--baton-red);
    border-radius: 6px;

    color: #ffffff;
  `,
<<<<<<< HEAD
=======

>>>>>>> dev/FE
  WHITE: css`
    background: #ffffff;
    border: 1px solid var(--baton-red);
    border-radius: 6px;

    color: var(--baton-red);
  `,
<<<<<<< HEAD
=======

>>>>>>> dev/FE
  GRAY: css`
    background: #ffffff;
    border: 1px solid var(--gray-500);
    border-radius: 6px;

    color: var(--gray-400);
  `,

  BLACK: css`
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 6px;

    color: #000000;
  `,
};
