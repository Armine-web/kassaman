export const formatPhone = (phone: string): string => {
  return phone.replace(/(\d{3})(\d{2})(\d{6})/, "$1 $2 $3")
}
