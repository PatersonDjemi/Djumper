import {isEmail} from 'validator';

/*
  functions for signup und login form
*/

// required to write something in an input
export const myRequire = (input_name) => (value) => !value ? `${input_name} is required`: undefined;


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
 export const validEmail = (input_name) => value => {

    if(value && !isEmail(value)) {
        
        return `Please enter a valid ${input_name} `;
    }

     return undefined;

}






