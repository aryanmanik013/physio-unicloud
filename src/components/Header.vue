<template>
  <b-navbar toggleable="lg">
    <b-navbar-brand href="#">
      <img
        src="../assets/default-dark.svg"
        @click="homePage()"
        class="logo-image"
      />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav> </b-navbar-nav>
      <b-navbar-nav class="ms-auto">
        <b-nav-form>
          <b-form-input
            class="hide-mobile-search"
            placeholder="Search"
          ></b-form-input>
        </b-nav-form>
        <b-container fluid="md">
          <b-row>
            <b-col>
              <div class="d-flex align-items-center ms-2 ms-lg-3">
                <div
                  class="
                    header-btn
                    btn btn-icon btn-custom
                    w-30px
                    h-30px
                    w-md-40px
                    h-md-40px
                  "
                  id="kt_activities_toggle"
                >
                  <!--begin::Svg Icon | path: icons/duotune/general/gen032.svg-->
                  <span class="svg-icon svg-icon-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="8"
                        y="9"
                        width="3"
                        height="10"
                        rx="1.5"
                        fill="currentColor"
                      ></rect>
                      <rect
                        opacity="0.5"
                        x="13"
                        y="5"
                        width="3"
                        height="14"
                        rx="1.5"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="18"
                        y="11"
                        width="3"
                        height="8"
                        rx="1.5"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="3"
                        y="13"
                        width="3"
                        height="6"
                        rx="1.5"
                        fill="currentColor"
                      ></rect>
                    </svg>
                  </span>
                  <!--end::Svg Icon-->
                </div>
                <div
                  class="
                    btn btn-icon btn-custom
                    w-30px
                    h-30px
                    w-md-40px
                    h-md-40px
                  "
                  id="kt_activities_toggle"
                >
                  <!--begin::Svg Icon | path: icons/duotune/general/gen032.svg-->
                  <span class="svg-icon svg-icon-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.3"
                        d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z"
                        fill="currentColor"
                      ></path>
                      <path
                        opacity="0.3"
                        d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <!--end::Svg Icon-->
                </div>
                
                <div
                  class="
                    header-btn
                    btn btn-icon btn-custom
                    w-30px
                    h-30px
                    w-md-40px
                    h-md-40px
                  "
                  id="kt_activities_toggle"
                >
                <!-- <svg height="" width="" class="blink_me">
                  <circle cx="50" cy="50" r="10" fill="red" />
                  Sorry, your browser does not support inline SVG.
                </svg> -->
                  <!--begin::Svg Icon | path: icons/duotune/general/gen032.svg-->
                  <span class="svg-icon svg-icon-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                        fill="currentColor"
                      ></path>
                      <rect
                        x="6"
                        y="12"
                        width="7"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="6"
                        y="7"
                        width="12"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                    </svg>
                  </span>
                  <!--end::Svg Icon-->
                </div>
                <div
                  class="
                    header-btn
                    btn btn-icon btn-custom
                    w-30px
                    h-30px
                    w-md-40px
                    h-md-40px
                  "
                  id="kt_activities_toggle"
                >
                  <!--begin::Svg Icon | path: icons/duotune/general/gen032.svg-->
                  <span class="svg-icon svg-icon-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="9"
                        height="9"
                        rx="2"
                        fill="currentColor"
                      ></rect>
                      <rect
                        opacity="0.3"
                        x="13"
                        y="2"
                        width="9"
                        height="9"
                        rx="2"
                        fill="currentColor"
                      ></rect>
                      <rect
                        opacity="0.3"
                        x="13"
                        y="13"
                        width="9"
                        height="9"
                        rx="2"
                        fill="currentColor"
                      ></rect>
                      <rect
                        opacity="0.3"
                        x="2"
                        y="13"
                        width="9"
                        height="9"
                        rx="2"
                        fill="currentColor"
                      ></rect>
                    </svg>
                  </span>
                  <!--end::Svg Icon-->
                </div>
                <div
                  class="
                    header-btn
                    btn btn-icon btn-custom
                    w-30px
                    h-30px
                    w-md-40px
                    h-md-40px
                  "
                  id="kt_activities_toggle"
                >
                  <!--begin::Svg Icon | path: icons/duotune/general/gen032.svg-->
                  <span class="svg-icon svg-icon-1">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.0647 5.43757C19.3421 5.43757 19.567 5.21271 19.567 4.93534C19.567 4.65796 19.3421 4.43311 19.0647 4.43311C18.7874 4.43311 18.5625 4.65796 18.5625 4.93534C18.5625 5.21271 18.7874 5.43757 19.0647 5.43757Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M20.0692 9.48884C20.3466 9.48884 20.5714 9.26398 20.5714 8.98661C20.5714 8.70923 20.3466 8.48438 20.0692 8.48438C19.7918 8.48438 19.567 8.70923 19.567 8.98661C19.567 9.26398 19.7918 9.48884 20.0692 9.48884Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M12.0335 20.5714C15.6943 20.5714 18.9426 18.2053 20.1168 14.7338C20.1884 14.5225 20.1114 14.289 19.9284 14.161C19.746 14.034 19.5003 14.0418 19.3257 14.1821C18.2432 15.0546 16.9371 15.5156 15.5491 15.5156C12.2257 15.5156 9.48884 12.8122 9.48884 9.48886C9.48884 7.41079 10.5773 5.47137 12.3449 4.35752C12.5342 4.23832 12.6 4.00733 12.5377 3.79251C12.4759 3.57768 12.2571 3.42859 12.0335 3.42859C7.32556 3.42859 3.42857 7.29209 3.42857 12C3.42857 16.7079 7.32556 20.5714 12.0335 20.5714Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M13.0379 7.47998C13.8688 7.47998 14.5446 8.15585 14.5446 8.98668C14.5446 9.26428 14.7693 9.48891 15.0469 9.48891C15.3245 9.48891 15.5491 9.26428 15.5491 8.98668C15.5491 8.15585 16.225 7.47998 17.0558 7.47998C17.3334 7.47998 17.558 7.25535 17.558 6.97775C17.558 6.70015 17.3334 6.47552 17.0558 6.47552C16.225 6.47552 15.5491 5.76616 15.5491 4.93534C15.5491 4.65774 15.3245 4.43311 15.0469 4.43311C14.7693 4.43311 14.5446 4.65774 14.5446 4.93534C14.5446 5.76616 13.8688 6.47552 13.0379 6.47552C12.7603 6.47552 12.5357 6.70015 12.5357 6.97775C12.5357 7.25535 12.7603 7.47998 13.0379 7.47998Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <!--end::Svg Icon-->
                </div>
                <div
                  class="
                    header-btn
                    btn btn-icon btn-custom
                    w-30px
                    h-30px
                    w-md-40px
                    h-md-40px
                  "
                  id="kt_activities_toggle"
                >
                  <!--begin::Svg Icon | path: icons/duotune/general/gen032.svg-->
                  <span class="svg-icon svg-icon-1">
                    <img
                      style="width: 40px"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                  </span>
                  <!--end::Svg Icon-->
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    homePage() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.logo-image {
  height: 30px;
}
svg {
  color: white;
}
@media screen and (max-width: 767px) {
  .hide-mobile-search {
    display: none;
  }
}

@media screen and (max-device-width: 480px) and (orientation: portrait) {
  .header-btn {
    padding: 0.625rem 1rem 0.5rem 0rem;
  }
}
.blink_me {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

/* .btn{
padding: 0.625rem 1.0rem 0.5rem 1rem;
} */
</style>