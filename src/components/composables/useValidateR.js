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
    regExpChecks['recommenderName'] = '';
  } else {
    regExpChecks['recommenderName'] = 'Введите корректное имя';
  }
  if (regExp.value.email.test(recommenderEmail.value)) {
    regExpChecks['recommenderEmail'] = '';
  } else {
    regExpChecks['recommenderEmail'] = 'Введите корректный email';
  }
  if (regExp.value.phone.test(recommenderPhone.value)) {
    regExpChecks['recommenderPhone'] = '';
  } else {
    regExpChecks['recommenderPhone'] = 'Введите корректный телефон';
  }
  if (checked.value[0]) {
    regExpChecks['recommenderParticipation'] = '';
  } else {
    regExpChecks['recommenderParticipation'] =
      'Подтвердите согласие на участие в программе';
  }
  if (checked.value[1]) {
    regExpChecks['recommenderProcessing'] = '';
  } else {
    regExpChecks['recommenderProcessing'] =
      'Подтвердите согласие на обработку персональных данных';
  }
  if (checked.value[2]) {
    regExpChecks['recommenderSigning'] = '';
  } else {
    regExpChecks['recommenderSigning'] =
      'Подтвердите согласие на подписание договора';
  }
};
