/*
    functions for sign up form
 */

// required to write something in an input
export const require = (input_name) => (value) => !value ? `${input_name} is required`: undefined;


// checks the maximal and minimal characters of an input
export const valLength = (input_name, min, max) => (value) => {

        if ( value && value.trim().length < min ) {
            return `${input_name} should be a least ${min} characters `;
        }

        if (value && value.trim().length > max) {
            return `${input_name} should be max ${max} characters`;
        }

        return undefined;
}

// check if it is really an email
 export const isEmail = (input_name) => value => {

    if(value && !value.match(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,8}$/i)) {
        return `Please enter a valid ${input_name} `;
    }

     return undefined;

}






