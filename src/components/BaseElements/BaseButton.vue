<template>
  <button type="submit">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.custom-btn {
  --border-width: 4px;
  --border-radius: 57px;
  position: relative;
  min-width: 160px;
  font-family: 'Gilroy';
  justify-self: center;
  align-self: flex-start;
  color: #fff;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  border-radius: var(--border-radius);
  outline: none;
  border: none;
  cursor: pointer;
  background: radial-gradient(100% 100% at 0% 0%,
      #fc0 0%,
      #ff5940 50%,
      #7f40ff 100%),
    #fff;
  z-index: 1;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: var(--border-width);
    left: var(--border-width);
    width: calc(100% - calc(var(--border-width) * 2));
    height: calc(100% - calc(var(--border-width) * 2));
    background: #0d0d0d;
    border-radius: calc(var(--border-radius) - var(--border-width));
    z-index: -1;
    transition: opacity 800ms ease-out;
  }

  &:hover {
    &::before {
      opacity: 0;
    }
  }
}
</style>
