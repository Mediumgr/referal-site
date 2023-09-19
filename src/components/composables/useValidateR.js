import { unref } from 'vue';

export const useValidateR = (optionsValidations) => {
  let {
    regExpChecks,
    regExp,
    recommenderName,
    recommenderEmail,
    recommenderPhone,
    checked,
  } = optionsValidations;

  regExpChecks = unref(regExpChecks);

  if (regExp.value.name.test(recommenderName.value)) {
    regExpChecks['recommenderNameError'] = '';
  } else {
    regExpChecks['recommenderNameError'] = 'Введите корректное имя';
  }
  if (regExp.value.email.test(recommenderEmail.value)) {
    regExpChecks['recommenderEmailError'] = '';
  } else {
    regExpChecks['recommenderEmailError'] = 'Введите корректный email';
  }
  if (regExp.value.phone.test(recommenderPhone.value)) {
    regExpChecks['recommenderPhoneError'] = '';
  } else {
    regExpChecks['recommenderPhoneError'] = 'Введите корректный телефон';
  }
  if (checked.value[0]) {
    regExpChecks['recommenderAgreedError'] = '';
  } else {
    regExpChecks['recommenderAgreedError'] =
      'Подтвердите согласие на обработку персональных данных';
  }
};

