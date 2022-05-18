<template>
  <app-header />
</template>

<script>
import appHeader from "@/components/app-header.vue";

export default {
  components: {
    appHeader,
  },
  name: "App",
};
</script>

<style>
@import "@/assets/css/style.min.css";
.loader {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #131313;
  z-index: 9999;
}
.loader .loader__spinners {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.loader .loader__spinner-block {
  width: 125px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.loader .loader__spinner {
  position: relative;
  width: 125px;
  height: 125px;
}
.loader .loader__spinner:after,
.loader .loader__spinner:before {
  content: "";
  display: block;
  position: absolute;
  border-width: 4px;
  border-style: solid;
  border-radius: 50%;
}
.loader .loader__spinner:before {
  width: 117px;
  height: 117px;
  border-color: #fff;
  top: 0;
  left: 0;
  -webkit-animation: scale-2 1s linear 0s infinite;
  animation: scale-2 1s linear 0s infinite;
}
.loader .loader__spinner:after {
  width: 117px;
  height: 117px;
  border-color: #fff;
  top: 0;
  left: 0;
  opacity: 0;
  -webkit-animation: scale-2 1s linear 0.5s infinite;
  animation: scale-2 1s linear 0.5s infinite;
}
@-webkit-keyframes scale-2 {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
  50% {
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
@keyframes scale-2 {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
  }
  50% {
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>
