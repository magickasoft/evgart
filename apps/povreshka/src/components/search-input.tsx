// components/SearchInput.tsx
import styled from '@emotion/styled';
import React from 'react';

const InputWrapper = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 400px;
  border-radius: 6px;

  input {
    width: 100%;
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 6px;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: #999;
    }
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const SearchInput = ({placeholder = 'Поиск...'}: {placeholder?: string}) => {
  return (
    <InputWrapper>
      <input type="text" placeholder={placeholder} />
    </InputWrapper>
  );
};
