import React from "react";
import styled from "styled-components";

const Image = (props) => {
    const { src, shape } = props;
    return (
        <AspectOutter>
            <AspectInner src={src} />
        </AspectOutter>
    )
}

Image.defaultProps = {
    src: 'https://www.ktown1st.com/uploads/images/item/548a998abe2d9b49ba1217a9662c1e8c.jpg',
    shape: 'rectangle',
}

const ImgDefault = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

const AspectOutter = styled.div`
    width: 100%;
    min-width: 50px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

export default Image;