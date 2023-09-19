import { watch } from 'vue';

export const useWatchers = (options) => {
  let {
    recommenderName,
    recommenderEmail,
    recommenderPhone,
    checked,
    candidateName,
    candidateEmail,
    candidatePhone,
    file,
    regExpChecks,
    regExp,
  } = options;

  watch(
    () => [recommenderName.value, recommenderEmail.value],
    ([name, email]) => {
      if (regExp.value.name.test(name)) {
        regExpChecks.value['recommenderNameError'] = '';
      }
      if (regExp.value.email.test(email)) {
        regExpChecks.value['recommenderEmailError'] = '';
      }
    }
  );
  watch(
    () => [recommenderPhone.value, checked.value[0]],
    ([phone, agreed]) => {
      if (regExp.value.phone.test(phone)) {
        regExpChecks.value['recommenderPhoneError'] = '';
      }
      if (agreed) {
        regExpChecks.value['recommenderAgreedError'] = '';
      }
    }
  );

  watch(
    () => [file.value.file, checked.value[1]],
    ([file, agreed]) => {
      if (file) {
        regExpChecks.value['candidateFileError'] = '';
      }
      if (agreed) {
        regExpChecks.value['candidateAgreedError'] = '';
      }
    }
  );

  watch(
    () => [candidatePhone.value, candidateEmail.value],
    ([phone, email]) => {
      if (regExp.value.phone.test(phone)) {
        regExpChecks.value['candidatePhoneError'] = '';
      }
      if (regExp.value.email.test(email)) {
        regExpChecks.value['candidateEmailError'] = '';
      }
    }
  );

  watch(
    () => candidateName.value,
    (name) => {
      if (regExp.value.name.test(name)) {
        regExpChecks.value['candidateNameError'] = '';
      }
    }
  );
};
