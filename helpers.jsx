import { countries_object } from './data.jsx';

export const patterns = {
	email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
	phone: /^[a-zA-Z0-9\-()\+\s]{10,15}$/,
	zip_code: /^[A-Za-z0-9\s-]{4,10}$/,
	url: /^(http|https):\/\/[A-Za-z0-9.-]+(\.[A-Za-z]{2,})?(:\d+)?(\/\S*)?$/,
}

export function getElementDataSet(element) {
	let { dataset = {} } = element;
	let data = {};

	for (let k in dataset) {
		let _json;
		try {
			_json = JSON.parse(dataset[k]);
		} catch (error) {

		}

		data[k] = _json ? _json : dataset[k];
	}

	return data;
}

export function getRandomString() {
	const timestamp = new Date().getTime().toString();
	const randomPortion = Math.random().toString(36).substring(2);
	return '_' + timestamp + randomPortion;
}

export function __(txt) {
	const { __ } = window.wp?.i18n || {};
	return typeof __ == 'function' ? __(txt, 'crewhrm') : txt;
}

export function sprintf(str, ...params) {
	let find = '%s';

	while (true) {
		let replace = params.shift();
		if (replace === undefined || str.indexOf(find) === -1) {
			break;
		}

		str = str.replace(find, replace);
	}

	return str;
}

export function getFlag(countryCode) {
	const codePoints = (countryCode || '')
		.toUpperCase()
		.split('')
		.map((char) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}

export function replaceUrlsWithAnchors(text, props = {}) {
	if (typeof text !== 'string') {
		return text;
	}

	let { className = '' } = props;

	// Regular expression to match URLs in the text
	var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

	// Replace URLs with anchor tags
	var replacedText = text.replace(urlRegex, function (url) {
		return (
			'<a href="' +
            url +
            '" target="_blank" rel="noopener noreferrer nofollow" class="' +
            className +
            '">' +
            url +
            '</a>'
		);
	});

	replacedText = replacedText.replaceAll('\n', '<br/>');

	return replacedText;
}

export function copyToClipboard(text, addToast) {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			addToast(__('Copied to clipboard'));
		})
		.catch((error) => {
			addToast(__('Error copying to clipboard'));
		});
}

export function getInitials(name) {
	const words = name.trim().split(' ');

	if (words.length === 0) {
		return '';
	}

	const initials = words
		.map((word) => word.charAt(0).toUpperCase())
		.join('')
		.substring(0, 2);

	return initials;
}

export function generateBackgroundColor(name) {
	// Generate a hash value from the user's name
	let hash = 0;
	for (let i = 0; i < name.length; i++) {
		hash = name.charCodeAt(i) + ((hash << 5) - hash);
	}

	// Use a fixed range of hues (0-360 degrees) based on the hash value for consistency
	const hue = Math.abs(hash) % 360;

	// Use random saturation and lightness values for variability
	const saturation = 30 + 0.5 * 40; // Adjust the range (40) for more variability
	const lightness = 40 + 0.5 * 40; // Adjust the range (40) for more variability
	const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

	return color;
}

export function getFileId(file) {
	if (file instanceof File) {
		// If it is uploaded file from system
		const { lastModified, name, size, type } = file;
		return lastModified + '_' + size + '_' + type + '_' + (name || '').replaceAll(' ', '_');
	} else if (typeof file === 'object') {
		// If it is from WP media selection
		return file.file_id;
	}
}

export function scrollLock(lock) {
	document.getElementsByTagName('html')[0].style.overflow = lock ? 'hidden' : '';
	document.getElementsByTagName('body')[0].style.overflow = lock ? 'hidden' : '';
}

export function getAddress({ street_address, city, province, zip_code, country_code }) {
	return [street_address, city, province + ' ' + zip_code, countries_object[country_code]]
		.map((a) => (a || '').trim())
		.filter((a) => a)
		.join(', ');
}

export function filterUniqueColumn(array, column) {
	let _values = [];

	return array.filter((a) => {
		let _v = a[column];

		if (_values.indexOf(_v) > -1) {
			return false;
		}

		_values.push(_v);
		return true;
	});
}

export function filterObject(ob, cb) {
	const new_object = {};

	for (let k in ob) {
		if (cb(ob[k], k)) {
			new_object[k] = ob[k];
		}
	}

	return new_object;
}

function hasTextInHTML(htmlString) {
	// Create a DOMParser instance
	const parser = new DOMParser();

	// Parse the HTML string
	const doc = parser.parseFromString(htmlString, 'text/html');

	// Get the text content of the parsed document
	const textContent = doc.documentElement.textContent.trim();

	// Check if there is any non-whitespace text content
	return textContent.length > 0;
}

export function isEmpty(value, treatNumericAsEmpty = false) {
	// Check for undefined and null values
	if (value === undefined || value === null) {
		return true;
	}

	// Check for empty strings
	if (typeof value === 'string' && (value.trim() === '' || !hasTextInHTML(value))) {
		return true;
	}

	// Check for empty arrays
	if (Array.isArray(value) && value.length === 0) {
		return true;
	}

	// Check for empty objects
	if (typeof value === 'object' && !(value instanceof File) && Object.keys(value).length === 0) {
		return true;
	}

	// Check for numeric values (optional)
	if (treatNumericAsEmpty && typeof value === 'number') {
		return !value || isNaN(value);
	}

	return false; // If none of the above conditions are met, the value is not empty
}

export function parseParams(searchParam) {
	const queryParams = {};
	for (const [key, value] of searchParam) {
		queryParams[key] = value;
	}
	return queryParams;
}

export function storage(name, local = false) {
	const store = local ? 'localStorage' : 'sessionStorage';
	const _name = 'crewhrm_' + name;

	return {
		setItem: (value) => {
			window[store].setItem(_name, JSON.stringify(value));
		},
		getItem: (_default) => {
			let json;
			try {
				json = JSON.parse(window[store].getItem(_name));
			} catch (e) {}
			return json ?? _default;
		},
		removeItem: () => {
			window[store].removeItem(_name);
		}
	};
}

export function flattenArray(arr) {
    const result = [];

    function recursiveFlatten(innerArr) {
        for (let i = 0; i < innerArr.length; i++) {
            if (Array.isArray(innerArr[i])) {
                // If the element is an array, recursively flatten it
                recursiveFlatten(innerArr[i]);
            } else {
                // If it's not an array, push it to the result
                result.push(innerArr[i]);
            }
        }
    }

    recursiveFlatten( Array.isArray( arr ) ? arr : [] );
    return result;
}

export function validateValues(values={}, rules=[]) {
	
	// Loop through rules
	for ( let i=0; i<rules.length; i++ ) {
		
		// Rules
		const { 
			validate: validate_as, 
			required, 
			name 
		} = rules[i];

		const value = values[name];
		const empty_value = isEmpty( value );

		if ( required && empty_value ) {
			return false;
		}

		// No need to check format on optional empty values
		if ( empty_value ) {
			continue;
		}
		
		switch(validate_as) {
			case 'phone' :
			case 'url':
			case 'zip_code':
			case 'email' :
				if ( ! patterns[validate_as].test( value ) ) {
					return false;
				}
				break;

			default:
				if ( validate_as ) {
					console.error('Unresolved validator', validate_as);
					return false;
				}
		}
	}
	
	return true;
}

/**
 * Format date output string
 * 
 * @param {Date|string|number} date Date object, date string or unix timestamp seconds
 * @param {string} pattern Format pattern.
 * @returns {string}
 */
export function formatDate( date, pattern = window.CrewHRM.date_format ) {

	date = getLocalDate(date);

	if( ! date || isNaN( date ) || ! ( date instanceof Date ) ) {
		return null;
	}

	const months = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	const days = [
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	];

	let formattedDate = pattern;
	formattedDate = formattedDate.replace("F", months[date.getMonth()]);
	formattedDate = formattedDate.replace("M", months[date.getMonth()]?.substring(0, 3));
	formattedDate = formattedDate.replace("j", date.getDate());
	formattedDate = formattedDate.replace("d", String(date.getDate()).padStart(2, '0'));
	formattedDate = formattedDate.replace("l", days[date.getDay()]);
	formattedDate = formattedDate.replace("D", days[date.getDay()]?.substring(0, 3));
	formattedDate = formattedDate.replace("Y", date.getFullYear());
	formattedDate = formattedDate.replace("g", date.getHours() % 12 || 12);
	formattedDate = formattedDate.replace("H", String(date.getHours()).padStart(2, '0'));
	formattedDate = formattedDate.replace("i", String(date.getMinutes()).padStart(2, '0'));
	formattedDate = formattedDate.replace("A", date.getHours() >= 12 ? 'PM' : 'AM');
	formattedDate = formattedDate.replace("a", date.getHours() >= 12 ? 'pm' : 'am');

	return formattedDate;
}

/**
 * Returns unix timestamp seconds
 * 
 * @param {Date} date The date object to get unix timestamp seconds from. Default is current Date.
 * @returns {number}
 */
export function getUnixTimestamp(date = new Date()) {
	date = getLocalDate(date);
	return Math.floor(date.getTime() / 1000);
}

export function getLocalFromUnix(unixTimestampInSeconds) {

	// Create a Date object from the Unix timestamp in UTC
	const utcDate = new Date(unixTimestampInSeconds * 1000);

	// Get the local timezone offset in minutes
	const timezoneOffsetMinutes = utcDate.getTimezoneOffset();

	// Adjust the Date object for the local timezone offset
	return new Date(utcDate.getTime() - (timezoneOffsetMinutes * 60 * 1000));
}

export function areDatesEqual(date1, date2) {
	date1 = getLocalDate(date1);
	date2 = getLocalDate(date2);

	return (
		date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate()
	);
}

/**
 * Get date object from unix seconds, date string
 * @param {Date|string|number} date 
 * @returns {Date}
 */
export function getLocalDate(date) {

	if ( ! ( date instanceof Date ) ) {

		if ( typeof date === 'string' ) {
			date = new Date(date);

		} else if( ! isNaN( date ) ) {
			date = getLocalFromUnix( parseInt( date ) );

		} else {
			date = null;
		}
	}
	
	return date;
}

// Function to check if two Date objects have the same date and time (down to the millisecond)
export function areDateTimesEqual(date1, date2) {
	date1 = getLocalDate(date1);
	date2 = getLocalDate(date2);
  	return date1.getTime() === date2.getTime();
}

export const is_production = process.env.NODE_ENV === 'production';
