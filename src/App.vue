<template>
  <div>
    <Header />
   <router-view />
   <Footer />
  </div>
 
</template>



<script >
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
export default{
  name:'App',
  components:{
    Header,
    Footer
  }
}
</script>



<style>
#app {
  background:var(--cool-white);
  min-height:100vh;
}

 *{
  margin:0;
  padding:0;
  box-sizing: border-box;
 }

 body {
  width:100%;
 height:100%;
 background:transparent;
 font-family: "Outfit", sans-serif;
  
 }
 section {
  padding:var(--fs-50) var(--fs-25);
 }

 @media screen and (min-width:320px) and (max-width:576px) {
    section {
      padding:var(--fs-35) var(--fs-1)
    }
 }
 :root {
  /*color variable */
  --cool-white:#f4fdff;
  --cool-gold:#e6af2e;
  --cool-gray:#797B84;
  --white:#ffffff;
  --black:#000000;

  /*gradient variable */
  --radialgradient:radial-gradient(at right bottom, rgba(230, 176, 46, 1.0), rgba(244, 253, 255, 1.0));
  --lineargradient:linear-gradient(315deg, rgba(230, 176, 46, 1.0), rgba(244, 253, 255, 1.0));
  
  /*box shadow variable */

 --shadow1:rgba(0, 0, 0, 0.35) 0px 5px 15px;
 --shadow2:rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
 --shadow3:rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
 --shadow4:rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;


/*font size variable*/
--fs-1:0.063rem;
--fs-2:0.125rem;
--fs-3:0.188rem;
--fs-4:0.25rem;
--fs-5:0.313rem;
--fs-6:0.375rem;
--fs-7:0.438rem;
--fs-8:0.5rem;
--fs-9:0.563rem;
--fs-10:0.625rem;
--fs-11:0.688rem;
--fs-12:0.75rem;
--fs-13:0.813rem;
--fs-14:0.875rem;
--fs-15:0.938rem;
--fs-16:1rem;
--fs-17:1.063rem;
--fs-18:1.125rem;
--fs-19:1.188rem;
--fs-20:1.25rem;
--fs-21:1.313rem;
--fs-22:1.375rem;
--fs-23:1.438rem;
--fs-24:1.5rem;
--fs-25:1.563rem;
--fs-26:1.625rem;
--fs-27:1.688rem;
--fs-28:1.75rem;
--fs-29:1.813rem;
--fs-30:1.875rem;
--fs-31:1.938rem;
--fs-32:2rem;
--fs-33:2.063rem;
--fs-34:2.125rem;
--fs-35:2.188rem;
--fs-36:2.25rem;
--fs-37:2.313rem;
--fs-38:2.375rem;
--fs-39:2.438rem;
--fs-40:2.5rem;
--fs-41:2.563rem;
--fs-42:2.625rem;
--fs-43:2.688rem;
--fs-44:2.75rem;
--fs-45:2.813rem;
--fs-46:2.875rem;
--fs-47:2.938rem;
--fs-48:3rem;
--fs-49:3.063rem;
--fs-50:3.125rem;
 }



 a {
  text-decoration: none !important;
  display:inline-block !important;
 }

 ul {
  list-style: none;
 }

 ::placeholder {
  color:var(--cool-gray) ;
  font-size:var(--fs-14) ;
 }
 @font-face {
  font-family: Outfit;
  src: url(./assets/fonts/Outfit-Thin.ttf);
  font-weight: 100;
  font-display: swap;
}


@font-face {
  font-family: Outfit;
  src: url(./assets/fonts/Outfit-ExtraLight.ttf);
  font-weight: 200;
  font-display: swap;
}

@font-face {
  font-family: Outfit;
  src: url(./assets/fonts/Outfit-Light.ttf);
  font-weight: 300;
  font-display: swap;
}
 @font-face {
  font-family: Outfit;
  src: url(./assets/fonts/Outfit-Regular.ttf);
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: Outfit;
  src: url(./assets/fonts/Outfit-Medium.ttf);
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: Outfit;
  src: url(./assets/fonts/Outfit-SemiBold.ttf);
  font-weight: 600;
  font-display: swap;
}


@font-face {
  font-family: Outfit;
  src: url(./assets/fonts/Outfit-Bold.ttf);
  font-weight: 700;
  font-display: swap;
}

@font-face {
  font-family: Outfit;
  src: url(./assets/fonts/Outfit-ExtraBold.ttf);
  font-weight: 800;
  font-display: swap;
}


@font-face {
  font-family: Outfit;
  src: url(./assets/fonts/Outfit-Black.ttf);
  font-weight: 900;
  font-display: swap;
}


.btn-register {
  background:var(--cool-gold) !important;
  color:var(--cool-white) !important;
}
.btn-register:hover {
  background:var(--cool-gray) !important;
  color:var(--cool-white) !important;
}

.btn-cart {
  display: flex  !important;
  align-items: center  !important;
  gap:5px  !important;
}
.btn-claim {
  padding:var(--fs-4) var(--fs-5) !important;
}
.btn-price {
    width: 100% !important;
    margin-top:var(--fs-15);
}

.userdetailslider .swiper-wrapper {
  height:270px !important;
}
.userdetailslider .swiper-slide {
  height:100% !important;
  width:100% !important;
}
.swiper-button-prev,.swiper-button-next {
  width:20px !important;
  height:20px !important;
  border-radius:50% !important;
  background: var(--cool-gold);
  top:95% !important;
}


.swiper-button-prev:after,.swiper-button-next:after {
  font-size:var(--fs-8) !important;
  color:var(--cool-white);
  font-weight:800;
}


/*scroolbar css*/
::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: var(--white);
}

::-webkit-scrollbar
{
	width: 5px;
  height:5px;
  background-color: var(--white);
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: var(--shadow1);
	background-color: var(--cool-gray);
}



/* auth css start */



.form-box .label-box label {
  font-size: 14px;
  font-weight: 600;
  color: var(--cool-gray);
  margin-bottom:10px;
}
:is(.form-box .form-control, .form-select) {
  font-size: 14px ;
  font-weight: 600;
  color: var(--cool-gray);
}
.form-box .form-control::placeholder {
  color: var(--cool-gray);
  font-size: 14px;
  font-weight: 400;
}

.form-box .form-control:focus {
  background-color: var(--cool-white);
  border-color: var(--cool-gold);
  box-shadow: none;
}

.form-box .submit-button .btn-primary {
  width: 100%;
}

.btn-auth {
  background-color: var(--cool-gold) !important;
  padding: 5px 15px;
  text-align: center;
  transition: 0.5s;
  color: var(--cool-white) !important;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700 !important;
  transition: all 0.5s ease-in-out;
  width:100%;
  font-size:var(--fs-20) !important;
  height:50px;
}

.btn-auth:hover {
  background-color: var(--cool-gray) !important;
  color: var(--cool-white) !important;
  padding: 5px 15px;
  height:50px;
}

.form-box .btn-auth span svg{
  width:var(--fs-25) !important;
  margin-right:10px;
}
.form-box .spinner-border {
  --bs-spinner-width: 1rem !important;
  --bs-spinner-height: 1rem !important;
}

.form-box .auth-text p {
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  color: var(--cool-gray);
  letter-spacing: 0.8px;
}

.form-box .auth-text p a{
  font-size: 15px;
  font-weight: 800;
  text-align: center;
  color: var(--cool-gold);
  letter-spacing: 0.8px;
}
.form-box .error_msg {
  color: red;
  font-size: 10px;
  font-weight: 500;
}

.form-box .input-group {
  background:var(--cool-white);
  box-shadow:var(--shadow2);
  height:50px;
}

.authformheading h3 {
  margin-bottom:30px;
}


/**================ OTP INPUT FIELD CSS START ================ **/

.otp-input div {
  justify-content: space-between;
  width: 100%;
}

input.otp-input {
  min-height: 20px;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid var(--cool-gold);
  font-weight: 500;
  background-color: var(--cool-white);
  width:70%;
  box-shadow:var(--shadow2);
  padding: 10px;
  margin-left: 0px;
  text-align: center;
}

input.otp-input:focus-visible {
  outline: none;
}


._marqueeSliderContainer_1htck_11 {
  padding:20px;
}
</style>

