// Enquiry and careers forms.
// Submissions go to the existing EmailJS service and template (ids are on the
// <form> element). This calls the same endpoint the EmailJS SDK's sendForm()
// uses, so no third-party script has to be downloaded.

const ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send-form';
const PHONE = '+91 99439 17774';
const MESSAGES = {
  required: 'Please fill in this field.',
  email: 'Enter a valid email address, such as name@company.com.',
  phone: 'Enter a valid phone number using digits, spaces, + or -.',
  accept: 'Please agree to the privacy policy to continue.',
};

function prefill(form) {
  const params = new URLSearchParams(location.search);
  const product = params.get('product');
  const intent = params.get('intent');
  const select = form.querySelector('[data-product]');
  const message = form.elements.Message;
  if (product && select) {
    let option = [...select.options].find((o) => o.value === product);
    if (!option) { option = new Option(product, product); select.add(option); }
    select.value = option.value;
  }
  if (intent === 'datasheet' && message && !message.value) {
    message.value = `Please send me the datasheet${product ? ` for ${product}` : ''}.\n\n`;
  }
}

function setup(form) {
  const status = form.querySelector('.form__status');
  const button = form.querySelector('[type="submit"]');
  const fields = [...form.querySelectorAll('input, textarea, select')].filter((el) => el.name !== 'website');
  const opened = Date.now();
  prefill(form);

  const say = (text, kind = '') => {
    status.textContent = text;
    status.className = `form__status${kind ? ` is-${kind}` : ''}`;
  };

  const validate = (el) => {
    const value = el.type === 'checkbox' ? el.checked : el.value.trim();
    let message = '';
    if (el.required && !value) message = el.type === 'checkbox' ? MESSAGES.accept : MESSAGES.required;
    else if (el.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) message = MESSAGES.email;
    else if (el.type === 'tel' && value && !/^[0-9+()\-\s]{7,20}$/.test(value)) message = MESSAGES.phone;

    const error = document.getElementById(`${el.id}-error`);
    if (error) {
      error.textContent = message;
      error.hidden = !message;
      const ids = new Set((el.getAttribute('aria-describedby') || '').split(' ').filter(Boolean));
      if (message) ids.add(error.id); else ids.delete(error.id);
      if (ids.size) el.setAttribute('aria-describedby', [...ids].join(' ')); else el.removeAttribute('aria-describedby');
    }
    if (message) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
    return !message;
  };

  for (const el of fields) {
    el.addEventListener('blur', () => { if (el.value || el.hasAttribute('aria-invalid')) validate(el); });
    el.addEventListener('input', () => { if (el.hasAttribute('aria-invalid')) validate(el); });
    el.addEventListener('change', () => { if (el.hasAttribute('aria-invalid') || el.type === 'checkbox') validate(el); });
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    say('');
    const invalid = fields.filter((el) => !validate(el));
    if (invalid.length) {
      say(invalid.length === 1 ? 'Please correct the highlighted field.' : `Please correct the ${invalid.length} highlighted fields.`, 'error');
      invalid[0].focus();
      return;
    }

    const value = (name) => (form.elements[name]?.value || '').trim();
    const context = form.dataset.context || 'Website enquiry';
    const product = value('product');
    const success = () => {
      form.reset();
      say('Thank you. Your message has been sent and our team will be in touch shortly.', 'ok');
      status.setAttribute('tabindex', '-1');
      status.focus({ preventScroll: true });
      status.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    };

    // Spam traps: a hidden field people never see, and a submit faster than a person can type.
    if (form.elements.website?.value || Date.now() - opened < 1500) { success(); return; }

    const data = new FormData();
    const intro = [`[${context}]`, product && `Product: ${product}`, `Sent from: ${location.href}`].filter(Boolean).join('\n');
    data.append('name', value('name'));
    data.append('Company', value('Company') || 'Not provided');
    data.append('email', value('email'));
    data.append('phone', value('phone'));
    data.append('Message', `${intro}\n\n${value('Message')}`);
    data.append('acceptance', '1');
    data.append('product', product);
    data.append('context', context);
    data.append('page_url', location.href);
    data.append('service_id', form.dataset.service);
    data.append('template_id', form.dataset.template);
    data.append('user_id', form.dataset.key);

    form.classList.add('is-sending');
    button.disabled = true;
    say('Sending…');
    try {
      const response = await fetch(ENDPOINT, { method: 'POST', body: data });
      if (!response.ok) throw new Error(`EmailJS responded ${response.status}`);
      success();
      window.dataLayer?.push({ event: 'enquiry_submitted', form_context: context, product });
      if (typeof window.gtag === 'function') window.gtag('event', 'generate_lead', { form_context: context, product });
    } catch (error) {
      console.warn('Enquiry could not be sent:', error);
      say(`Sorry, your message could not be sent. Please try again, or call us on ${PHONE}.`, 'error');
    } finally {
      form.classList.remove('is-sending');
      button.disabled = false;
    }
  });
}

document.querySelectorAll('[data-form]').forEach(setup);
