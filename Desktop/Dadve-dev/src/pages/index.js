import React from "react";
import Layout from "../components/layout";
import SEO from '../components/seo';
import Preview from '../components/preview'
import Services from '../components/services'
import Vacancies from '../components/vacancies'
import Company from "../components/company"
import Projects from "../components/projects"
import Contacts from "../components/contacts"

const IndexPage = () => (
  <Layout>
    <SEO title="Dadve" />
    <Preview />
    <Services />
    <Company />
    <Projects />
    <Contacts />
    <Vacancies />
  </Layout>
)

export default IndexPage
