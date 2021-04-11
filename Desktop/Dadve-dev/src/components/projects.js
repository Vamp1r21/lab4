import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby';
import Container from './container'
import Title from './title';
import {Link} from 'gatsby';

const Project = ({page}) => {

    const data = useStaticQuery(graphql`
    query ProjectsPageQuery {
      allProjectsJson {
        edges {
          node {
            name
            href
            description
            type
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

    function getProjects(data) {
      const arr = [];
      data.allProjectsJson.edges.forEach((e, i) => {
        arr.push(
          <ProjectContainer key={i}>
            <ProjectInner>
              {
                page ? (
                  <ProjectDescription>
                    <ProjectDescriptionType>{e.node.type}</ProjectDescriptionType>
                    {e.node.description}
                  </ProjectDescription>
                )
                :
                null
              }
              <ProjectImageContainer>
                <ProjectImage 
                  src={e.node.img.childImageSharp.fluid.src} 
                  alt={e.node.name} 
                  fluid={e.node.img.childImageSharp.fluid}/>
              </ProjectImageContainer>
            </ProjectInner>
            <ProjectName>{e.node.name}</ProjectName>
            <ProjectLink href={e.node.href} target="_blank">Подробнее →</ProjectLink>
          </ProjectContainer>
        );
      });
      return arr;
    }

    return (
      <section id="projects">
       <Container>
         <Title>Проекты</Title>
          <ProjectsContainer>
            {getProjects(data)}
          </ProjectsContainer>
          {
            page ? null
            :
            <ProjectsLink to="/projects">Смотреть ещё</ProjectsLink>
          }
        </Container>
      </section>
    );
}

const ProjectsLink = styled(Link)`
  border: 3px solid #C31925;
  padding: 5px 20px;
  border-radius: 8px;
  color: #C31925;
  font-size: 18px;
  font-weight: 600;
  display: block;
  width: fit-content;
  margin-left: auto;
  transition: all .5s;
  text-decoration: none;
  cursor: pointer;

  &:hover,&:focus {
    outline: transparent;
    color: #ffffff;
    border-color: #ffffff;
  }

  &:active {
    color: #C31925;
    border-color: #C31925;
  }
`;

const ProjectsContainer = styled.div`
display: flex;
justify-content: space-between;
flex-wrap:wrap
`;

const ProjectDescription = styled.div`
position: absolute;
color: #ffffff;
font-weight: 600;
font-size: 18px;
background-color: rgba(100, 17, 23, 0.92);
z-index: 1;
padding: 30px;
top: 0;
left: 0;
bottom: 0;
right: 0;
opacity: 0;
transition: all .5s;
`;

const ProjectInner = styled.div`
position: relative;

&:hover ${ProjectDescription} {
  opacity: 1;
}
`;

const ProjectDescriptionType = styled.div`
margin-bottom: 35px;
color: rgba(255, 255, 255, 0.37);
`;


const ProjectContainer = styled.div`
margin-bottom: 80px; 

@media screen and (max-width: 1050px) {
width: 100%;
}
`;

const ProjectImage = styled(Img)`
min-width: 100%;
object-fit: contain;
justify-content: center;

@media screen and (max-width: 1050px) {
min-width: auto;
}
`;

const ProjectName = styled.h3`
font-weight: 700;
font-size: 24px;
color: #ffffff;
margin-bottom: 10px;


@media screen and (max-width: 1050px) {
text-align: center;
}
`

const ProjectImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 35px;
background-color: #1E1E1E;
width: 500px;
height: 450px;
margin-bottom: 10px;

picture img {
  display: flex;
  justify-content: center;
height: 100% !important;
width: 100% !important;
}

@media screen and (max-width: 1050px) {
width: 100%;
margin: 0 auto 10px;
}
`

const ProjectLink = styled.a`
color: #C31925;
font-weight: 500;
font-size: 24px;
text-decoration: none;
position: relative;
padding: 10px 0;

&:after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  height:2px;
  background-color: #C31925;
  width: 100%;
  transition: all .3s
}

&:hover,&:focus {
  outline:transparent;

  &:after {
    transform: ${({logo}) => (logo ? "translateX(-50%) scale(0)" : "translateX(-50%) scale(1)")};
  }
}

&:active {
  &:after {
    bottom:6px;
  }
}

@media screen and (max-width: 1050px) {
display: block;
margin: 0 auto;
width: fit-content;
}
`


export default Project;