<template>
  <b-navbar class="nav">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="~/assets/images/minato_logo.png" alt="minato" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="/" class="nav--item active">
        <span class="disp-small">ホーム</span>
        <span class="disp-large nav-text"
          >ホーム<br /><span class="nav-text--eg">HOME</span></span
        >
      </b-navbar-item>
      <b-navbar-item href="/information" class="nav--item">
        <span class="disp-small">施設案内</span>
        <span class="disp-large nav-text"
          >施設案内<br /><span class="nav-text--eg">INFORMATION</span></span
        >
      </b-navbar-item>
      <b-navbar-item href="/access" class="nav--item">
        <span class="disp-small">アクセス</span>
        <span class="disp-large nav-text"
          >アクセス<br /><span class="nav-text--eg">ACCESS</span></span
        >
      </b-navbar-item>
      <b-navbar-item href="/fee" class="nav--item">
        <span class="disp-small">料金表</span>
        <span class="disp-large nav-text"
          >料金表<br /><span class="nav-text--eg">FEE TABLE</span></span
        >
      </b-navbar-item>
      <b-navbar-item href="/availability" class="nav--item">
        <span class="disp-small">空き状況</span>
        <span class="disp-large nav-text"
          >空き状況<br /><span class="nav-text--eg">AVAILABILITY</span></span
        >
      </b-navbar-item>
      <b-navbar-item href="/contact" class="nav--item">
        <span class="disp-small">お問い合わせ</span>
        <span class="disp-large nav-text"
          >お問い合わせ<br /><span class="nav-text--eg">CONTACT</span></span
        >
      </b-navbar-item>
      <b-navbar-item href="/company" class="nav--item">
        <span class="disp-small">協力機関・企業</span>
        <span class="disp-large nav-text"
          >協力機関・企業<br /><span class="nav-text--eg">COMPANY</span></span
        >
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
