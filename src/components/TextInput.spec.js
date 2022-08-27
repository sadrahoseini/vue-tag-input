import { mount } from 'cypress/vue'
import TextInput from './TextInput.vue'

describe('<TextInput>', () => {
  it('mounts', () => {
    const defaultValue = 'sadra';
    mount(TextInput, {
      props: {
        modelValue: defaultValue
      }
    })

    cy.get('input').should('have.value', defaultValue)
  })
})