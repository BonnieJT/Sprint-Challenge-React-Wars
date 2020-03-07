import React, { useState } from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
    display: flex;
    // flex-direction: column;
   justify-content: space-between;
    flex-wrap: wrap;
    width: 740px;
    margin: 0 auto;
    background: RGB(229, 210, 164, 0.3);
    padding: 0;
`

const CharacterName = styled.h1`
    margin: 0;
    text-align: center;
    background-color: darkred;
    color: white;
    line-height: 1.5;
    font-weight: 400;
`

const Container = styled.div`
    background: url('../sw-bg.jpg');
    width: 350px;
    padding: 5px 10px 0 10px;
`

const Attr = styled.p`
    text-align: center;
    font-size: 1rem;
    font-weight: 800;
    color: darkred;
`

function Characters(props) {
    console.log(props)
    return(
        <OuterContainer>
            {props && props.info && props.info.results.map((person) => {
                return (<Container>
                            <CharacterName>{person.name}</CharacterName>
                            <Attr>Gender: {person.gender}</Attr>
                            <Attr>Height: {person.height}"</Attr>
                            <Attr>Birth Year: {person.birth_year}</Attr>
                        </Container>)
            })}
        </OuterContainer>
    )
}

export default Characters;