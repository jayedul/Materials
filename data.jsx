import { __ } from "./helpers.jsx";

export const patterns = {
	date: /^(\d{4})-(\d{2})-(\d{2})$/,
	email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
	phone: /^[0-9]{10,15}$/,
	zip_code: /^[A-Za-z0-9\s-]{4,10}$/,
	url: /^(http|https):\/\/[A-Za-z0-9.-]+(\.[A-Za-z]{2,})?(:\d+)?(\/\S*)?$/,
	first_name: /^(?=.*\S).{1,20}$/,
	last_name: /^(?=.*\S).{1,20}$/,
}

export const genders = {
    male: __('Male'),
    female: __('Female'),
    other: __('Other'),
    decline: __('Decline to self Identity')
};

export const statuses = {
    publish: {
        color: '#73BF45',
        label: __('Published')
    },
    draft: {
        color: '#EE940D',
        label: __('Draft')
    },
    archive: {
        color: '#BBBFC3',
        label: __('Archived')
    },
    expired: {
        color: '#FF180A',
        label: __('Expired')
    }
};

export const attachment_formats = {
    pdf: {
		label: __('PDF'),
	},
	doc: {
		label: __('DOC')
	},
	docx: {
		label: __('DOCX')
	},
	jpg: {
		label: __('JPG')
	},
	jpeg: {
		label: __('JPEG')
	},
	png: {
		label: __('PNG')
	},
    mp3: {
		label: __('MP3')
	},
    wav: {
		label: __('WAV')
	},
    mp4: {
		label: __('MP4')
	},
    mov: {
		label: __('MOV')
	},
    zip: {
		label: __('ZIP')
	},
    rar: {
		label: __('RAR')
	}
};

// Do not edit or delete keys. Only can add more.
export const business_types = {
    agriculture_naturalresources: __('Agriculture & Natural Resources'),
    extraction_mining: __('Extraction & Mining'),
    energy_utilities: __('Energy & Utilities'),
    construction_infrastructure: __('Construction & Infrastructure'),
    manufacturing_production: __('Manufacturing & Production'),
    wholesale_distribution: __('Wholesale & Distribution'),
    retail_consumergoods: __('Retail & Consumer Goods'),
    transportation_logistics: __('Transportation & Logistics'),
    technology_communication: __('Technology & Communication'),
    finance_insurance: __('Finance & Insurance'),
    realestate_property: __('Real Estate & Property'),
    professionalservices: __('Professional Services'),
    healthcare_wellness: __('Healthcare & Wellness'),
    entertainment_media: __('Entertainment & Media'),
    hospitality_tourism: __('Hospitality & Tourism'),
    education_training: __('Education & Training'),
    nonprofit_socialservices: __('Non-Profit & Social Services'),
    government_publicservices: __('Government & Public Services')
};

export const time_formats = {
    _12: __('12 Hours'),
    _24: __('24 Hours')
};

export const attendance_types = {
	on_site: __('On-Site'),
    remote: __('Fully Remote'),
    hybrid: __('Hybrid')
};

export const employment_types = {
    full_time: __('Full Time'),
    part_time: __('Part Time'),
    contract: __('Contract'),
    temporary: __('Temporary'),
    trainee: __('Trainee')
};

export const experience_levels = {
    beginner: __('Beginner'),
    intermidiate: __('Intermidiate'),
    adanced: __('Advanced')
};

export const salary_types = {
    hourly: __('Hourly'),
    daily: __('Daily'),
    weekly: __('Weekly'),
    monthly: __('Monthly'),
    yearly: __('Yearly')
};

export const numbers = {
	0: __('0'),
	1: __('1'),
	2: __('2'),
	3: __('3'),
	4: __('4'),
	5: __('5'),
	6: __('6'),
	7: __('7'),
	8: __('8'),
	9: __('9'),
}

// Prepare country data
const _countries_array = [];
const _countries_object = {};
const A = 65;
const Z = 90;
const countryName = new Intl.DisplayNames(['en'], { type: 'region' });
for (let i = A; i <= Z; ++i) {
	for (let j = A; j <= Z; ++j) {
		let code = String.fromCharCode(i) + String.fromCharCode(j);
		let name = countryName.of(code);
		if (code !== name) {

			_countries_array.push({
				id: code,
				label: name
			});

			_countries_object[code] = name;
		}
	}
}
export const countries_array = _countries_array;
export const countries_object = _countries_object;
