import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';
import styled from 'styled-components';

export default function List() {
    const Container = styled.div`
		width: 900px;
		margin: 0 auto;
		background: space gray;
		color: white;
		padding: 20px;
		border-radius:2px;
	`;

    const [data, setData] = useState({
        date: '',
        explanation: '',
        hdurl: '',
        media_type: '',
        title: '',
    });

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((error) => {
                console.log('Null NASA', error);
            });
    }, []);
    return (
        <Container>
            <PhotoCard
                key={data.id}
                date={data.date}
                explanation={data.explanation}
                title={data.title}
                media_type={data.url}
            />
        </Container>
    );
}
