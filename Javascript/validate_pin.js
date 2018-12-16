

function validatePIN (pin) {
  var reg = /^\d+$/
  let splitPin = pin.split('')
  if ((splitPin.length === 4 || splitPin.length === 6) && reg.test(pin)) {
    return true;
  }
  return false;
}
