import styled from 'styled-components'

export const BtnBold = styled.button`
    color: ${props => (props.isBold ? '#faff00' : '#f1f5f9')};
    /* if active :#faff00*/
    background-color: transparent;
    border: 0px;
    cursor: pointer;
    outline: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
        
        `
export const BtnItalic = styled.button`
    color: ${props => (props.isItalic ? '#faff00' : '#f1f5f9')};
    /* if active :#faff00*/
    background-color: transparent;
    border: 0px;
    cursor: pointer;
    outline: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
        
        `
export const BtnUnderline = styled.button`
    color: ${props => (props.isUnderlined ? '#faff00' : '#f1f5f9')};
    /* if active :#faff00*/
    background-color: transparent;
    border: 0px;
    cursor: pointer;
    outline: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
        
        `
export const InputCont = styled.textarea`
    padding: 10px;
    outline: none;
    color: #f1f5f9;
    border: 0px;
    height: 100%;
    resize: none;
    font-weight:${props => (props.isBold ? 'bold' : 'normal')};
    font-style:${props => (props.isItalic ? 'italic' : 'normal')};
    text-decoration:${props => (props.isUnderlined ? 'underline' : 'normal')};
    background-color: transparent;
    
        
     `
