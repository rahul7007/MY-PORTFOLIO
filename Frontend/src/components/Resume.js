// import React, { Component } from 'react';
// import { Document, Page } from 'react-pdf';
// import samplePDF from './test.pdf';

// class Resume extends Component {
//     render() {

//         return (
//             <div>
//                 <Document >
//                    file={samplePDF} 
//                 </Document> 
//                 cc
//             </div>
//         );
//     }
// }
 
// export default Resume;
// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';
// import temp from './img/upderConstruction.png';
 
// function Resume() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
 
//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }
 
//   return (
//     <div>
//       {/* <Document
//         file="test.pdf"
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>Page {pageNumber} of {numPages}</p> */}
//       <img 
//         src = {temp}
//         style={{maxHeight:'100%', maxWidth:'100%'}}
//       />
//     </div>
//   );
// }
// export default Resume;

import React from 'react';
import SinglePagePDFViewer from "../components/pdf/single-page";
import Document from "../components/pdf/single-page";
import samplePDF from '../NeelCVMain.pdf'
import './Resume.css'
 
function Resume() {
 
  return (
    
    // <div>
    //   <h1>TEST</h1>
    // </div>
    <div>
      {/* <SinglePagePDFViewer pdf={samplePDF} /> */}
      <Document 
          pdf={samplePDF}
      />
      <a href={samplePDF}>Click here for my pdf</a>
    </div>
  );
}
export default Resume;