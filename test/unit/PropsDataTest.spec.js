import Vue from 'vue'
import PropsMsg from '../../src/components/PropsMsg.vue'

describe('PropsData Tests', () => {

    it('A local Component should work with propsData', () => {
        let container = document.createElement('div');

        const Comp = Vue.extend({
            props: ['msg'],
            template: '<div>{{ msg }}</div>'
        });

        const vm = new Comp({
            el: container,
            propsData: {
                msg: "Gogo Gadget"
            }
        });
        expect(vm.$el.textContent).toBe('Gogo Gadget');
    });

    it('A Component loaded from src should also work with propsData', () => {
        let container = document.createElement('div');

        const vm = new Vue(PropsMsg).$mount();
        expect(vm.$el.textContent).toBe('Gogo Gadget');
    });
});
