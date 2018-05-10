const HOUR_INPUT = document.getElementById('hour-input'),
  DECIMAL_INPUT = document.getElementById('decimal-input'),
  CONVERT_BUTTON = document.getElementById('convert-button'),
  CLEAN_BUTTON = document.getElementById('clean-button'),
  HOUR_SEPARATOR = ':',
  DECIMAL_SEPARATOR = '\\.';

CONVERT_BUTTON.addEventListener('click', event => {
  let hourValue = HOUR_INPUT.value,
    decimalValue = DECIMAL_INPUT.value;

  if (validInput(hourValue, HOUR_SEPARATOR)) {
    resetForm();

    let hours = hourValue.split(HOUR_SEPARATOR);
    DECIMAL_INPUT.value = convertHourToDecimal(hours);
  } else if (hourValue != null && hourValue != '') {
    HOUR_INPUT.setAttribute('class', 'input is-danger');
  }

  event.preventDefault();
});

CLEAN_BUTTON.addEventListener('click', resetForm);

/**
 * Convert hour to decimal.
 * @param hours Array Array with two positions, in the first position the hours and the second one the minutes.
 * @return string Text with the hours in position of the decimal
 */
function convertHourToDecimal(hours) {
  let hour = new Number(hours[0]),
    minute = new Number(hours[1]);

  minute = Math.trunc(minute * 100 / 60);
  hour += Math.trunc(minute / 100);
  minute = minute % 100;

  // TODO Always show minute with two positions

  return hour + '.' + minute;
}

/**
 * Reset the classes from input on form.
 */
function resetForm() {
  HOUR_INPUT.setAttribute('class', 'input');
  DECIMAL_INPUT.setAttribute('class', 'input');
}

/**
 * Check if the input is a valida type of data.
 *
 * @param separator string the caracter between the hour and minute.
 * @return The equality of the input with the data.
 */
function validInput(input, separator) {
  const regex = new RegExp('^\\d{0,}' + separator + '\\d{2}$');
  return regex.test(input);
}