// email and password validation logic

export function validateEmail(email) {
  if (email.includes("a")) {
    return true;
  }
  return false;
}

export function validatePassword(password) {
  if (password.length > 8) return true;
  return false;
}
