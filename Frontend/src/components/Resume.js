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
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import temp from './img/upderConstruction.png';
 
function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
 
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
 
  return (
    <div>
      {/* <Document
        file="test.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p> */}
      <img 
        src = {temp}
        style={{maxHeight:'100%', maxWidth:'100%'}}
      />
    </div>
  );
}
export default Resume;