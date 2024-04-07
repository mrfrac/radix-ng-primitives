# Radix Angular


> Radix-NG is an unofficial Angular port of [Radix UI](https://www.radix-ui.com/), thus we share the same principal and vision when building primitives.

Radix Primitives is a low-level UI component library with a focus on accessibility, customization and developer experience. You can use these components either as the base layer of your design system, or adopt them incrementally.


## Vision

The common understanding among us regarding UI elements such as accordions, checkboxes, comboboxes, dialogs, dropdowns, selects, sliders, and tooltips is well-established, guided by standards like those [documented by WAI-ARIA](https://www.w3.org/TR/wai-aria-practices/#aria_ex). These elements are foundational to our shared language in web development.

Yet, the reality we face with the current web platform offerings falls short. These essential elements are often missing, underdeveloped, or rigid in customization options.

This forces developers into the challenging position of creating custom components from scratch, a task fraught with complexity. Consequently, the web is littered with components that fail to be accessible, perform poorly, and miss critical functionality.

We aim to spearhead the development of an open-source, comprehensively funded library of components. This initiative seeks to empower the creation of design systems that are both accessible and rich in features, serving the needs of the community at large.

## Key Features

Components adhere to the [WAI-ARIA design patterns](https://www.w3.org/TR/wai-aria-practices-1.2) where possible. We handle many of the difficult implementation details related to accessibility, including aria and role attributes, focus management, and keyboard navigation. Learn more in our [accessibility](./accessibility) overview.

### Unstyled

Components ship with zero styles, giving you complete control over styling. Components can be styled with any styling solution (vanilla CSS, CSS preprocessors & etc).

### Opened

Radix Primitives are designed to be customized to suit your needs. Our open component architecture provides you granular access to each component part, so you can wrap them and add your own event listeners, props, or refs.

### Uncontrolled

Where applicable, components are uncontrolled by default but can also be controlled, alternatively. All of the behavior wiring is handled internally, so you can get up and running as smoothly as possible, without needing to create any local states.


## Credits

All credits go to these open-source works and resources

- [Radix UI](https://radix-ui.com)
- [Radix Vue](https://radix-vue.com)
- [Radix Svelte](https://radix-svelte.com)
- [Spartan UI](https://www.spartan.ng/)
