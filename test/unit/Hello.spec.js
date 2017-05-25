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
        var container = document.createElement('div');

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
        expect(vm.$el.textContent).toBe('Gogo Gadget')
    });
});
