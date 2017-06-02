import Vue from 'vue';
import PropsMsg from '../../src/components/PropsMsg.vue';

function getRenderedText (Component, propsData) {
    const container = document.createElement('div');
    const Ctor = Vue.extend(Component);
    const vm = new Ctor({
        el: container,
        propsData: propsData
    });
    return vm.$el.textContent
}

describe('PropsData Tests', () => {

    it('A local Component should work with propsData', () => {
        const container = document.createElement('div');

        const PropsMsg = Vue.extend({
            props: ['msg'],
            template: '<div>{{ msg }}</div>'
        });

        const vm = new PropsMsg({
            el: container,
            propsData: {
                msg: "Gogo Gadget"
            }
        });
        expect(vm.$el.textContent).toBe('Gogo Gadget');
    });

    it('A Component loaded from src should also work with propsData', () => {
        const container = document.createElement('div');
        const Ctor = Vue.extend(PropsMsg);

        const vm = new Ctor({
            el: container,
            propsData: {
                msg: "Gogo Gadget"
            }
        });
        vm.$nextTick(function(){
            expect(vm.$el.textContent).toBe('Gogo Gadget');
        });
    });

    it('renders correctly with different props', () => {
        expect(getRenderedText( PropsMsg, {
            msg: 'Hello'
        })).toBe('Hello');
        expect(getRenderedText( PropsMsg, {
            msg: 'Bye'
        })).toBe('Bye');
    });
});
