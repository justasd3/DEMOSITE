import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { history } from './../Store';

const Header = () => {
  const [click, setClick] = useState(false);
  const [fontSize, setWidth] = useState('40px');
  const [padding, setPadding] = useState('20px');

  const handleClick = () => {
    setClick(!click);
    if (click === false) {
      setWidth('50px');
      setPadding('20px');
    } else {
      setWidth('40px');
      setPadding('20px');
    }
  };

  return (
    <div className="nav">
      <div className="container">
        <div className="logo" style={{ fontSize, padding }}>
          <a
            onClick={() => {
              history.push('/Home');
              history.goForward();
            }}
          >
            DEMOSITE
          </a>
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
              <a>WORKS</a>
              <ul class="dropdown">
                <li>
                  <a
                    onClick={() => {
                      history.push('/Services');
                      history.goForward();
                    }}
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      history.push('/Services');
                      history.goForward();
                    }}
                  >
                    GRAPHIC
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      history.push('/Services');
                      history.goForward();
                    }}
                  >
                    DESIGN
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      history.push('/Services');
                      history.goForward();
                    }}
                  >
                    LOGO
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      history.push('/Services');
                      history.goForward();
                    }}
                  >
                    WEBSITE
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                onClick={() => {
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

        <div className="menu-icon" onClick={handleClick}>
          <i>{click ? <FaTimes /> : <FaBars />}</i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a
              onClick={() => {
                history.push('/Home');
                history.goForward();
                handleClick();
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
                handleClick();
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
                handleClick();
              }}
            >
              WORKS
            </a>
          </li>
          <li className="sub">
            <a
              onClick={() => {
                history.push('/Services');
                history.goForward();
                handleClick();
              }}
            >
              All
            </a>
          </li>
          <li className="sub">
            <a
              onClick={() => {
                history.push('/Services');
                history.goForward();
                handleClick();
              }}
            >
              GRAPHIC
            </a>
          </li>
          <li className="sub">
            <a
              onClick={() => {
                history.push('/Services');
                history.goForward();
                handleClick();
              }}
            >
              DESIGN
            </a>
          </li>
          <li className="sub">
            <a
              onClick={() => {
                history.push('/Services');
                history.goForward();
                handleClick();
              }}
            >
              LOGO
            </a>
          </li>
          <li className="sub">
            <a
              onClick={() => {
                history.push('/Services');
                history.goForward();
                handleClick();
              }}
            >
              WEBSITE
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                history.push('/Services');
                history.goForward();
                handleClick();
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
                handleClick();
              }}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
