<template>
  <b-navbar class="nav">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="~/assets/images/minato_logo.png" alt="minato" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item
        href="/"
        class="nav--item"
        :class="{ active: isHome }"
        @mouseover="mouseOverAction"
        @mouseleave="mouseLemoveAction"
      >
        <span class="disp-small">ホーム</span>
        <span class="disp-large nav-text"
          >ホーム<br /><span class="nav-text--eg">HOME</span></span
        >
      </b-navbar-item>
      <b-navbar-item
        href="/information"
        class="nav--item"
        :class="{ active: isInformation }"
        @mouseover="mouseOverAction"
        @mouseleave="mouseLemoveAction"
      >
        <span class="disp-small">施設案内</span>
        <span class="disp-large nav-text"
          >施設案内<br /><span class="nav-text--eg">INFORMATION</span></span
        >
      </b-navbar-item>
      <b-navbar-item
        href="/access"
        class="nav--item"
        :class="{ active: isAccess }"
        @mouseover="mouseOverAction"
        @mouseleave="mouseLemoveAction"
      >
        <span class="disp-small">アクセス</span>
        <span class="disp-large nav-text"
          >アクセス<br /><span class="nav-text--eg">ACCESS</span></span
        >
      </b-navbar-item>
      <b-navbar-item
        href="/fee"
        class="nav--item"
        :class="{ active: isFee }"
        @mouseover="mouseOverAction"
        @mouseleave="mouseLemoveAction"
      >
        <span class="disp-small">料金表</span>
        <span class="disp-large nav-text"
          >料金表<br /><span class="nav-text--eg">FEE TABLE</span></span
        >
      </b-navbar-item>
      <b-navbar-item
        href="/availability"
        class="nav--item"
        :class="{ active: isAvailability }"
        @mouseover="mouseOverAction"
        @mouseleave="mouseLemoveAction"
      >
        <span class="disp-small">空き状況</span>
        <span class="disp-large nav-text"
          >空き状況<br /><span class="nav-text--eg">AVAILABILITY</span></span
        >
      </b-navbar-item>
      <b-navbar-item
        href="/contact"
        class="nav--item"
        :class="{ active: isContact }"
        @mouseover="mouseOverAction"
        @mouseleave="mouseLemoveAction"
      >
        <span class="disp-small">お問い合わせ</span>
        <span class="disp-large nav-text"
          >お問い合わせ<br /><span class="nav-text--eg">CONTACT</span></span
        >
      </b-navbar-item>
      <b-navbar-item
        href="/company"
        class="nav--item"
        :class="{ active: isCompany }"
        @mouseover="mouseOverAction"
        @mouseleave="mouseLemoveAction"
      >
        <span class="disp-small">協力機関・企業</span>
        <span class="disp-large nav-text"
          >協力機関・企業<br /><span class="nav-text--eg">COMPANY</span></span
        >
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  data() {
    if (this.$route.path === '/') {
      return {
        isHome: true,
        isInformation: false,
        isAccess: false,
        isFee: false,
        isAvailability: false,
        isContact: false,
        isCompany: false
      }
    } else if (this.$route.path === '/information') {
      return {
        isHome: false,
        isInformation: true,
        isAccess: false,
        isFee: false,
        isAvailability: false,
        isContact: false,
        isCompany: false
      }
    } else if (this.$route.path === '/access') {
      return {
        isHome: false,
        isInformation: false,
        isAccess: true,
        isFee: false,
        isAvailability: false,
        isContact: false,
        isCompany: false
      }
    } else if (this.$route.path === '/fee') {
      return {
        isHome: false,
        isInformation: false,
        isAccess: false,
        isFee: true,
        isAvailability: false,
        isContact: false,
        isCompany: false
      }
    } else if (this.$route.path === '/availability') {
      return {
        isHome: false,
        isInformation: false,
        isAccess: false,
        isFee: false,
        isAvailability: true,
        isContact: false,
        isCompany: false
      }
    } else if (this.$route.path === '/contact') {
      return {
        isHome: false,
        isInformation: false,
        isAccess: false,
        isFee: false,
        isAvailability: false,
        isContact: true,
        isCompany: false
      }
    } else if (this.$route.path === '/company') {
      return {
        isHome: false,
        isInformation: false,
        isAccess: false,
        isFee: false,
        isAvailability: false,
        isContact: false,
        isCompany: true
      }
    } else {
      return {
        isHome: false,
        isInformation: false,
        isAccess: false,
        isFee: false,
        isAvailability: false,
        isContact: false,
        isCompany: false
      }
    }
  },
  methods: {
    mouseOverAction() {
      if (this.$route.path === '/') {
        this.isHome = false
      } else if (this.$route.path === '/information') {
        this.isInformation = false
      } else if (this.$route.path === '/access') {
        this.isAccess = false
      } else if (this.$route.path === '/fee') {
        this.isFee = false
      } else if (this.$route.path === '/availability') {
        this.isAvailability = false
      } else if (this.$route.path === '/contact') {
        this.isContact = false
      } else if (this.$route.path === '/company') {
        this.isCompany = false
      } else {
      }
    },
    mouseLemoveAction() {
      if (this.$route.path === '/') {
        this.isHome = true
      } else if (this.$route.path === '/information') {
        this.isInformation = true
      } else if (this.$route.path === '/access') {
        this.isAccess = true
      } else if (this.$route.path === '/fee') {
        this.isFee = true
      } else if (this.$route.path === '/availability') {
        this.isAvailability = true
      } else if (this.$route.path === '/contact') {
        this.isContact = true
      } else if (this.$route.path === '/company') {
        this.isCompany = true
      } else {
      }
    }
  }
}
</script>
