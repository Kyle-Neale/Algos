/******************************

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:
validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false

******************************/

function validatePIN (pin) {
  let reg = /^\d+$/;
  let splitPin = pin.split('');
  if ((splitPin.length === 4 || splitPin.length === 6) && reg.test(pin)) {
    return true;
  }
  return false;
}
