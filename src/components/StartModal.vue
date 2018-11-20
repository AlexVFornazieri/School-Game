<template>
  <v-layout row justify-center>
    <v-dialog v-model="isOpen" persistent max-width="400px">
      <v-card>
        <v-card-title>
          <span class="headline">Pronto para começar?</span>
        </v-card-title>
        <v-card-text>
          <div v-if="loading">
            <v-progress-linear :indeterminate="true"></v-progress-linear>
          </div>
          <v-form
            ref="form" v-else
            v-model="valid" lazy-validation>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field
                    v-model="name"
                    :rules="[rules.required]"
                    label="Seu nome" required/>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    label="E-mail" required/>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                    v-model="classCode"
                    :rules="[rules.required]"
                    label="Código da turma" required/>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*Campo obrigatório.</small>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click.native="start"
            :loading="loading">Iniciar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        valid: false,
        name: '',
        email: '',
        classCode: '',
        isOpen: false,
        rules: {
          required: value => !!value || 'Campo obrigatório.',
          email: v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || ('Deve ser um endereço válido.')
        }
      }
    },
    mounted () {
      if (!this.$service.getPlayer()) {
        // this.isOpen = true
      }
    },
    methods: {
      start () {
        if (!this.$refs.form.validate()) return

        this.loading = true
        this.$service.reset()
        this.$service.setPlayer({
          name: this.name,
          email: this.email,
          classCode: this.classCode
        })
        window.location.assign(window.location.href.split('/#')[0])
      }
    }
  }
</script>
