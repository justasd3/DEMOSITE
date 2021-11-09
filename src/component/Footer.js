import React from 'react';
import { history } from './../Store';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <a
            onClick={() => {
              history.push('/Home');
              history.goForward();
            }}
          >
            DEMOSITE
          </a>{' '}
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aut
          doloremque est blanditiis deserunt iusto fugit veniam cumque adipisci
          similique, debitis expedita minus in exercitationem porro reiciendis
          odio natus ullam.
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <a
                onClick={() => {
                  history.push('/Home');
                  history.goForward();
                }}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  history.push('/Services');
                  history.goForward();
                }}
              >
                SERVICE
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  history.push('/Services');
                  history.goForward();
                }}
              >
                WORKS
              </a>
            </li>
            <li>
              <a
                honClick={() => {
                  history.push('/Services');
                  history.goForward();
                }}
              >
                ABOUT ME
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  history.push('/Services');
                  history.goForward();
                }}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
