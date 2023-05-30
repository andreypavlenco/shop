interface validateType {
  email: string;
  phone: string;
}

export const validateFormHistory = (data: validateType): boolean => {
  const { email, phone } = data;

  if (!email) {
    alert('Error write Email ');
    return false;
  }
  if (!phone) {
    alert('Error write Phone');
    return false;
  }

  return true;
};
