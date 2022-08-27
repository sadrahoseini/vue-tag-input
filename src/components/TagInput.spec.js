import { mount } from 'cypress/vue'
import TagInput from './TagInput.vue'

describe('Type in tag input and press Enter to add new tag', () => {
  it('mounts', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')

    mount(TagInput, {
      props: {
        label: 'Select',
        placeholder: 'Add brands...',
        onChange: onChangeSpy,
        fetchUrl: '/api/brands',
        identifier: 'brands'
      }
    })

    const typeQuery = 'Sadrix';

    // cy.get('input').focus().wait(2000).type(typeQuery)

    // cy.get('input').focus().type('{enter}')

    // cy.get('.tags').should('include.text', typeQuery)
  })
})