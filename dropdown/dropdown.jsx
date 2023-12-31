import React, { useEffect, useRef, useState } from 'react';

import { Popup } from '../popup/index.jsx';
import style from './dropdown.module.scss';
import { __, isEmpty } from '../helpers.jsx';
import { Conditional } from '../conditional.jsx';
import { input_class as className } from '../classes.jsx';

const content_style = {
    padding: '0px',
    border: 'none'
};

const list_class = 'padding-vertical-12 padding-horizontal-17 cursor-pointer font-size-15 font-weight-400'.classNames();

function getPopupStyle(classNames) {
    classNames = classNames
        .split(' ')
        .map((c) => c.trim())
        .filter((c) => c.indexOf('crewhrm-') === 0)
        .map((c) => c.replace('crewhrm-', ''));
    const styles = {};

    for (let i = 0; i < classNames.length; i++) {
        // Get border radius
        if (classNames[i].indexOf('border-radius-') === 0) {
            styles.borderRadius = classNames[i].replace(/\D/g, '') + 'px';
            break;
        }
    }

    return styles;
}

export function DropDown(props) {
    const {
        value: selected_value,
        nested = false,
        options = [],
        onChange,
        transparent,
        tabindex,
        textClassName = 'font-size-15 font-weight-400 color-text'.classNames(),
        position = 'center top',
        placeholder = __('Select'),
        addText,
        onAddClick,
		disabled,
		required=false,
        style: cssStyle={},
		showErrorsAlways=false,
		clearable=true,
        variant,
        size,
		iconSizeClass = 'font-size-24'.classNames()
    } = props;

    const ref = useRef();

    const [searchState, setSearchState] = useState('');
	const [errorState, setErrorState] = useState(null);

	const highlightError=()=>{
		setErrorState(required && isEmpty(selected_value));
	}

	useEffect(()=>{
		// Do not set as true on first mount
		if ( errorState === null ) {
			setErrorState(false);
			return;
		}
		highlightError();

	}, [selected_value]);

	useEffect(()=>{
		if( showErrorsAlways ) {
			highlightError();
		}
	}, [showErrorsAlways]);

    const pop_border =
        className.indexOf('border-1-5') > -1
            ? 'border-1-5'
            : className.indexOf('border-1') > -1
            ? 'border-1'
            : '';

    // Dropdown Variant: '' | borderless | primary
    const variantClass = (variant) => {
        if(!variant) return ''; // default

        const variantName = (variant === 'borderless') ? 
            'variant-borderless' : (variant === 'primary') ? 
            'variant-primary': ''
        
        return variantName;
    }

    // Dropdown Size: '' | sm | md
    const sizeClasses = (size) => {
        if(!size) return 'padding-15 border-radius-10 height-48'; // default size class

        const sizeClasses = (size === 'sm') ? 
            'padding-vertical-5 padding-horizontal-12 border-radius-5 height-32': (size === 'md') ? 
            'padding-vertical-5 padding-horizontal-15 border-radius-10 height-40': '';

        return sizeClasses;
    }

    const triggerPoint = (search = false) => {
        return (
            <div
                tabIndex={tabindex}
                className={
                    `select-dropdown ${variantClass(variant)} ${transparent ? 'transparent' : ''}`.classNames(style) +
                    'cursor-pointer d-flex align-items-center'.classNames() +
                    `${sizeClasses(size)} border-1-5 ${!errorState ? 'b-color-tertiary b-color-active-primary' : 'b-color-error'} width-p-100 d-block font-size-15 font-weight-400 line-height-25 color-text`.classNames()
                }
            >
                <div className={'flex-1 white-space-nowrap font-size-15 font-weight-400'.classNames() + textClassName}>
                    <Conditional show={!search}>
                        {selected_value !== undefined
                            ? options.find((o) => o.id === selected_value)?.label || placeholder
                            : placeholder}
                    </Conditional>
                    <Conditional show={search}>
                        <input
                            className={'text-field-flat font-size-15 font-weight-400'.classNames()}
                            placeholder={__('Search..')}
                            onChange={(e) => setSearchState(e.currentTarget.value)}
                        />
                    </Conditional>
                </div>
                <i 
					className={
						`ch-icon 
						${(!clearable || disabled || !selected_value) ? 'ch-icon-arrow-down' : 'ch-icon-times'} 
						margin-left-10 
						${disabled ? 'color-text-lighter cursor-not-allowed' : 'color-text-light'}`.classNames() +
						iconSizeClass
					}
					onClick={e=>{
						if ( clearable && selected_value ) {
							e.stopPropagation();
							onChange('');
						}
					}}></i>
            </div>
        );
    };

    const closeDropdown = (callback) => {
        setSearchState('');

        if (callback) {
            callback();
        }
    };

    return (
        <div data-crew="dropdown" ref={ref}>
            <Popup
                position={position}
                on="click"
				disabled={disabled}
                closeOnDocumentClick={true}
                mouseLeaveDelay={300}
                mouseEnterDelay={0}
                contentStyle={{ ...content_style, ...cssStyle }}
                arrow={false}
                nested={nested}
                trigger={triggerPoint()}
                onClose={() => closeDropdown()}
            >
                {(close) => {
                    // Determine border width, color and radius from the class name to sync the popup accordingly
                    let popup_styles = ref.current
                        ? { minWidth: ref.current.clientWidth + 'px' }
                        : {};
                    popup_styles = { ...popup_styles, ...getPopupStyle(className) };

                    return (
                        <div
                            data-crew="dropdown-popup"
                            className={
                                'select-dropdown-popup'.classNames(style) +
                                `box-shadow-thick border-radius-10 ${pop_border} b-color-tertiary bg-color-white white-space-nowrap`.classNames()
                            }
                            style={popup_styles}
                        >
                            <div className={'trigger-point'.classNames(style)}>
                                {triggerPoint(options.length > 8)}
                            </div>
                            <div className={'list-wrapper'.classNames(style)}>
                                {options
                                    .filter(
                                        (o) =>
                                            !searchState ||
                                            o.label
                                                .toLowerCase()
                                                .indexOf(searchState.toLowerCase()) > -1
                                    )
                                    .map((option) => {
                                        let { id, label } = option;
                                        let classes = `list-item ${
                                            id == selected_value ? 'active' : ''
                                        }`;
                                        return (
                                            <div
                                                key={id}
                                                data-crew="dropdown-item"
                                                className={classes.classNames(style) + list_class}
                                                onClick={() => {
                                                    onChange(id);
                                                    closeDropdown(close);
                                                }}
                                            >
                                                {label}
                                            </div>
                                        );
                                    })}
                            </div>

                            {addText && (
                                <div
                                    data-crew="dropdown-item-add"
                                    className={'add-item'.classNames(style) + list_class}
                                    style={{ paddingTop: '10px', paddingBottom: '10px' }}
                                    onClick={() => {
                                        closeDropdown(close);
                                        onAddClick();
                                    }}
                                >
                                    <i
                                        className={'ch-icon ch-icon-add-square vertical-align-middle d-inline-block margin-right-10'.classNames()}
                                    ></i>
                                    <span className={'vertical-align-middle'.classNames()}>
                                        {addText}
                                    </span>
                                </div>
                            )}
                        </div>
                    );
                }}
            </Popup>
        </div>
    );
}

export function Options(props) {
    const {
        options,
        onClick,
        className = '',
        position = 'bottom right',
        style: cssStyle = {},
        children
    } = props;

    return (
        <Popup
            position={position}
            on="click"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{ ...content_style, ...cssStyle }}
            arrow={false}
            trigger={
                <div
                    data-crew="options"
                    className={'d-inline-block cursor-pointer'.classNames() + className}
                >
                    {children}
                </div>
            }
        >
            {(close) => {
                return (
                    <div
                        data-crew="options-popup"
                        className={
                            'options-popup'.classNames(style) +
                            'box-shadow-thick border-radius-10 border-1-5 b-color-tertiary bg-color-white'.classNames()
                        }
                    >
                        <div className={'list-wrapper'.classNames(style)}>
                            {options.map((option) => {
                                let { id, label, icon } = option;
                                return (
                                    <div
                                        data-crew="options-popup-item"
                                        key={id}
                                        className={
                                            'd-flex align-items-center'.classNames() +
                                            'list-item'.classNames(style) +
                                            list_class
                                        }
                                        onClick={() => {
                                            onClick(id);
                                            close();
                                        }}
                                    >
                                        <Conditional show={icon}>
                                            <i
                                                className={icon + 'margin-right-10'.classNames()}
                                            ></i>
                                        </Conditional>

                                        {label}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            }}
        </Popup>
    );
}

export function DropDownUnmanaged(props) {
    const {
        className = '',
        position = 'bottom right',
        children,
        rendered,
        style: cssStyle = {}
    } = props;

    return (
        <Popup
            position={position}
            closeOnDocumentClick={false}
            on={[]}
            arrow={false}
            open={rendered ? true : false}
            darken={false}
            contentStyle={{ ...content_style, ...cssStyle }}
            trigger={<div className={className}>{children}</div>}
        >
            {rendered}
        </Popup>
    );
}
