  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    // Input fields
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const company = document.getElementById('company');
    const jobTitle = document.getElementById('jobTitle');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    // const assistance = document.getElementById('assistance');

    // Error elements
    const errors = {
      firstName: document.getElementById('firstNameError'),
      lastName: document.getElementById('lastNameError'),
      company: document.getElementById('companyError'),
      jobTitle: document.getElementById('jobTitleError'),
      email: document.getElementById('emailError'),
      phone: document.getElementById('phoneError'),
      // assistance: document.getElementById('assistanceError')
    };

    // Clear errors
    for (const key in errors) {
      errors[key].textContent = '';
    }

    // Validation
    if (firstName.value.trim() === '') {
      errors.firstName.textContent = 'First name is required';
      isValid = false;
    }

    if (lastName.value.trim() === '') {
      errors.lastName.textContent = 'Last name is required';
      isValid = false;
    }

    if (company.value.trim() === '') {
      errors.company.textContent = 'Company is required';
      isValid = false;
    }

    if (jobTitle.value.trim() === '') {
      errors.jobTitle.textContent = 'Job title is required';
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      errors.email.textContent = 'Enter a valid email';
      isValid = false;
    }

    const phonePattern = /^[0-9]{7,15}$/;
    if (!phonePattern.test(phone.value.trim())) {
      errors.phone.textContent = 'Enter a valid phone number';
      isValid = false;
    }

    // if (assistance.value === '') {
    //   errors.assistance.textContent = 'Please select an option';
    //   isValid = false;
    // }

    // if (isValid) {
    //     console.log("Form Data:");
    //     console.log("First Name:", firstName.value.trim());
    //     console.log("Last Name:", lastName.value.trim());
    //     console.log("Company:", company.value.trim());
    //     console.log("Job Title:", jobTitle.value.trim());
    //     console.log("Email:", email.value.trim());
    //     console.log("Phone:", phone.value.trim());
    //     console.log("Assistance With:", assistance.value);
    //     window.location.href = "/thank-you.html";
    //  // form.reset();
    // }

    if (isValid) {
  const formData = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    company: company.value.trim(),
    jobTitle: jobTitle.value.trim(),
    email: email.value.trim(),
    phone: phone.value.trim(),
    formid: "7",
    apikey: "a68031bf_1948_4752_8d7a_c75484ab1780",
    SourceURL: "",
    pagereferrerurl: "",
    rid: "",
    cid: "",
    pagetitle: ""
    // assistance: assistance.value
  };

  fetch('https://formapiv5.resul.io/Subscription/formSubmission', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(data => {
      console.log("Server response:", data);

      // ✅ Redirect to Thank You Page after success
      window.location.href = "/thank-you.html";
    })
    .catch(error => {
      console.error("Error submitting form:", error);
      // alert("Something went wrong. Please try again later.");
      
    });
}

    
  });
