import React from 'react';
import { data_pointer } from '../helpers.jsx';

export function IconAudio({ color = window[data_pointer]?.colors?.primary || '#1A1A1A', width = 23, height = 31 }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 23 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.25 27.9375H19.25C19.7188 27.9375 20.1875 27.5273 20.1875 27V10.125H15.5C14.4453 10.125 13.625 9.30469 13.625 8.25V3.5625H4.25C3.72266 3.5625 3.3125 4.03125 3.3125 4.5V27C3.3125 27.5273 3.72266 27.9375 4.25 27.9375ZM0.5 4.5C0.5 2.44922 2.14062 0.75 4.25 0.75H13.918C14.9141 0.75 15.8516 1.16016 16.5547 1.86328L21.8867 7.19531C22.5898 7.89844 23 8.83594 23 9.83203V27C23 29.1094 21.3008 30.75 19.25 30.75H4.25C2.14062 30.75 0.5 29.1094 0.5 27V4.5ZM11.75 16.6875V24.1875C11.75 24.5977 11.5156 24.9492 11.1641 25.0664C10.8125 25.2422 10.4023 25.125 10.1094 24.8906L8.05859 22.7812H7.0625C6.53516 22.7812 6.125 22.3711 6.125 21.8438V19.0312C6.125 18.5625 6.53516 18.0938 7.0625 18.0938H8.05859L10.1094 16.043C10.4023 15.8086 10.8125 15.6914 11.1641 15.8672C11.5156 15.9844 11.75 16.3359 11.75 16.6875ZM16.7305 16.4531C17.4336 17.625 17.8438 19.0312 17.8438 20.4375C17.8438 21.9023 17.4336 23.25 16.7305 24.4219C16.3789 25.125 15.5 25.3594 14.8555 24.9492C14.1523 24.5977 13.918 23.7188 14.3281 23.0156C14.7383 22.3125 15.0312 21.4336 15.0312 20.4375C15.0312 19.5 14.7383 18.6211 14.3281 17.8594C13.918 17.2148 14.1523 16.3359 14.8555 15.9844C15.5 15.5742 16.3789 15.8086 16.7305 16.4531Z"
                fill={color}
            />
        </svg>
    );
}
