<template>
  <v-container class="h-100 d-flex align-center">
    <v-row justify="center" align="center">
      <v-col cols="12">
        <header class="header-logo mb-0 elevation-2">
          <img src="~/assets/logo.webp" alt="Zapaterias de León">
        </header>
      </v-col>
      <v-col
        cols="11"
        sm="6"
        md="10"
      >
        <v-form
          ref="form"
          lazy-validation
          class="h-100"
          @submit.prevent="login"
        >
          <v-row class="h-100 justify-center align-center">
            <v-col cols="12" md="5" class="text-center">
              <h2 class="text-center">
                BIENVENIDO
              </h2>
              <h4 class="text--secondary caption text-center mb-6">CATÁLOGO DIGITAL</h4>
              <v-text-field
                v-model.trim="form.user"
                label="Teléfono o email"
                :rules="validations.req"
                :error="error"
                color="purple darken-3"
                prepend-inner-icon="mdi-phone"
                autocomplete="new-email"
                filled
                background-color="#fbfbfb"
              />
              <v-text-field
                v-model.trim="form.password"
                label="Contraseña"
                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                :rules="validations.passwordRules"
                :type="showPassword ? 'text' : 'password'"
                :error="error"
                hint="Longitud minima 6 caracteres"
                prepend-inner-icon="mdi-lock-outline"
                color="purple darken-3"
                class="mb-4"
                autocomplete="new-password"
                filled
                background-color="#fbfbfb"
                @click:append="showPassword = !showPassword"
              />
              <v-btn
                dark
                depressed
                :loading="loading"
                color="primary"
                class="mb-3"
                block
                large
                elevation="2"
                type="submit"
              >
                Ingresar
              </v-btn>
            </v-col>
            <v-col v-if="error" cols="12">
              <v-alert
                color="red"
                border="left"
                class="grey lighten-5"
                colored-border
                dense
                elevation="1"
                icon="mdi-exclamation"
              >
                Datos incorrectos
              </v-alert>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
      <v-col cols="11">
        <p class="caption mt-12 text-center">
          <i>
            <strong>IMPORTANTE:</strong> Si eres dstribuidor y no cuentas con tu contraseña puedes contactarnos para proporcionarte tus accesos
          </i>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
  },
  layout: 'login',
  asyncData ({ redirect }) {
    if (process.env.type) return redirect('/')
  },
  data () {
    return {
      showPassword: false,
      loading: false,
      form: {
        user: '',
        password: ''
      },
      validations: {
        req: [
          value => !!value || 'Campo requerido.'
        ],
        passwordRules: [
          value => !!value || 'Campo requerido.',
          value => value.length >= 6 || 'Minimo 6 caracteres'
        ]
      },
      error: false
    }
  },
  methods: {
    async login () {
      // console.log(this.form)
      if (this.$refs.form.validate()) {
        try {
          this.loading = true
          await this.$auth.loginWith('laravelSanctum', {
            data: this.form
          })
        } catch (err) {
          this.error = true
          console.log(err)
        } finally {
          this.loading = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
