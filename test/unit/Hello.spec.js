import Vue from 'vue'
import Hello from '../../src/components/Hello.vue'

describe('Hello.vue', () => {

    it('should render Hello World! in an h1 tag', () => {
        const vm = new Vue({
            template: '<div><hello></hello></div>',
            components: {Hello}
        }).$mount();
        expect(vm.$el.querySelector('.hello h1').textContent).toBe('Hello World!')
    });
});
