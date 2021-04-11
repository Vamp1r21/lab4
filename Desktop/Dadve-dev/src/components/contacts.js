import React, {useState} from 'react';
import styled from 'styled-components';
import Container from './container';
import Title from './title';
import {useStaticQuery, graphql} from 'gatsby';
import BGImage from '../images/contacts/big-map.svg';
import emailjs from 'emailjs-com';
import {RequestState} from './requestState';

const Contacts = () => {

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTelephone, setUserTelephone] = useState("");
  const [postState, setPostState] = useState("");

  const data = useStaticQuery(graphql`
    query ContactsQuery {
      allContactsJson {
        edges {
          node {
            country
            email
            phone
          }
        }
      }
    }
  `);

  function resetInput() {
    setUserName("");
    setUserEmail("");
    setUserTelephone("");
  }

  function sendRequest(e) {
    e.preventDefault();
    if(userEmail === "") setPostState("noEmailAndPhone");
    else if(!/^[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i.test(userEmail)) setPostState("noEmail");
    else {
      const sendingData = {
        name: userName+' '+userTelephone+' '+userEmail,
        tel: userTelephone,
        email: userEmail
      }
      setPostState("success");
      //emailjs.send('service_3spmnhc', 'template_q2at0rm', sendingData, "user_KY7UAituUOFhnK7Y9rm2i")
      //.then(function() {setPostState("success");resetInput();}, function() {setPostState("failed");});
    }
  }

  function getContacts(data) {
    const arr = [];
    data.allContactsJson.edges.forEach((e, i) => {
      arr.push(
        <ContactsItem key={e.node.country}>
          <ContactsCountry>{e.node.country}</ContactsCountry>
          <ContactsEmail>{e.node.email}</ContactsEmail>
          <ContactsPhone>{e.node.phone}</ContactsPhone>
        </ContactsItem>
      );
    });
    return arr;
  }

  return (
    <section id="contacts">
      <Container fullScreen>
        <Title>Контакты</Title>
        {
          (() => {
            switch(postState) {
              case "success": return <RequestState state={postState}>Ваша заявка успешно отправлена</RequestState>;
              case "loading": return <RequestState state={postState}>Ожидание...</RequestState> ;
              case "failed": return <RequestState state={postState}>Что-то пошло не так(</RequestState>;
              case "noEmailAndPhone": return <RequestState state={postState}>Заполните поле: "Email"</RequestState>;
              case "noEmail": return <RequestState state={postState}>Введите корректный Email</RequestState>;
              default: return null;
            }
          })()
        }
        <ContactsInner>
          <ContactsList>
            {
              getContacts(data)
            }
          </ContactsList>
          <ContactsFormContainer>
            <ContactsForm method="post" onSubmit={sendRequest}>
              <ContactsInput 
                required 
                placeholder="Имя" 
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}/>
              <ContactsInput 
                placeholder="Email" 
                type="email"
                value={userEmail}
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}/>
              {/* <ContactsInput 
                placeholder="Телефон" 
                type="tel"
                value={userTelephone}
                onChange={(e) => {
                  setUserTelephone(e.target.value);
                }}/> */}
              <ContactsSubmit type="submit">Отправить</ContactsSubmit>
            </ContactsForm>
          </ContactsFormContainer>
        </ContactsInner>
      </Container>
    </section>
  );
};

const ContactsItem = styled.div`
margin-bottom: 40px;
@media screen and (max-width: 767px) {
  margin: 0 20px 40px;
  text-align: center;
}
`;

const ContactsInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  background: url(${BGImage}) no-repeat;
  background-size: 100% 100%;
  padding-bottom: 220px;
  padding-top: 120px;
@media screen and (max-width: 767px) {
  flex-direction: column;
  background-size: 100% 140%;
}
`;

const ContactsEmail = styled.div`
font-weight: 500;
font-size: 14px;
letter-spacing: 0.135em;
margin-bottom: 5px;
`;

const ContactsPhone = styled.div`
font-weight: 500;
font-size: 14px;
letter-spacing: 0.135em;
margin-bottom: 5px;
`;

const ContactsCountry = styled.div`
font-weight: 700;
font-size: 18px;
letter-spacing: 0.135em;
margin-bottom: 5px;
`;

const ContactsSubmit = styled.button`
  border: 2px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: transparent;
  color: #ffffff;
  padding: 5px 20px;
  transition: all .5s;
  width: fit-content;
  margin-left: auto;
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

const ContactsInput = styled.input`
  background-color: transparent;
  margin-bottom: 30px;
  border: none;
  border-bottom: 3px solid #ffffff;
  padding: 5px 0;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.135rem;
  transition: all .5s;
  &::placeholder {
    color: #ffffff;
    transition: all .5s;
  }
  &:focus {
    outline: transparent;
    border-color: #C31925;
    &::placeholder {
    color: #C31925;
  }
  }
`;

const ContactsList = styled.ul`
  width: 50%;
  padding-left: 30px;
@media screen and (max-width: 767px) {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0;
}
`;

const ContactsFormContainer = styled.div`
  width: 50%;
@media screen and (max-width: 767px) {
  width: 100%;
}
`;

const ContactsForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width:230px;
@media screen and (max-width: 767px) {
  max-width: 100%;
}
`;

export default Contacts;