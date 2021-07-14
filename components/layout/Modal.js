import styled from "styled-components";

export const Modal = styled.div`
    z-index: 100000;
    position: absolute;
    top: 0;
    left: 0;
    height: ${props => props.size.h};
    width: ${props => props.size.w};
    background-color: ${props => props.backgroundColor};
    background-image: url('${props => props.backgroundImage}');
`;