import React from 'react';

export function LogoExtended({ color = window[window.CrewPointer || 'CrewHRM'].colors['primary'], height = 20 }) {
    const width = (105 / 20) * height;

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 105 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M88.0564 2.18036V19.2209H90.2037V8.86612L96.1427 17.1422H96.1884L102.287 8.51878V19.2209H104.48V2.18036H104.435L96.2065 13.7171L88.0793 2.18036H88.0564Z"
                fill={color}
            />
            <path
                d="M72.4838 2.70574V19.2209H70.2909V11.9798H61.6336V19.2209H59.4179V2.70574H61.6336V9.87829H70.2909V2.70574H72.4838Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M79.506 2.70574C80.3435 2.70574 81.1126 2.81995 81.8131 3.04838C82.5288 3.26157 83.1456 3.58898 83.6633 4.0306C84.1963 4.457 84.6075 4.98999 84.8968 5.62958C85.2014 6.25394 85.3537 6.9849 85.3537 7.82246C85.3537 8.47728 85.2547 9.11687 85.0567 9.74123C84.874 10.3656 84.5618 10.9367 84.1202 11.4544C83.7313 11.897 83.2361 12.2686 82.6346 12.5695L86.7699 19.2209H84.2115L80.3262 13.1298C80.1497 13.1398 79.9676 13.1448 79.7801 13.1448H77.3359V19.2209H75.1202V2.70574H79.506ZM79.7344 11.0204C80.3892 11.0204 80.9298 10.9214 81.3562 10.7235C81.7978 10.5255 82.1405 10.2742 82.3841 9.96966C82.6278 9.64986 82.8029 9.30722 82.9095 8.94174C83.0161 8.57626 83.0694 8.23363 83.0694 7.91383C83.0694 7.57881 83.0085 7.23617 82.8867 6.88592C82.7801 6.52044 82.5973 6.18541 82.3385 5.88085C82.0948 5.57628 81.7674 5.32501 81.3562 5.12704C80.9603 4.92907 80.473 4.83009 79.8943 4.83009H77.3359V11.0204H79.7344Z"
                fill={color}
            />
            <path
                d="M23.2944 8.11981C22.67 8.48529 22.2208 9.03351 21.9467 9.76447V7.80001H19V19.2213H21.9467V13.7619C21.9467 12.6655 22.2969 11.8812 22.9974 11.4091C23.7132 10.9371 24.5203 10.7543 25.4187 10.8609V7.57159C24.6421 7.57159 23.934 7.75433 23.2944 8.11981Z"
                fill={color}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28.7186 14.7213C29.1146 16.1528 30.1882 16.8685 31.9394 16.8685C33.0663 16.8685 33.9191 16.4878 34.4978 15.7264L36.8734 17.0969C35.7465 18.7263 34.0866 19.5411 31.8937 19.5411C30.0054 19.5411 28.4902 18.97 27.3481 17.8279C26.2059 16.6858 25.6349 15.2467 25.6349 13.5106C25.6349 11.7898 26.1983 10.3584 27.3252 9.21625C28.4521 8.0589 29.8988 7.48022 31.6653 7.48022C33.3404 7.48022 34.7186 8.0589 35.7998 9.21625C36.8962 10.3736 37.4445 11.8051 37.4445 13.5106C37.4445 13.8914 37.4064 14.2949 37.3303 14.7213H28.7186ZM28.6729 12.437H34.4978C34.3303 11.6604 33.98 11.0817 33.447 10.701C32.9293 10.3203 32.3354 10.1299 31.6653 10.1299C30.8734 10.1299 30.2186 10.3355 29.7009 10.7467C29.1831 11.1426 28.8405 11.7061 28.6729 12.437Z"
                fill={color}
            />
            <path
                d="M54.5557 7.80001H51.4263L49.4846 14.8355L47.406 7.80001H44.6192L42.5405 14.8127L40.5989 7.80001H37.4695L41.1014 19.2213H43.9111L46.0126 12.3L48.1141 19.2213H50.9237L54.5557 7.80001Z"
                fill={color}
            />
            <path
                d="M16.152 15.7798C15.1194 17.4931 13.6643 18.69 11.8337 19.3706C10.449 19.887 9.01734 20.0982 7.56224 19.9574C5.63776 19.7696 3.9245 18.9717 2.49287 17.587C1.249 16.3431 0.474515 14.8176 0.169414 13.0574C-0.206095 10.9452 0.0285981 8.90333 1.01431 7.02579C1.8592 5.38294 3.10308 4.20947 4.72246 3.43498C5.84899 2.89519 7.02245 2.63703 8.24285 2.61356C8.40714 2.61356 8.71224 2.59009 8.75918 2.4258C9.06428 1.60438 9.2755 0.82989 9.76836 0.102342C9.83877 0.0084649 9.93264 -0.0150044 10.0265 0.0084649L12.2092 0.806421C12.35 0.85336 12.3969 1.04111 12.3265 1.15846C11.951 1.74519 10.3082 2.87172 11.0122 2.94213C11.5051 2.98907 11.7632 3.08294 11.9979 3.15335C13.1714 3.52886 14.2041 4.11559 15.0724 5.0309C15.7765 5.80538 16.2224 6.69722 16.2224 7.7768C16.2224 9.44313 15.2132 10.6635 13.6643 10.9686C11.2469 11.438 9.18163 10.0768 8.3602 7.56558C8.14898 6.88497 8.00816 6.18089 7.98469 5.47681C7.98469 5.4064 7.96122 5.35947 7.96122 5.28906C7.4449 5.31253 6.97551 5.4064 6.50613 5.59416C4.81634 6.22783 3.68981 7.4717 3.17348 9.25537C2.61022 11.1564 2.79798 13.0105 3.80716 14.7237C4.60511 16.0849 5.75511 16.9768 7.25714 17.2349C9.46326 17.6104 11.4581 17.0706 13.0541 15.3339M10.6602 5.66457C10.3786 5.78191 10.8479 7.1666 11.3173 7.80027C11.599 8.19925 11.9979 8.43395 12.4673 8.48088C12.9602 8.52782 13.3122 8.26966 13.4061 7.80027C13.4765 7.42477 13.3357 7.11966 13.101 6.83803C12.6786 6.34518 12.1153 6.06354 11.552 5.80538C11.5755 5.82885 10.8714 5.57069 10.6602 5.66457Z"
                fill={color}
            />
        </svg>
    );
}
