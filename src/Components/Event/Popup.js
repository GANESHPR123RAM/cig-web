import React from 'react'


function MyModal1 ({passfunction}){
    return (
        <>
            <div className="modal-overlay" onClick={passfunction}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1533" height="808" viewBox="0 0 1533 808" fill="none" className='modal2'>
                    <g filter="url(#filter0_bd_175_1671)">
                        <path d="M55.6247 112.195C54.7361 94.399 68.7561 79.4013 86.5713 79.0901L1429.87 55.6223C1448.81 55.2915 1463.76 71.5998 1461.79 90.4314L1397.19 708.741C1395.51 724.802 1381.97 737 1365.82 737H116.826C100.021 737 86.1673 723.821 85.3291 707.036L55.6247 112.195Z" fill="url(#paint0_linear_175_1671)" fill-opacity="0.5" shape-rendering="crispEdges" />
                    </g>
                    <defs>
                        <filter id="filter0_bd_175_1671" x="0.395811" y="0.428037" width="1532.53" height="807.529" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.8099" />
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_175_1671" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="7.88416" dy="7.88416" />
                            <feGaussianBlur stdDeviation="31.5367" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                            <feBlend mode="normal" in2="effect1_backgroundBlur_175_1671" result="effect2_dropShadow_175_1671" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_175_1671" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_175_1671" x1="785.753" y1="176.106" x2="785.753" y2="737" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#42DAED" />
                            <stop offset="1" stop-color="#0A6097" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </>

    );
};

export default MyModal1