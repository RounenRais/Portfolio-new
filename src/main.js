import './assets/main.css';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n'; // vue-i18n import
import App from './App.vue';
import router from './router';
import 'flag-icon-css/css/flag-icons.min.css';



const messages = {
    en: {
      navAbout: 'About',
      welcome: 'Welcome!',
      name: "Hi, I'm <span class=\"name\">Yunus</span>",
      frontend: 'Frontend Developer',
      uiux: 'UI/UX Designer',
      backend: 'Backend Developer',
      projects: 'Projects',
      contact: 'Contact',
      nameField: 'Name:',
      emailField: 'E-Mail:',
      messageField: 'Message:',
      send: 'Send',
      sending: 'Sending...',
      successMessage: 'Message sent successfully!',
      errorMessage: 'An error occurred while sending the message.',
      back: 'Back',
    },
    tr: {
      navAbout: 'Hakkında',
      welcome: 'Hoşgeldiniz!',
      name: "Merhaba, ben <span class=\"name\">Yunus</span>",
      frontend: 'Frontend Geliştirici',
      uiux: 'UI/UX Tasarımcı',
      backend: 'Backend Geliştirici',
      projects: 'Projeler',
      contact: 'İletişim',
      nameField: 'İsim:',
      emailField: 'E-Posta:',
      messageField: 'Mesaj:',
      send: 'Gönder',
      sending: 'Gönderiliyor...',
      successMessage: 'Mesaj başarıyla gönderildi!',
      errorMessage: 'Mesaj gönderilirken bir hata oluştu.',
      back: 'Geri',
    },
  };
  

const userLang = navigator.language || navigator.userLanguage;
const i18n = createI18n({
  locale: userLang.startsWith('tr') ? 'tr' : 'en', 
  messages,
});

const app = createApp(App);
app.use(router);
app.use(i18n); // i18n eklendi
app.mount('#app');