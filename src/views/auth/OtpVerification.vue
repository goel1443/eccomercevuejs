<template>
  <div>
    <section class="auth_sec">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-6">
            <div class="authimage">
              <img src="/assets/images/otp.svg" class="img-fluid" />
            </div>
          </div>
          <div class="col-5">
            <div class="authformheading text-center">
              <h3>Otp Verification</h3>
            </div>
            <div class="form-box">
              <form class="row form-row">
                <div class="col-12 col-sm-12 mb-3">
                    <div class="label-box mb-2">
                      <label> Enter OTP </label>
                    </div>
                    <v-otp-input
                        ref="otpInput"
                        input-classes="otp-input"
                        class="justify-content-between mb-3"
                        separator=""
                        :num-inputs="6"
                        :should-auto-focus="true"
                        input-type="letter-numeric"
                        :conditionalClass="['one', 'two', 'three', 'four','five','six']"
                        @on-complete="(ootp) => otp = ootp"
                        onkeypress="return (event.charCode !=8 && event.charCode !=46 &&((event.charCode >= 48 && event.charCode <= 57) ))"
                      />

                      <Commonbtn btntext="Get Code" v-if="code == 'get_code' && !span_loader" @click="get_otp()"/>
                     
                      <Commonbtn btntext="Resend Code" v-if="code == 'resend_code' && !span_loader" @click="get_otp()"/>
                      <span
                        v-if="settimer"
                        style="margin-top:3px;border: 0 !important"
                        class="input-group-text bg-transparent"
                        id="basic-addon1"
                      >
                        {{ timer }}
                      </span>
                  </div>

                <div class="col-12 col-sm-12">
                    <router-link :to="{name:'resetpassword'}" class="w-100">
                   <Commonbtn btntext="Otp Verification"
                    commonclass="btn-auth"
                    :imagebtn="Icons.cart"
                  />
                </router-link>
                </div>
              </form>
              <div class="text-center my-4"></div>

           
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Icons from "../../assets/Json/Icons";
import Commonbtn from "../../components/Commonbtn.vue";

export default {
  name: "OtpVerification",
  components: {
    Commonbtn,
  },
  data() {
    return {
      Icons,
      loader: false,
      otp: "",
      code: "get_code",
      ivl: "",
      span_loader: false,
      vm: {},
      login_type: "",
      timer:"",
      settimer:false,
    };
  },
};
</script>

<style scoped>
.auth_sec {
  background-color: var(--cool-white);
}

.forgot {
  text-align: end;
}
.forgot a {
  color: var(--cool-gray);
  font-size: 14px;
  font-weight: 500;
}
.forgot a:hover {
  color: var(--cool-gold);
}
</style>
