import React from "react";

function Result({ ShortLinkData, loddingdata }) {
  return (
    <>
      <div className="Result">
        <h1 className="n">SHORT URL'S</h1>
      </div>
      {loddingdata ? (
        <h1 className="lodding">Lodding...</h1>
      ) : ShortLinkData.ok ? (
        <div className="grid">
          <div className="ite">
            <div className="item-Result">
              <h1 className="url-Link">
                {ShortLinkData.result.full_short_link}
              </h1>
            </div>
          </div>
          <div className="ite">
            <div className="item-Result">
              <h1 className="url-Link">
                {ShortLinkData.result.full_short_link2}
              </h1>
            </div>
          </div>
          <div className="ite">
            <div className="item-Result">
              <h1 className="url-Link">
                {ShortLinkData.result.full_short_link3}
              </h1>
            </div>
          </div>
          <div className="ite">
            <div className="item-Result">
              <h1 className="url-Link">{ShortLinkData.result.short_link}</h1>
            </div>
          </div>
          <div className="ite">
            <div className="item-Result">
              <h1 className="url-Link">{ShortLinkData.result.short_link2}</h1>
            </div>
          </div>
          <div className="ite">
            <div className="item-Result">
              <h1 className="url-Link">{ShortLinkData.result.short_link3}</h1>
            </div>
          </div>

          {/* QR code */}
          <div className="qr">
            <h1 className="h1_q">QR code</h1>
            <div className="img_qr">
              <img
                className="qr_img"
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=${ShortLinkData.result.original_link}`}
                alt="Qr.png"
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Result;
