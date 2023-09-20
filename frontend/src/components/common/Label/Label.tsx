import React from 'react';
import styled, { css } from 'styled-components';

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  colorTheme: 'RED' | 'WHITE' | 'GRAY';
  fontSize?: string | number;
  fontWeight?: number;
}

const Label = ({ children, width, height, colorTheme, fontSize, fontWeight }: Props) => {
  return (
    <S.LabelWrapper>
      <S.Label $width={width} $height={height} $colorTheme={colorTheme} $fontSize={fontSize} $fontWeight={fontWeight}>
        {children}
      </S.Label>
    </S.LabelWrapper>
  );
};

export default Label;

const S = {
  LabelWrapper: styled.div``,

  Label: styled.div<{
    $colorTheme: 'RED' | 'WHITE' | 'GRAY';
    $width?: string | number;
    $height?: string | number;
    $fontSize?: string | number;
    $fontWeight?: number;
<<<<<<< HEAD
=======
    $mobileFontSize?: string;
>>>>>>> dev/FE
  }>`
    ${({ $colorTheme }) => themeStyles[$colorTheme]}

    display: flex;
    justify-content: center;
    align-items: center;

<<<<<<< HEAD
    width: ${({ $width }) => $width || 'fit-content'};
=======
    width: ${({ $width }) => $width};
>>>>>>> dev/FE
    height: ${({ $height }) => $height || '22px'};
    border-radius: 16px;
    padding: 10px 10px;

    font-size: ${({ $fontSize }) => $fontSize || '12px'};
    font-weight: ${({ $fontWeight }) => $fontWeight || '400'};
<<<<<<< HEAD
=======

    @media (max-width: 768px) {
      padding: 4px 6px;

      font-size: ${({ $fontSize }) => $fontSize};
    }
>>>>>>> dev/FE
  `,
};

const themeStyles = {
  RED: css`
    border: 1px solid var(--white-color);

    background: var(--baton-red);

    color: var(--white-color);
  `,

  WHITE: css`
    border: 1px solid var(--baton-red);

    color: var(--baton-red);
  `,
  GRAY: css`
    background: var(--gray-500);

    color: white;
  `,
};
