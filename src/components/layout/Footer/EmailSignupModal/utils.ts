import { EMAIL_VALIDATION_REGEX } from "./const"

export const validateEmail = (email: string): boolean => {
  return EMAIL_VALIDATION_REGEX.test(email)
}

export const submitEmail = async (email: string): Promise<boolean> => {
  try {
    console.log("Submitting email:", email)
    return true
  } catch (error) {
    console.error("Error submitting email:", error)
    return false
  }
}

