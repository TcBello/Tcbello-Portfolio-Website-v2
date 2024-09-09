/**
 * Validate email input
 */
export function validateEmail(value: string): string | null {
  const regexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (value.trim().length < 1) {
    return "Missing field";
  }

  if (!regexp.test(value)) {
    return "Invalid email";
  }

  return null;
}

/**
 * Validate input
 */
export function validateInput(value: string): string | null {
  if (value.trim().length < 1) {
    return "Missing field";
  }

  return null;
}
