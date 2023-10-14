import React, { useEffect, useRef } from 'react';

import style from './style.module.scss';

export function WpDashboardFullPage(props) {

    const { children } = props;

	const ref = useRef();

	const setHeight=()=>{
		ref?.current?.style?.minHeight = (window.innerHeight - 32)+'px';
	}

    useEffect(() => {
        const wrapper = document.getElementById('wpcontent');
        wrapper.style.padding = 0;
        wrapper.style.paddingLeft = 0;
        wrapper.style.paddingRight = 0;
        wrapper.style.paddingBottom = 0;
		
		setTimeout(()=>ref?.current?.scrollIntoView(true), 500);

		setHeight();
		window.addEventListener('resize', setHeight);
		return ()=>window.removeEventListener('resize', setHeight);
    }, []);

    return (
        <div ref={ref} className={'wrapper'.classNames(style) + 'd-flex w-full'.classNames()}>
			<div className={'flex-1'.classNames()}>
            	{children}
			</div>
        </div>
    );
}
