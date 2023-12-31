import React from 'react';

import { __ } from './helpers.jsx';
import { Conditional } from './conditional.jsx';
import { LoadingIcon } from './loading-icon/loading-icon.jsx';

export function FormActionButtons(props) {
	const {
		onBack,
		onNext,
		backText = __('Back'),
		nextText = __('Next'),
		disabledPrevious = false,
		disabledNext = false,
		loading=false
	} = props;

	return (
		<div className={'d-flex column-gap-40 margin-bottom-30'.classNames()}>
			<Conditional show={onBack}>
				<div style={{ width: '138px' }}>
					<button
						disabled={disabledPrevious}
						className={'d-inline-block button button-primary button-outlined button-outlined-light button-full-width'.classNames()}
						onClick={onBack}
					>
						{backText}
					</button>
				</div>
			</Conditional>

			<Conditional show={onNext}>
				<div className={'flex-1'.classNames()}>
					<button
						disabled={disabledNext}
						className={'button button-primary button-full-width'.classNames()}
						onClick={onNext}
					>
						{nextText} <LoadingIcon show={loading}/>
					</button>
				</div>
			</Conditional>
		</div>
	);
}
