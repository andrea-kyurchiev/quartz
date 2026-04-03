import ko from 'knockout';
import CertificateGenerator from '@/plugins/CerificateGenerator.vue';
import createVueApplication from '@/utils/createVueApplication';
import CertificateGeneratorTemplate from 'templates/views/components/plugins/certificate-generator-plugin.html';

ko.components('certificate-generator-plugin', {
    viewModel: function() {
        createVueApplication(CertificateGenerator).then(vueApp => {
            vueApp.mount('#cg-plugin-mount-point');
        });
    },
    template: CertificateGeneratorTemplate,
});