<template>
  <div>

    <section class="auth_sec">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-6">
                    <div class="authimage">
                        <img src="/assets/images/login.svg" class="img-fluid"/>
                    </div>
                </div>
                <div class="col-5">
                       <div class="authformheading text-center">
                        <h3>Login</h3>
                       </div>
                       <div class="form-box">
                          <form class="row form-row">
                            <div class="col-12 col-sm-12 mb-3">
                              <div class="label-box">
                                <label>Email or Username</label>
                              </div>
                              <div class="input-group">
                                <input
                                  type="email"
                                  class="form-control shadow-none rounded border-0 bg-transparent" 
                                  placeholder="Enter Email or Username"
                                  
                                />
                              </div>
                             
                            </div>

                            <div class="col-12 col-sm-12 mb-3">
                              <div class="label-box">
                                <label> Password</label>
                              </div>
                              <div class="input-group mb-3 position-relative">
                                <input
                                  :type="hidden ? 'password' : 'text'"
                                  class="form-control shadow-none rounded border-0 bg-transparent"
                                  placeholder="Password"
                                 
                                  
                                />

                                <span class="input-group-text border-0 bg-transparent" id="basic-addon1">
                                  <img
                                    :src="hidden ? hide : show"
                                    alt=""
                                    class="img-fluid"
                                    width="36px"
                                    style="cursor: pointer"
                                    @click="hidden = !hidden"
                                  />
                                </span>
                              </div>
                            
                              <div class="forgot">
                                <router-link :to="{name:'forgotpassword'}" class="text-decoration-none"
                                  >Forgot Password</router-link
                                >
                              </div>
                            </div>

                            <div class="col-12 col-sm-12">
                                <Commonbtn btntext="Login" commonclass="btn-auth" :imagebtn="Icons.cart"/>
                              </div>
                            
                          </form>
                          <div class="text-center my-4"></div>

                          <div class="auth-text">
                            <p class="mb-0">
                              Don't have an account?
                              <router-link class="text-decoration-none" :to="{name:'register'}">
                                Register
                              </router-link>
                            </p>
                          </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import Icons from "../../assets/Json/Icons";
import hide from "/assets/icon/closeeye.png";
import show from "/assets/icon/openeye.png";
import Commonbtn from "../../components/Commonbtn.vue";

export default {
name:'Login',
components:{
 Commonbtn
},
data() {
    return {
      hidden: true,
      hide: hide,
      show: show,
      Icons
    };
  
},
}
</script>

<style scoped>
.auth_sec {
    background-color:var(--cool-white);
}

.forgot {
  text-align: end;
}
.forgot a {
  color: var(--cool-gray);
  font-size: 14px;
  font-weight: 500;
}
.forgot a:hover{
  color: var(--cool-gold);
}

</style>