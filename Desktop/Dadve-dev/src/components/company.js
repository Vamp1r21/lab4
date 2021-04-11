import React from 'react';
import styled from 'styled-components'
import Container from './container';
import Title from './title';

const Company = () => {
  return (
    <section id="company">
      <Container>
        <Title>Компания</Title>
        <CompanyInner>
          <CompanyDescription primary>
            <CompanyNumber primary>5</CompanyNumber>
            <CompanyName primary>Лет на рынке</CompanyName>
          </CompanyDescription>
          <CompanyDescriptionList>
            <CompanyDescription>
              <CompanyNumber>35+</CompanyNumber>
              <CompanyName>клиентов</CompanyName>
            </CompanyDescription>
            <CompanyDescription>
              <CompanyNumber>05</CompanyNumber>
              <CompanyName>городов</CompanyName>
            </CompanyDescription>
            <CompanyDescription>
              <CompanyNumber>40+</CompanyNumber>
              <CompanyName>проектов</CompanyName>
            </CompanyDescription>
            <CompanyDescription>
              <CompanyNumber>20+</CompanyNumber>
              <CompanyName>сотрудников</CompanyName>
            </CompanyDescription>
          </CompanyDescriptionList>
        </CompanyInner>
      </Container>
    </section>
  );
};

const CompanyNumber = styled.div`
  font-weight: 700;
  font-size: ${({primary}) => (primary ? "180px" : "64px")};
  color: #C31925;
`;

const CompanyName = styled.h3`
  font-weight: 700;
  font-size: ${({primary}) => (primary ? "36px" : "24px")};
  line-height: 29px;
  color: #ffffff;
  white-space: nowrap;
  width: fit-content;
  margin: 0 auto;
`

const CompanyDescription = styled.div`
  max-width: 310px;
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({primary}) => (primary ? "none" : "#1E1E1E")};
  border-radius: 15px;
  padding: ${({primary}) => (primary ? "none" : "20px 0")};
  height: fit-content;
  text-align: center;
  margin-right: ${({primary}) => (primary ? "70px" : "none")};
  margin-bottom: ${({primary}) => (primary ? "none" : "40px")};

  @media screen and (max-width: 1050px) {
    margin: ${({primary}) => (primary ? "0 0 40px 0" : "0 10px 40px")};
  }
`;

const CompanyDescriptionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 1050px) {
    justify-content: center;
  }
`

const CompanyInner = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Company;