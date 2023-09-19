import { useValidateR } from './useValidateR';

export const useStepTwo = (options) => {
  let { regExpChecks, step, recommender, candidate } = options;

  useValidateR(options);

  let statusName = regExpChecks.value['recommenderNameError'];
  let statusEmail = regExpChecks.value['recommenderEmailError'];
  let statusPhone = regExpChecks.value['recommenderPhoneError'];
  let statusAgreed = regExpChecks.value['recommenderAgreedError'];
  if (
    statusName === '' &&
    statusEmail === '' &&
    statusPhone === '' &&
    statusAgreed === ''
  ) {
    step.value = 'Шаг 2';
    recommender.value = false;
    /* 500ms как для класса .form-fade-leave-active */
    setTimeout(() => {
      candidate.value = true;
    }, 500);
  }
};
