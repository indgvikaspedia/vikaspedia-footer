import React from 'react';
// import {BrowserRouter as Router,NavLink} from 'react-router-dom';
//  import Route from 'react-router-dom/Route';
// import Image from 'react-bootstrap/Image';

import {
  Col,
  Row,
  Container,
  Nav,
  ListGroup,
  Form
  // OverlayTrigger,
  // Tooltip
} from 'react-bootstrap';
import FooterColumn from './FooterColumn';
import { lgn } from './json';
// import { connect, useDispatch } from 'react-redux';
// import { fetchLangugeData } from '../actions';
// import PropTypes, { func } from 'prop-types';
// import { getWebSiteLanguage } from '../../helpers/LanguageService';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
// import '../src/Style.css';
import '../src/Style.css';
import '../src/minified.css'

const Footer = props => {
  const _lgn  = lgn;

  

  // function renderTooltipColor(props) {
  //   return <Tooltip {...props}>{props}</Tooltip>;
  // }

  return _lgn != null && _lgn != 'undefined' ? (
    <>
      <div className="footer-align-center">
        <style>{`@media print {.footer-align-center{display: none;}}`}</style>
        <div className="">
          <div>
            <hr className="separater" />
          </div>
          {/* <Row className="separater"></Row> */}
          <footer className="links">
            <Container className="containerModify">
              <React.Fragment>
                <Row className="row-align-center">
                  <FooterColumn
                    data={_lgn.agriculture}
                    data1={_lgn.agri_data1}
                    data2={_lgn.agri_data2}
                    data3={_lgn.agri_data3}
                    data4={_lgn.agri_data4}
                    data5={_lgn.agri_data5}
                    see_more={_lgn.see_more}
                    data_url_1={_lgn.agri_data1_url}
                    data_url_2={_lgn.agri_data2_url}
                    data_url_3={_lgn.agri_data3_url}
                    data_url_4={_lgn.agri_data4_url}
                    data_url_5={_lgn.agri_data5_url}
                    see_more_url={_lgn.agri_see_more_url}
                  />
                  <FooterColumn
                    data={_lgn.health}
                    data1={_lgn.health_data1}
                    data2={_lgn.health_data2}
                    data3={_lgn.health_data3}
                    data4={_lgn.health_data4}
                    data5={_lgn.health_data5}
                    see_more={_lgn.see_more}
                    data_url_1={_lgn.health_data1_url}
                    data_url_2={_lgn.health_data2_url}
                    data_url_3={_lgn.health_data3_url}
                    data_url_4={_lgn.health_data4_url}
                    data_url_5={_lgn.health_data5_url}
                    see_more_url={_lgn.health_see_more_url}
                  />
                  <FooterColumn
                    data={_lgn.education}
                    data1={_lgn.edu_data1}
                    data2={_lgn.edu_data2}
                    data3={_lgn.edu_data3}
                    data4={_lgn.edu_data4}
                    data5={_lgn.edu_data5}
                    see_more={_lgn.see_more}
                    data_url_1={_lgn.edu_data1_url}
                    data_url_2={_lgn.edu_data2_url}
                    data_url_3={_lgn.edu_data3_url}
                    data_url_4={_lgn.edu_data4_url}
                    data_url_5={_lgn.edu_data5_url}
                    see_more_url={_lgn.edu_see_more_url}
                  />
                  <FooterColumn
                    data={_lgn.social_welfare}
                    data1={_lgn.social_data1}
                    data2={_lgn.social_data2}
                    data3={_lgn.social_data3}
                    data4={_lgn.social_data4}
                    data5={_lgn.social_data5}
                    see_more={_lgn.see_more}
                    data_url_1={_lgn.social_data1_url}
                    data_url_2={_lgn.social_data2_url}
                    data_url_3={_lgn.social_data3_url}
                    data_url_4={_lgn.social_data4_url}
                    data_url_5={_lgn.social_data5_url}
                    see_more_url={_lgn.social_see_more_url}
                  />

                  <FooterColumn
                    data={_lgn.energy}
                    data1={_lgn.energy_data1}
                    data2={_lgn.energy_data2}
                    data3={_lgn.energy_data3}
                    data4={_lgn.energy_data4}
                    data5={_lgn.energy_data5}
                    see_more={_lgn.see_more}
                    data_url_1={_lgn.energy_data1_url}
                    data_url_2={_lgn.energy_data2_url}
                    data_url_3={_lgn.energy_data3_url}
                    data_url_4={_lgn.energy_data4_url}
                    data_url_5={_lgn.energy_data5_url}
                    see_more_url={_lgn.energy_see_more_url}
                  />

                  <FooterColumn
                    data={_lgn.e_governance}
                    data1={_lgn.egov_data1}
                    data2={_lgn.egov_data2}
                    data3={_lgn.egov_data3}
                    data4={_lgn.egov_data4}
                    data5={_lgn.egov_data5}
                    see_more={_lgn.see_more}
                    data_url_1={_lgn.egov_data1_url}
                    data_url_2={_lgn.egov_data2_url}
                    data_url_3={_lgn.egov_data3_url}
                    data_url_4={_lgn.egov_data4_url}
                    data_url_5={_lgn.egov_data5_url}
                    see_more_url={_lgn.egov_see_more_url}
                  />
                  {/* <FooterColumn
                    data={_lgn.services}
                    data1={_lgn.services_data1}
                    data2={_lgn.services_data2}
                    data3={_lgn.services_data3}
                    data4={_lgn.services_data4}
                    data5={_lgn.services_data5}
                    see_more={_lgn.see_more}
                    data_url_1={_lgn.services_data1_url}
                    data_url_2={_lgn.services_data2_url}
                    data_url_3={_lgn.services_data3_url}
                    data_url_4={_lgn.services_data4_url}
                    data_url_5={_lgn.services_data5_url}
                    see_more_url={_lgn.services_see_more_url}
                  /> */}
                  <div className="socialMedia" />
                  <ListGroup>
                    <a
                      title="twitter(External website that opens in new window)"
                      href="https://twitter.com/vikaspedia"
                      target="_blank"
                      style={{ height: '19px' }}
                    >
                      <ListGroup.Item
                        className="footer-twitter"
                        style={{ border: 'none' }}
                      ></ListGroup.Item>
                    </a>
                    <a
                      title="facebook(External website that opens in new window)"
                      href="https://www.facebook.com/vikaspedia"
                      target="_blank"
                      style={{ height: '19px' }}
                    >
                      <ListGroup.Item
                        className="footer-facebook"
                        style={{ border: 'none' }}
                      ></ListGroup.Item>
                    </a>
                    <a
                      title="youtube(External website that opens in new window)"
                      href="https://www.youtube.com/user/vikaspedia"
                      target="_blank"
                      style={{ height: '19px' }}
                    >
                      <ListGroup.Item
                        className="footer-youtube"
                        style={{ border: 'none' }}
                      ></ListGroup.Item>
                    </a>
                    {/* <a
                      href="https://plus.google.com/115861519085705835118/posts"
                      target="_blank"
                      style={{ height: '19px' }}
                    >
                      <ListGroup.Item
                        className="footer-googleplus"
                        style={{ border: 'none' }}
                      ></ListGroup.Item>
                    </a> */}
                    {/* <a
                      title="RSS"
                      href="/indg-rss-feeds"
                      target="_blank"
                      style={{ height: '19px' }}
                    >
                      <ListGroup.Item
                        className="footer-rss"
                        style={{ border: 'none' }}
                      ></ListGroup.Item>
                    </a> */}
                    <a
                      title="Give Your Feedback"
                      href="/feedback"
                      target="_blank"
                      style={{ height: '19px' }}
                    >
                      <ListGroup.Item
                        className="footer-feedback"
                        style={{ border: 'none' }}
                      ></ListGroup.Item>
                    </a>

                    {/* <OverlayTrigger
                      placement="left"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltipColor('Participate in Discussion')}
                    >
                      <a href="Popupdiscussion" target="_blank" style={{ height: '19px' }}>
                        <ListGroup.Item
                          className="footer-discussion"
                          style={{ border: 'none' }}
                        ></ListGroup.Item>
                      </a>
                    </OverlayTrigger> */}
                    {/* <a
                      title="Vote in Opinion Poll"
                      href="poll"
                      target="_blank"
                      style={{ height: '19px' }}
                    >
                      <ListGroup.Item
                        className="footer-poll"
                        style={{ border: 'none' }}
                      ></ListGroup.Item>
                    </a> */}
                  </ListGroup>
                  {/* <Footercolumn/><Footercolumn/>,<Footercolumn/>,<Footercolumn/>,<Footercolumn/> */}
                </Row>
              </React.Fragment>
            </Container>
          </footer>

          <footer className="history">
            <Container className="container-aboutft">
              {/* <React.Fragment> */}
              {/* <Row className="historyRow">
                  <Col md="1"> */}
              <Form>
                <Form.Row style={{ marginLeft: '63px' }}>
                  <Col md="1">
                    <div className="logo"></div>
                  </Col>

                  {/* </Col> */}
                  {/* <Col md="10" className="historyAlign"> */}
                  <Col>
                    <p className="historyContent">
                      {_lgn.portal_about_1}{' '}
                      <a
                        target="_blank"
                        href="https://www.meity.gov.in/"
                        className="historyContent historyLink ext-link-icon"
                      >
                        {_lgn.meity_text}
                        {/* <span className="ext-link-icon"></span> */}
                      </a>{' '}
                      {_lgn.portal_about_2}{' '}
                      <a
                        target="_blank"
                        href="https://cdac.in/index.aspx?id=hyd"
                        className="historyContent historyLink ext-link-icon"
                      >
                        {_lgn.cdac_text}
                        {/* <span className="ext-link-icon"></span> */}
                      </a>
                      {_lgn.portal_about_3}
                    </p>
                  </Col>
                </Form.Row>
              </Form>

              {/* </Col>
                </Row> */}
              {/* </React.Fragment> */}
            </Container>
          </footer>

          <div className="about">
            <Container className="aboutContainer">
              <Row>
                <Col md={2} sm={2}>
                  <div className="satya" />
                </Col>
                <Col md={8} sm={8}>
                  <div className="aboutContent">
                    <Nav className="about-linksalign">
                      {/* <ul>
                        <li style={{ float: 'left', listStyle: 'none' }}>
                          <a href="http://vikaspedia.in/about-us" className="aboutLink">
                            {_lgn.about_us}
                          </a>
                        </li>
                        <li style={{ float: 'left', listStyle: 'none' }}>
                          <a
                            href="http://vikaspedia.in/about-us/link-to-us"
                            style={{ marginLeft: '19px' }}
                            className="aboutLink"
                          >
                            {_lgn.link_to_us}
                          </a>
                        </li>
                        <li style={{ float: 'left', listStyle: 'none' }}>
                          <a
                            href="http://vikaspedia.in/about-us/contact-us"
                            style={{ marginLeft: '19px' }}
                            className="aboutLink"
                          >
                            {_lgn.contact_us}
                          </a>
                        </li>
                        <li style={{ float: 'left', listStyle: 'none' }}>
                          <a
                            href="http://vikaspedia.in/help/"
                            style={{ marginLeft: '19px' }}
                            className="aboutLink"
                          >
                            {_lgn.help}
                          </a>
                        </li>
                        <li style={{ float: 'left', listStyle: 'none' }}>
                          <a
                            href="http://vikaspedia.in/portal-policies"
                            style={{ marginLeft: '19px' }}
                            className="aboutLink"
                          >
                            {_lgn.portal_policies}
                          </a>
                        </li>
                        <li style={{ float: 'left', listStyle: 'none' }}>
                          <a href="#" style={{ marginLeft: '19px' }} className="aboutLink">
                            {_lgn.add_to_favourite}
                          </a>
                        </li>
                        <li style={{ float: 'left', listStyle: 'none' }}>
                          <Link
                            to={'/sitemap'}
                            style={{ marginLeft: '19px' }}
                            className="aboutLink"
                          >
                            {_lgn.sitemap}
                          </Link>
                        </li>
                        <li style={{ float: 'left', listStyle: 'none' }}>
                          <a
                            href="http://vikaspedia.in/contact-info"
                            style={{ marginLeft: '19px' }}
                            className="aboutLink"
                          >
                            {_lgn.give_your_feedback}
                          </a>
                        </li>
                      </ul> */}

                      <Nav.Item>
                        <Nav.Link eventKey="link-1" href="/about-us" className="aboutLink">
                          {_lgn.about_us}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="link-2"
                          href="/about-us/link-to-us"
                          className="aboutLink"
                        >
                          {_lgn.link_to_us}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="link-2"
                          href="/about-us/contact-us"
                          className="aboutLink"
                        >
                          {_lgn.contact_us}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="link-2" href="/help/" className="aboutLink">
                          {_lgn.help}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="link-2" href="/portal-policies" className="aboutLink">
                          {_lgn.portal_policies}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="link-2" href="#" className="aboutLink">
                          {_lgn.add_to_favourite}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="link-2" href="/sitemap" className="aboutLink">
                          {_lgn.sitemap}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="link-2" href="/feedback" className="aboutLink">
                          {_lgn.give_your_feedback}
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Nav className="LM-margin">
                      <ul>
                        <li style={{ float: 'left', listStyle: 'none', color: 'white' }}>
                          <span>{_lgn.last_modified}</span>
                          {/* Mar 17, 2016 */}
                          {_lgn.last_modified_date}
                        </li>
                        <li style={{ float: 'left', listStyle: 'none', color: 'white' }}>
                          {' . '} {_lgn.all_right_reserved}
                        </li>
                      </ul>
                      <div className="digitalLogo" />
                      <div className="indiaGovLogo" />
                    </Nav>
                  </div>
                </Col>
                <Col md={2} sm={2}>
                  <div className="cdacLogo" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  ) : null;
};
// const mapStateToProps = state => {
//   return {
//     _lgn: state.LanguageReducer.lgn
//   };
// };
//  export default connect(mapStateToProps)(Footer);
//export default (Footer);

// const loadData = (store, param, url, host) => {
//   // return store.dispatch(
//   //   fetchLangugeData('/' + getWebSiteLanguage(host) + '/' + getWebSiteLanguage(host))
//   // );
// };
// Footer.propTypes = {
//   match: PropTypes.objectOf(PropTypes.any),
//   fetchLangugeData: PropTypes.func
// };

// Footer.defaultProps = {
//   articles: [],
//   match: null,
//   fetchLangugeData: null
// };

// export default {
//   component: connect(mapStateToProps, { fetchLangugeData })(Footer),
//   loadData
// };
export default Footer;
