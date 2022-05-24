import React, { useEffect } from 'react';
import { Container, Col } from 'react-bootstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
// import { Link } from '../node_modules/react-router-dom/react-router-dom.min'
import '../src/Style.css';
import '../src/minified.css'

export default function FooterColumn(data) {
  return (
      <Router>
    <div className="footer-margin">
      <Container>
        <Col>
          <div className="columnheading footerlinksheader"> {data.data}</div>
          <div className="columncontent footerlinks">
            <li>
              {' '}
              <Link to={data.data_url_1} className="linkColor">
                {' '}
                {data.data1}
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link to={data.data_url_2} className="linkColor">
                {data.data2}
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link to={data.data_url_3} className="linkColor">
                {' '}
                {data.data3}{' '}
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link to={data.data_url_4} className="linkColor">
                {data.data4}
              </Link>{' '}
            </li>
            <li>
              {' '}
              <Link to={data.data_url_5} className="linkColor">
                {' '}
                {data.data5}{' '}
              </Link>{' '}
            </li>
            <li className="seeMore">
              <Link to={data.see_more_url} className="linkColor">
                {' '}
                {data.see_more}
              </Link>
            </li>
          </div>
        </Col>
      </Container>
    </div>
    </Router>
  );
}
