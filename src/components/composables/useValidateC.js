import { unref } from 'vue';

export const useValidateC = (optionsValidations) => {
  let {
    regExpChecks,
    regExp,
    candidateName,
    candidateEmail,
    candidatePhone,
    checked,
    file,
  } = optionsValidations;

  regExpChecks = unref(regExpChecks);

  if (regExp.value.name.test(candidateName.value)) {
    regExpChecks['candidateName'] = '';
  } else {
    regExpChecks['candidateName'] = 'Введите корректное имя';
  }
  if (regExp.value.email.test(candidateEmail.value)) {
    regExpChecks['candidateEmail'] = '';
  } else {
    regExpChecks['candidateEmail'] = 'Введите корректный email';
  }
  if (regExp.value.phone.test(candidatePhone.value)) {
    regExpChecks['candidatePhone'] = '';
  } else {
    regExpChecks['candidatePhone'] = 'Введите корректный телефон';
  }
  if (checked.value[3]) {
    regExpChecks['candidateParticipation'] = '';
  } else {
    regExpChecks['candidateParticipation'] =
      'Подтвердите согласие на участие в программе';
  }
  if (checked.value[4]) {
    regExpChecks['candidateProcessing'] = '';
  } else {
    regExpChecks['candidateProcessing'] =
      'Подтвердите согласие на обработку персональных данных';
  }
  if (file.value.file) {
    regExpChecks['candidateFile'] = '';
  } else {
    regExpChecks['candidateFile'] = 'Прикрепите файл';
  }
};
