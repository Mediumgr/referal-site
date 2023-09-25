import { useValidateR } from './useValidateR';
import { useValidateC } from './useValidateC';

export const useSubmit = async (options) => {
  let {
    clientWidth,
    regExpChecks,
    open,
    loader,
    regExp,
    recommenderName,
    recommenderEmail,
    recommenderPhone,
    checked,
    candidateName,
    candidateEmail,
    candidatePhone,
    file,
  } = options;

  let optionsCandidate = {
    regExpChecks,
    regExp,
    candidateName,
    candidateEmail,
    candidatePhone,
    checked,
    file,
  };

  if (clientWidth.value < 1024) {
    useValidateC(optionsCandidate);
  } else if (clientWidth.value > 1023) {
    let optionsRecommender = {
      regExpChecks,
      regExp,
      recommenderName,
      recommenderEmail,
      recommenderPhone,
      checked,
    };
    useValidateR(optionsRecommender);
    useValidateC(optionsCandidate);
  }

  let isError = false;
  checked.value.some((check) => {
    debugger;
    if (check === false) {
      isError = true;
      return true;
    }
  });

  if (isError === false) {
    loader.value = true;
    let agreementSign = checked.value[2] === true ? 1 : 0;

    let formData = new FormData();

    formData.append('recommender[NAME]', recommenderName.value);
    formData.append('recommender[EMAIL]', recommenderEmail.value);
    formData.append('recommender[PHONE]', recommenderPhone.value);
    formData.append('candidate[NAME]', candidateName.value);
    formData.append('candidate[EMAIL]', candidateEmail.value);
    formData.append('candidate[PHONE]', candidatePhone.value);
    formData.append('userfile', file.value.file);
    formData.append('recommender[check_order]', agreementSign);

    let res = await fetch('/upload/', {
      method: 'POST',
      body: formData,
    });

    let response = await res.json();

    if (response.error === true) {
      message.value = response.message;
    }
    open.value = true;
    loader.value = false;
  }
};
