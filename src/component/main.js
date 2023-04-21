import React, { useRef } from "react";

function Main(props) {
  const serref = useRef();
  return (
    <>
      <div className="main">
        <div className="texts">
          <div className="de"></div>
          <h1 className="header"> URL Shortener</h1>
          <p className="paragraf">
            Create memorable links in seconds with U Shortener, a free tool for
            shortening URLs.
          </p>
        </div>

        {/*Searchbaar */}
        <div className="searchbaar">
          <div className="itrems">
            <div className="div_input">
              <input
                type="text"
                className="inpute"
                placeholder="ENTER LINK HERE"
                value={props.searchData}
                onChange={() => props.eventHandler(serref.current.value)}
                ref={serref}
              />
            </div>
            <button className="btn" onClick={props.searchUrlData}>
              <h1 className="Short">Short</h1>
            </button>
          </div>
        </div>
        {props.ErrorHandling.error ? (
          <>
            <p className="error">This is not a valid URL</p>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
export default Main;
