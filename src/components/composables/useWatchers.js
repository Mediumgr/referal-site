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
        regExpChecks.value['recommenderName'] = '';
      }
      if (regExp.value.email.test(email)) {
        regExpChecks.value['recommenderEmail'] = '';
      }
    }
  );
  watch(
    () => [recommenderPhone.value, checked.value],
    ([phone, checked]) => {
      if (regExp.value.phone.test(phone)) {
        regExpChecks.value['recommenderPhone'] = '';
      }
      if (checked[0]) {
        regExpChecks.value['recommenderParticipation'] = '';
      }
      if (checked[1]) {
        regExpChecks.value['recommenderProcessing'] = '';
      }
      if (checked[2]) {
        regExpChecks.value['recommenderSigning'] = '';
      }
    },
    { deep: true }
  );

  watch(
    () => [file.value.file, checked.value],
    ([file, checked]) => {
      if (file) {
        regExpChecks.value['candidateFile'] = '';
      }
      if (checked[3]) {
        regExpChecks.value['candidateParticipation'] = '';
      }
      if (checked[4]) {
        regExpChecks.value['candidateProcessing'] = '';
      }
    },
    { deep: true }
  );

  watch(
    () => [candidatePhone.value, candidateEmail.value],
    ([phone, email]) => {
      if (regExp.value.phone.test(phone)) {
        regExpChecks.value['candidatePhone'] = '';
      }
      if (regExp.value.email.test(email)) {
        regExpChecks.value['candidateEmail'] = '';
      }
    }
  );

  watch(
    () => candidateName.value,
    (name) => {
      if (regExp.value.name.test(name)) {
        regExpChecks.value['candidateName'] = '';
      }
    }
  );
};
