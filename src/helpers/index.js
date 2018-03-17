
const mobileNumberValidation = (item) => /^\d{10}$/.test(item);

const timeValidation = (item) => /^\d+$/.test(item);

const nameValidation = (item) => /^[a-zA-Z]*$/.test(item);

export {mobileNumberValidation, timeValidation, nameValidation};
