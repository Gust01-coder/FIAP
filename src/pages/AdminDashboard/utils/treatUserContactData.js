import { SUBJECTS_LIST } from "../../../constants/subjectsList";

export const treatContactData = (data) => {
  const defaultString = "---";
  const treatedData = data.map(
    ({ name, email, contact, localization, subject, message }) => ({
      name,
      email,
      message,
      contact: contact || defaultString,
      localization: localization || defaultString,
      subject: SUBJECTS_LIST[subject],
    })
  );
  return treatedData;
};
