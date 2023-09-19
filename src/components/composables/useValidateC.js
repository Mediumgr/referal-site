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
    regExpChecks['candidateNameError'] = '';
  } else {
    regExpChecks['candidateNameError'] = 'Введите корректное имя';
  }
  if (regExp.value.email.test(candidateEmail.value)) {
    regExpChecks['candidateEmailError'] = '';
  } else {
    regExpChecks['candidateEmailError'] = 'Введите корректный email';
  }
  if (regExp.value.phone.test(candidatePhone.value)) {
    regExpChecks['candidatePhoneError'] = '';
  } else {
    regExpChecks['candidatePhoneError'] = 'Введите корректный телефон';
  }
  if (checked.value[1]) {
    regExpChecks['candidateAgreedError'] = '';
  } else {
    regExpChecks['candidateAgreedError'] =
      'Подтвердите согласие на обработку персональных данных';
  }
  if (file.value.file) {
    regExpChecks['candidateFileError'] = '';
  } else {
    regExpChecks['candidateFileError'] = 'Прикрепите файл';
  }
};
