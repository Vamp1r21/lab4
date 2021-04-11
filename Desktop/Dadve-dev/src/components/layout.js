import React from "react"

import Header from "./header"
import Footer from './footer'

import {GlobalStyle} from '../styles/global-styles'


const Layout = (props) => {
  return (
    <>
      <GlobalStyle/>
      <Header page={props.page}/>
      <main>
        {props.children}
      </main>
      <Footer page={props.page}/>
    </>
  )
}



export default Layout
