export const registrationForm = {
    title: 'Registration Form',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true, validation: { pattern: '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.(com|net|in)$', message: 'Invalid email address' } },
      { name: 'dob', label: 'Date of Birth', type: 'date' },
      { name: 'gender', label: 'Gender', type: 'dropdown', required: true, options: ['Male', 'Female', 'Other'] },
      { name: 'hobbies', label: 'Hobbies', type: 'multiselect', options: ["Reading","Sports","Music","Travel"] },
      { name: 'subscribe', label: 'Subscribe to newsletter', type: 'checkbox' },
      { name: 'about', label: 'About Yourself', type: 'textarea' }
    ]
};