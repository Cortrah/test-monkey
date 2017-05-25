import Vue from 'vue'
import Hello from '../../src/components/Hello.vue'

describe('Hello.vue', () => {

    it('should render correct contents', () => {
        const vm = new Vue({
            template: '<div><hello></hello></div>',
            components: {Hello}
        }).$mount();
        expect(vm.$el.querySelector('.hello h1').textContent).toBe('Hello World!')
    });

    it('should also work with propsData', () => {
        const Comp = Vue.extend({
            el:body,
            props: ['msg'],
            template: '<div>{{ msg }}</div>'
        });

        const vm = new Comp({
            el:body,
            template: '<div>{{ msg }}</div>',
            propsData: {
                msg: "Gogo Gadget"
            }
        }).$mount();
        expect(vm.$el.textContent).toBe('Gogo Gadget')
    });
});

// also see example testing a component with mocks at
// https://github.com/vuejs/vueify-example/blob/master/test/unit/a.spec.js#L22-L43
