// *** Input.jsx ***

import React from 'react';
import styled from 'styled-components';
import { Text, Grid } from './index';

const Input = props => {
  const {
    label,
    placeholder,
    _onChange,
    _onKeyUp,
    type,
    multiLine,
    value,
    is_submit,
    onSubmit,
    rows,
    cols,
    children,
    _ref,
    is_flex,
    width,
    ti_margin,
    margin,
    size,
    center,
    bg,
    name,
  } = props;
  const styles = {
    width,
    size,
    bg,
    margin,
  };
  if (multiLine) {
    return (
      <Grid is_flex baseline>
        {label && (
          <Text margin={ti_margin} size={size} center bold>
            {label}
          </Text>
        )}
        <ElTextarea
          {...styles}
          name={name}
          ref={_ref}
          rows={rows}
          cols={cols}
          value={value}
          placeholder={placeholder}
          onKeyUp={_onKeyUp}
          onChange={_onChange}
        >
          {children}
        </ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex baseline>
        {label && (
          <Text margin={ti_margin} size={size} bold>
            {label}
          </Text>
        )}
        {is_submit ? (
          <ElInput
            {...styles}
            name={name}
            ref={_ref}
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                onSubmit(e);
              }
            }}
          />
        ) : (
          <ElInput
            {...styles}
            name={name}
            ref={_ref}
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            onKeyUp={_onKeyUp}
          />
        )}
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: '텍스트를 입력해주세요.',
  type: 'text',
  value: '',
  is_submit: false,
  width: '20%',
  size: '14px',
  bg: '#fff',
  border: '1px solid #fff',
  margin: '4% 2% 4% 2%',
  padding: '2% 2% 2% 2%',
  onSubmit: () => {},
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  border: ${props => props.border};
  width: ${props => props.width};
  font-size: ${props => props.size};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  box-sizing: border-box;
  background-color: ${props => props.bg};
  border-radius: 3px;
  resize: none;
  word-break: keep-all;
  word-wrap: break-word;
  resize: vertical;
  &:focus {
    outline: none;
  }
`;

const ElInput = styled.input`
  border: 1px solid #dfdfdf;
  width: ${props => props.width};
  font-size: ${props => props.size};
  padding: 12px 10px;
  box-sizing: border-box;
  background-color: ${props => props.bg};
  border-radius: 3px;
`;

export default Input;
