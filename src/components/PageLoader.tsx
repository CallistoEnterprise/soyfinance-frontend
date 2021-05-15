import React from 'react'
import styled from 'styled-components'
import { Spinner } from '@soy-libs/uikit'
import Page from './layout/Page'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      {/* <Spinner /> */}
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </Wrapper>
  )
}

export default PageLoader
