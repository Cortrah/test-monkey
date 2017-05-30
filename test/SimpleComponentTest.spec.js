import Vue from 'vue'
import SimpleComponent from '../src/components/SimpleComponent.vue'

describe('SimpleComponent', () => {

    // Inspect the raw component options
    it('has a created hook', () => {
        expect(typeof SimpleComponent.created).toBe('function')
    });

    // Evaluate the results of functions in
    // the raw component options
    it('sets the correct default data', () => {
        expect(typeof SimpleComponent.data).toBe('function');
        const defaultData = SimpleComponent.data();
        expect(defaultData.msg).toBe('hello!')
    });

    // Inspect the component instance on mount
    it('correctly sets the message when created', () => {
        const vm = new Vue(SimpleComponent).$mount();
        expect(vm.msg).toBe('goodbye!')
    });

    // Mount an instance and inspect the render output
    it('renders the correct message', () => {
        const SimpleComponent = Vue.extend(SimpleComponent);
        const vm = new SimpleComponent().$mount();
        vm.$nextTick(function(){
            expect(vm.$el.textContent).toBe('goodbye!')
        })
    })
});
