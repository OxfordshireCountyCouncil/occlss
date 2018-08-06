Form controls

Form controls allow users to enter information into a page.

Accessibility

As you customize these templates, make sure they meet the accessibility guidelines in this introduction and as described for each control.

Display form controls in the same order in HTML as they appear on screen. Do not use CSS to rearrange the form controls. Screen readers narrate forms in the order they appear in the HTML.
Visually align validation messages with the input fields, so people using screen magnifiers can read them quickly.
Group each set of thematically related controls in a fieldset element. Use the legend element to offer a label within each one. The fieldset and legend elements make it easier for screen reader users to navigate the form.
Use a single legend for fieldset (this is required). One example of a common use of fieldset and legend is a question with radio button options for answers. The question text and radio buttons are wrapped in a fieldset, with the question itself being inside the legend tag.
Embed multiple fieldsets and legends for more complex forms.
Keep your form blocks in a vertical pattern. This approach is ideal, from an accessibility standpoint, because of limited vision that makes it hard to scan from right to left.
Supporting screen readers
Note: These code examples have been designed to support a range of screen readers. That said, they may not work with all versions.

Known issues
VoiceOver on iOS currently does not support fieldset and legend for forms. You can address this by using aria-labeledby="for-attribute-of-label id-of-legend id-of-additional-info" on each input in the fieldset. Using aria-labeledby will overwrite the default text read by the screen reader, so it is important to include all relevant information.
VoiceOver on OS X currently does not support aria-describedby. Use aria-labeledby instead, and include all related fields, including, labels, legend, and hint text
If you are a building a form with multiple controls, also consider the accessibility guidelines in the “Form Templates” section.