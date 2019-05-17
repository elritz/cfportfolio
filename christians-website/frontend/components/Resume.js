import React, { Component } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const pdf = '../static/images/Resume/ChristianFirmiResume.pdf'

export default class Resume extends Component {
  render() {
    return (
    <div>
      <Head>
        <title>CF | Web Developer Resume</title>
      </Head>
      <div style={{ height: '600px', width: '100vw'}}>
        {/* <iframe src={pdf} style={{ height: '100%', width: '100%'}}></iframe> */}
        <PdfView className="pdfContainer"  hidden="true" src={pdf} type="application/pdf"/>
      </div>
    </div>
    )
  }
}

const PdfView = styled.embed`
  background: #1C141A50;
  -webkit-box-shadow: -1px -2px 35px 2px #1C141A50;
    -moz-box-shadow: -1px -2px 35px 2px #1C141A50;
    box-shadow: -1px -2px 35px 2px #1C141A50;
  margin-top: 60px; margin-left: 50%;
  transform: translateX(-50%);
  width: 1045px; height: 1450px;
`;