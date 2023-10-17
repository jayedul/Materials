import React from 'react';

export function IconVideo({ width = 23, height = 31, color = window[window.CrewPointer || 'CrewHRM'].colors['primary'] }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 23 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.25 27.9375C19.7188 27.9375 20.1875 27.5273 20.1875 27V10.125H15.5C14.4453 10.125 13.625 9.30469 13.625 8.25V3.5625H4.25C3.72266 3.5625 3.3125 4.03125 3.3125 4.5V27C3.3125 27.5273 3.72266 27.9375 4.25 27.9375H19.25ZM0.5 4.5C0.5 2.44922 2.14062 0.75 4.25 0.75H13.918C14.9141 0.75 15.8516 1.16016 16.5547 1.86328L21.8867 7.19531C22.5898 7.89844 23 8.83594 23 9.83203V27C23 29.1094 21.3008 30.75 19.25 30.75H4.25C2.14062 30.75 0.5 29.1094 0.5 27V4.5ZM5.1875 17.625C5.1875 16.6289 6.00781 15.75 7.0625 15.75H12.6875C13.6836 15.75 14.5625 16.6289 14.5625 17.625V18.5625L17.1406 16.8633C17.2578 16.7461 17.4336 16.6875 17.5508 16.6875C17.9609 16.6875 18.3125 17.0391 18.3125 17.4492V23.4844C18.3125 23.8945 17.9609 24.1875 17.5508 24.1875C17.4336 24.1875 17.2578 24.1875 17.1406 24.0703L14.5625 22.3125V23.25C14.5625 24.3047 13.6836 25.125 12.6875 25.125H7.0625C6.00781 25.125 5.1875 24.3047 5.1875 23.25V17.625Z"
                fill={color}
            />
        </svg>
    );
}
