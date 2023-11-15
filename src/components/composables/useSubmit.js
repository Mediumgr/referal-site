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
  for (let error in regExpChecks.value) {
    if (regExpChecks.value[error] !== '') {
      isError = true;
      break;
    }
  }

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
    // маркер достижения Цели Я.Метрика
    // see: https://yandex.ru/support/metrica/general/goal-js-event.html

    if (response.error === true) {
      message.value = response.message;
    } else {
      console.log('yaReachGoal invoke');
      yaReachGoal('target');
    }

    open.value = true;
    loader.value = false;
  }
};

const yaReachGoal = (idTarget) => {
  if (typeof ym == 'function') {
    try {
      ym(95461603, 'reachGoal', idTarget);
      console.log('ReachGoal push');
    } catch (e) {
      console.log('ReachGoal error', e);
    }
  }
};
