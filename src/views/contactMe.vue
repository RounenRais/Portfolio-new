<template>
    <div :class="deger" class="contact-form shadow">
      <form :class="deger"  @submit.prevent="sendEmail">
        <div>
          <label :class="deger" for="name">Name:</label>
          <input :class="deger" v-model="formData.name" type="text" id="name" required />
        </div>
        <div>
          <label :class="deger" for="email">E-Mail:</label>
          <input :class="deger" v-model="formData.email" type="email" id="email" required />
        </div>
        <div>
          <label :class="deger" for="message">Message:</label>
          <textarea :class="deger" v-model="formData.message" id="message" required></textarea>
        </div>
        <button class="btn" :class="deger" :disabled="isSubmitting" type="submit">
          {{ isSubmitting ? 'Sending...' : 'Send' }}
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import emailjs from 'emailjs-com';
  
  export default {
    props:['deger'],
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: '',
        },
        isSubmitting: false, // Butonun durumunu kontrol eden değişken
      };
    },
    methods: {
      sendEmail() {
        this.isSubmitting = true; // Gönderim başladığında butonu devre dışı bırak
        const serviceID = 'service_67cz6oc';
        const templateID = 'template_e1ju0sd';
        const userID = 'bfztpk5UuC5dTuHUA';
  
        emailjs
          .send(serviceID, templateID, this.formData, userID)
          .then(
            (response) => {
              alert('Mesaj başarıyla gönderildi!');
              console.log('SUCCESS!', response.status, response.text);

            },
            (error) => {
              alert('Mesaj gönderilirken bir hata oluştu.');
              console.error('FAILED...', error);
            }
          )
          .finally(() => {
            this.isSubmitting = false; // İşlem tamamlandığında butonu tekrar etkinleştir
          });
          this.formData.name=""
          this.formData.email=""
            this.formData.message="" 
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
button {
    width: 100%;
    padding: 0.5rem;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:disabled {
    background-color: #9e9e9e;
    cursor: not-allowed;
  }

  </style>
  