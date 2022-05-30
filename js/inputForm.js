// window.formbutton =
//   window.formbutton ||
//   function () {
//     (formbutton.q = formbutton.q || []).push(arguments);
//   };
/* customize formbutton below*/
let formbutton =
  ("create",
  {
    action: "https://formspree.io/f/xnqwwdog",
    title: "How can we help?",
    fields: [
      {
        type: "email",
        label: "Email:",
        name: "email",
        required: true,
        placeholder: "your@email.com",
      },
      {
        type: "phone",
        label: "Phone:",
        name: "phone",
        required: true,
        placeholder: "0123456789",
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
      },
      { type: "submit" },
    ],
  });
