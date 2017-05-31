import Vue from 'vue'
import Hello from '../../src/components/Hello.vue'

describe('Hello.vue', () => {

    it('should render Hello World! in an h1 tag under a div with a .hello class', () => {
        const vm = new Vue({
            template: '<div><hello></hello></div>',
            components: {Hello}
        }).$mount();
        expect(vm.$el.querySelector('.hello h1').textContent).toBe('Hello World!')
    });

    it('should do the same from a component loaded from src', () => {
       const vm = new Vue(Hello).$mount();
       expect(vm.$el.querySelector('.hello h1').textContent).toBe('Hello World!')
    });
});
