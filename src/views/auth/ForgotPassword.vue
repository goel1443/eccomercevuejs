<template>
  <div>
    <section class="auth_sec">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-6">
            <div class="authimage">
              <img src="/assets/images/forgot-password.svg" class="img-fluid" />
            </div>
          </div>
          <div class="col-5">
            <div class="authformheading text-center">
              <h3>Forgot Password</h3>
            </div>
            <div class="form-box">
              <form class="row form-row">
                <div class="col-12 col-sm-12 mb-3">
                  <div class="label-box">
                    <label>  Email</label>
                  </div>
                  <div class="input-group">
                    <input
                      type="email"
                      class="form-control shadow-none rounded border-0 bg-transparent"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>

              

                <div class="col-12 col-sm-12">
                  <router-link :to="{name:'otpverification'}" class="w-100"><Commonbtn
                    btntext="Forgot Password"
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
  name: "Login",
  components: {
    Commonbtn,
  },
  data() {
    return {
      Icons,
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
