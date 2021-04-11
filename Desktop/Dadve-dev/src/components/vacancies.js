import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Container from './container';
import Title from './title';
import {useStaticQuery, graphql} from 'gatsby';
import emailjs from 'emailjs-com';

import {RequestState} from './requestState';

const Vacancies = () => {

  const [vacancies, setVacancies] = useState([])
  const [positions, setPositions] = useState([])

  const [userName, setUserName] = useState("");
  const [userTelephone, setUserTelephone] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userPosition, setUserPosition] = useState("");
  const [userPolitic, setUserPolitic] = useState(false);

  const [postState, setPostState] = useState("")

  function sendVacancy(e) {
    e.preventDefault();
    if(userPosition === "") {
      setPostState("noPosition");
      return;
    }
    if(userPolitic) {
      const sendingData = {
        name: 'Резюме '+userName+' '+userTelephone+' '+userCity+' '+userPosition,
        tel: userTelephone,
        city: userCity,
        vacancy: userPosition
      }
      setPostState("loading");
      emailjs.send('service_3spmnhc', 'template_q2at0rm', sendingData, "user_KY7UAituUOFhnK7Y9rm2i")
      .then(function(){setPostState("success");clearInput();},function(){setPostState("failed");});
    }
    else setPostState("politicNotAgree")
  }

  const citylist = useStaticQuery(graphql`
    query CityQuery {
      data: allVacanciesJson {
        edges {
          node {
            city
            positions
          }
        }
      }
    }
  `);

  function clearInput() {
    setUserName("");
    setUserTelephone("");
  }

  function getData() {
    return citylist.data.edges.reduce((acc, curr) => {
      const obj={};
      obj["city"] = curr.node.city;
      obj["positions"] = curr.node.positions;
      acc.push(obj)
      return acc;
    }, []);
  }
  
  useEffect(() => {
    setVacancies(getData());
  }, [])

  return (
    <section id="vacancies">
      <Container>
        <Title>Вакансии</Title>
        <VacanciesForm name="contact" method="post" onSubmit={(e) => {
          sendVacancy(e);
        }}>
          <VacanciesColumn>
            <VacanciesButton type="button">Вакансии</VacanciesButton>
            <VacanciesList>
              {
                positions.length === 0 ? <span>Нет вакансий</span> :
                positions.map((e) => (
                  <li key={e}>
                    <VacanciesItem 
                      id={e}
                      name="Position"
                      type="radio" 
                      value={e}
                      onChange={() => {setUserPosition(e)}}/>
                    <VacanciesItemLabel htmlFor={e}>{e}</VacanciesItemLabel>
                  </li>
                ))
              }
            </VacanciesList>
          </VacanciesColumn>
          <VacanciesColumn>
            <VacanciesButton type="button">Город</VacanciesButton>
            <VacanciesList>
              {
                vacancies.map((e,i,a) => (
                  <li key={e.city}>
                    <VacanciesItem 
                      name="City"
                      id={e["city"]} 
                      type="radio" 
                      value={e["city"]}
                      onChange={(element) => {
                        const positions = a.filter(el => el["city"] === element.target.value);
                        setPositions(positions[0].positions);
                        setUserPosition("")
                        setUserCity(positions[0].city)
                      }}/>
                    <VacanciesItemLabel htmlFor={e["city"]}>{e.city}</VacanciesItemLabel>
                  </li>
                ))
              }
            </VacanciesList>
          </VacanciesColumn>
          <VacanciesColumn sm>
            <VacanciesInput  required value={userName} placeholder="Имя" type="text" onChange={(e) => {setUserName(e.target.value);}}/>
            <VacanciesInput required value={userTelephone} placeholder="Телефон" type="tel" onChange={(e) => {setUserTelephone(e.target.value)}}/>
            <VacanciesCheckBox id="check" check type="checkbox" onChange={(e) => {setUserPolitic(e.target.checked ? true : false)}}/>
            <VacanciesLabel required htmlFor="check">Я прочитал(а) политику конфидициальности</VacanciesLabel>
            <VacanciesSubmit type="submit">Отправить</VacanciesSubmit>
          </VacanciesColumn>
        </VacanciesForm>
        {
          (() => {
            switch(postState) {
              case "success": return <RequestState state={postState}>Ваша заявка успешно отправлена</RequestState>;
              case "loading": return <RequestState state={postState}>Ожидание...</RequestState> ;
              case "failed": return <RequestState state={postState}>Что-то пошло не так(</RequestState>;
              case "politicNotAgree": return <RequestState state={postState}>Вы не согласились с политикой конфиденциальности</RequestState>;
              case "noPosition": return <RequestState state={postState}>Выберите должность</RequestState>;
              default: return null;
            }
          })()
        }
      </Container>
    </section>
  );
};

const VacanciesItem = styled.input`
appearance: none;
&:focus {
  +label {
    color: #C31925;
  }
}
&:checked {
  +label {
    color: #C31925;
    &:after {
      background-color:#C31925;
    }
  }
}
`;

const VacanciesItemLabel = styled.label`
font-weight: 700;
font-size: 14px;
display: block;
letter-spacing: 0.135em;
margin-bottom: 20px;
transition: all .5s;
position: relative;
transition: all .5s;
cursor: pointer;
&:after {
  content: "";
  position: absolute;
  left: -25px;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color:transparent;
  transition: all .5s;
}
@media screen and (max-width: 768px) {
  &:after {
  left: 0;
  }
}
`;

const VacanciesSubmit = styled.button`
border: 2px solid #FFFFFF;
box-sizing: border-box;
border-radius: 8px;
padding: 5px 50px;
display: block;
margin-left: auto;
background-color: transparent;
color: #ffffff;
transition: all .5s;
margin-bottom: 30px;
cursor: pointer;
&:hover,&:focus {
  outline: transparent;
  color: #C31925;
  border-color: #C31925;
}
&:active {
  color: #ffffff;
  border-color: #ffffff;
}
`;

const VacanciesCheckBox = styled.input`
position: absolute;
opacity: 0;
height:0;
&:focus {
  +label {
   color: #C31925;
 }
}
&:checked {
 +label {
   &:after {
     background-color: #C31925;
   }
 }
}
`;

const VacanciesLabel = styled.label`
color: #ffffff;
display: flex;
margin-bottom: 35px;
align-items: center;
font-size: 12px;
padding-left: 70px;
position: relative;
transition: all .3s;
cursor: pointer;
&:after {
  content: "";
  position: absolute;
  left: 30px;
  width: 21px;
  height: 21px;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  transition: all .3s;
}
`;

const VacanciesInput = styled.input`
border: 3px solid #FFFFFF;
box-sizing: border-box;
background-color: transparent;
border-radius: 34px;
width: 270px;
padding: 30px 20px;
margin-bottom: 30px;
color: #ffffff;
font-weight: 700;
height: 55px;
font-size: 14px;
letter-spacing: 0.135em;
transition: all .5s;
&::placeholder {
  color: #ffffff;
}
&:focus {
  outline: transparent;
  border-color: #C31925;
  &::placeholder {
    color: #C31925;
  }
}
@media screen and (max-width: 992px) {
    width: 100%;
  }
`;

const VacanciesList = styled.ul`
list-style: none;
color: #ffffff;
padding-top: 30px;
padding-left: 30px;
transition: all .5s;
@media screen and (max-width: 992px) {
  text-align: center;
  padding-left: 0;
}
`

const VacanciesButton = styled.div`
padding: 20px 30px;
text-align: left;
background-color: transparent;
width: 100%;
border: 3px solid #FFFFFF;
box-sizing: border-box;
border-radius: 34px;
font-weight: 700;
font-size: 14px;
letter-spacing: 0.135em;
color: #ffffff;
position: relative;
transition: all .5s;
`;

const VacanciesColumn = styled.div`
  width: ${({sm}) => (sm ? "270px" : "380px")};
  margin-right: 30px;
  &:last-child {
    margin-top: 0;
  }
  @media screen and (max-width: 992px) {
    margin-bottom: 30px;
    width: ${({sm}) => (sm ? "100%" : "380px")};
  }
  @media screen and (max-width: 768px) {
    margin-right: 0;
    width: 100%;
  }
`;

const VacanciesForm = styled.form`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 992px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export default Vacancies;