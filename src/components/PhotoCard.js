import React from 'react';
import { Card, CardImg } from 'reactstrap';
import styled from 'styled-components';

const PhotoCard = (props) => {
    const Jumbotron = styled.h1`
		font-size: 20px;
		font-style: italic;
		color: #ffffff;
	`;
    const CardSubtitle = styled.p`
		font-size: 20px;
		font-family: 'Roboto', sans-serif;
		color: #ffffff;
	`;
    const CardText = styled.p`
		font-size: 20px;
		font-family: 'Roboto', sans-serif;
	`;
    return (
        <div className='List' key={props.id}>
            <Jumbotron>
                <h1 className='display-3'>{props.title}</h1>
            </Jumbotron>
            <Card>
                <CardImg width='800px' height='700px' src={props.media_type} alt='NASA Photo Of The Day' />
                <CardSubtitle>{props.date}</CardSubtitle>
                <CardText>{props.explanation}</CardText>
            </Card>
        </div>
    );
};
export default PhotoCard;
