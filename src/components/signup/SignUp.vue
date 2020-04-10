<template>
    <a-form :form="form">
        <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                label="Nom d'utilisateur"
        >
            <a-input
                    v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Veuillez entrer votre nom d\'utilisateur' }] },
        ]"
                    placeholder="Veuillez entrer votre nom d'utilisateur"
            />
        </a-form-item>
        <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                label="Mot de passe"
        >
            <a-input
                    v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Veuillez entrer votre mot de passe' }] },
        ]"
                    placeholder="Veuillez entrer votre mot de passe"
            />
        </a-form-item>
        <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
            <a-button type="primary" @click="check">
                Check
            </a-button>
        </a-form-item>
    </a-form>
</template>

<script>
	const formItemLayout = {
		labelCol: {span: 4},
		wrapperCol: {span: 8},
	};
	const formTailLayout = {
		labelCol: {span: 4},
		wrapperCol: {span: 8, offset: 4},
	};

	export default {
		name: "SignUp",
		data() {
			return {
				checkNick: false,
				formItemLayout,
				formTailLayout,
				form: this.$form.createForm(this, {name: 'dynamic_rule'}),
			}
		},
		methods: {
			check() {
				this.form.validateFields(err => {
					if (!err) {
						console.info('success');
					}
				});
			}
		}
	}
</script>

<style scoped>

</style>
