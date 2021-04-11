import React from 'react';
import styled from 'styled-components';
import Container from './container';
import Title from './title';
import {useStaticQuery, graphql} from 'gatsby';

const Services = () => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      allServicesJson {
        edges {
          node {
            description
            title
            img {
              publicURL
            }
          }
        }
      }
    }
  `);

  function getServices(data) {
    const arr = [];
    data.allServicesJson.edges.forEach((e, i) => {
      arr.push(
        <Service key={i}>
          <img src={e.node.img.publicURL} alt={e.node.title}/>
          <ServiceTitle>{e.node.title}</ServiceTitle>
          <ServiceDescription>{e.node.description}</ServiceDescription>
        </Service>
      );
    });
    return arr;
  }

  return (
    <section id="services">
      <Container fullScreen>
        <Title>Услуги</Title>
        <ServicesList>
          {
            getServices(data)
          }
        </ServicesList>
      </Container>
    </section>
  );
};

const ServicesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Service = styled.div`
width: 300px;
height: 274px;
padding: 20px 30px;
background-color: #1E1E1E;
border-radius: 15px;
color: #ffffff;
margin: 40px;

@media screen and (max-width: 544px) {
  margin: 0 0 40px;
  width: 100%;
  text-align: center;
}
`

const ServiceDescription = styled.p`
  font-weight: 500;
  font-size: 15px;
`

const ServiceTitle = styled.h2`
  font-weight: 900;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
`

export default Services;