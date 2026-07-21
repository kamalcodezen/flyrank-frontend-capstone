/**
 * Account Settings form validation.
 *
 * Each field has a single validator function that returns either
 * `null` (valid) or a short, human-readable error message (invalid).
 * That message drives the field's CSS state, its feedback text, and
 * its ARIA attributes, so there is only one source of truth per field.
 */
(function () {
    'use strict';

    const form = document.getElementById('settingsForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    const toast = document.getElementById('toast');
    const bioInput = document.getElementById('bio');
    const bioCharsUsed = document.getElementById('bioCharsUsed');
    const BIO_MAX_LENGTH = 160;
    const BIO_WARNING_THRESHOLD = 140;

    let toastTimeoutId = null;

    /**
     * Field definitions: element reference, whether the field is required,
     * and a validator that returns an error message string, or null if valid.
     */
    const fields = {
        name: {
            input: document.getElementById('name'),
            required: true,
            validate: (value) => {
                const words = value.trim().split(/\s+/).filter(Boolean);
                if (words.length < 2) {
                    return 'Enter a first and last name.';
                }
                return null;
            },
        },
        email: {
            input: document.getElementById('email'),
            required: true,
            validate: (value) => {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(value.trim())) {
                    return "That doesn't look like a valid email address.";
                }
                return null;
            },
        },
        phone: {
            input: document.getElementById('phone'),
            required: false,
            validate: (value) => {
                const digitCount = value.replace(/\D/g, '').length;
                if (digitCount < 7) {
                    return 'Enter at least 7 digits.';
                }
                return null;
            },
        },
        password: {
            input: document.getElementById('password'),
            required: true,
            validate: (value) => {
                if (value.length < 8) {
                    return 'Use at least 8 characters.';
                }
                if (!/[A-Z]/.test(value)) {
                    return 'Add at least one capital letter.';
                }
                if (!/[0-9]/.test(value)) {
                    return 'Add at least one number.';
                }
                return null;
            },
        },
        confirm: {
            input: document.getElementById('confirm'),
            required: true,
            validate: (value) => {
                const passwordValue = fields.password.input.value;
                if (value.length === 0) {
                    return 'Re-enter your password.';
                }
                if (value !== passwordValue) {
                    return "Doesn't match the password above.";
                }
                return null;
            },
        },
    };

    /**
     * Returns true if a field can be skipped because it's optional and empty.
     */
    function isEmptyOptionalField(fieldConfig, value) {
        return !fieldConfig.required && value.trim() === '';
    }

    /**
     * Runs a single field's validator and updates its visual state,
     * feedback message, and ARIA attributes to match.
     * Returns true if the field is valid (or optionally empty).
     */
    function validateField(name) {
        const fieldConfig = fields[name];
        const input = fieldConfig.input;
        const wrapper = input.closest('.field');
        const feedbackEl = document.getElementById(`${name}-feedback`);
        const value = input.value;

        wrapper.classList.remove('is-valid', 'is-error');
        input.setAttribute('aria-invalid', 'false');
        if (feedbackEl) feedbackEl.textContent = '';

        // Untouched, empty, and not required yet: leave neutral, don't nag the user.
        const hasBeenTouched = input.dataset.touched === 'true';
        if (!hasBeenTouched) {
            return isEmptyOptionalField(fieldConfig, value) || value.trim() === '';
        }

        if (isEmptyOptionalField(fieldConfig, value)) {
            return true;
        }

        let errorMessage = null;
        try {
            errorMessage = fieldConfig.validate(value);
        } catch (error) {
            // A validator should never throw, but fail safe rather than
            // silently letting an invalid value through.
            console.error(`Validation error on field "${name}":`, error);
            errorMessage = 'Something went wrong checking this field.';
        }

        if (errorMessage) {
            wrapper.classList.add('is-error');
            input.setAttribute('aria-invalid', 'true');
            if (feedbackEl) feedbackEl.textContent = errorMessage;
            return false;
        }

        wrapper.classList.add('is-valid');
        if (feedbackEl) feedbackEl.textContent = 'Looks good.';
        return true;
    }

    /**
     * Validates every field and returns whether the whole form is ready to submit.
     * Required fields must be non-empty and pass their validator; optional
     * fields only need to pass their validator if they have a value.
     */
    function isFormValid() {
        return Object.keys(fields).every((name) => {
            const fieldConfig = fields[name];
            const value = fieldConfig.input.value;

            if (isEmptyOptionalField(fieldConfig, value)) {
                return true;
            }
            if (fieldConfig.required && value.trim() === '') {
                return false;
            }
            return fieldConfig.validate(value) === null;
        });
    }

    /**
     * Updates the save button and the status message to reflect current
     * form validity, without re-rendering per-field feedback.
     */
    function updateFormStatus() {
        const formIsValid = isFormValid();

        submitBtn.disabled = !formIsValid;
        submitBtn.setAttribute('aria-disabled', String(!formIsValid));
        formStatus.classList.toggle('is-ready', formIsValid);

        if (formIsValid) {
            formStatus.textContent = 'Ready to save.';
            return;
        }

        const outstandingCount = Object.keys(fields).filter((name) => {
            const fieldConfig = fields[name];
            const value = fieldConfig.input.value;
            if (isEmptyOptionalField(fieldConfig, value)) return false;
            if (fieldConfig.required && value.trim() === '') return true;
            return fieldConfig.validate(value) !== null;
        }).length;

        formStatus.textContent =
            outstandingCount === 1
                ? '1 field still needs attention.'
                : `${outstandingCount} fields still need attention.`;
    }

    /**
     * Wires up input/blur listeners for a single field. Typing updates the
     * field's own feedback immediately; the password field also re-checks
     * "confirm password" so a mismatch clears itself as soon as it's fixed.
     */
    function bindFieldEvents(name) {
        const input = fields[name].input;

        input.addEventListener('input', () => {
            input.dataset.touched = 'true';
            validateField(name);
            if (name === 'password' && fields.confirm.input.dataset.touched === 'true') {
                validateField('confirm');
            }
            updateFormStatus();
        });

        input.addEventListener('blur', () => {
            input.dataset.touched = 'true';
            validateField(name);
            updateFormStatus();
        });
    }

    /**
     * Bio character counter. Purely informational, so it doesn't affect
     * form validity, but it does warn as the user approaches the limit.
     */
    function bindBioCounter() {
        bioInput.addEventListener('input', () => {
            const length = bioInput.value.length;
            bioCharsUsed.textContent = length;
            bioCharsUsed.parentElement.classList.toggle(
                'is-near-limit',
                length > BIO_WARNING_THRESHOLD
            );
        });
    }

    /**
     * Shows a brief toast confirming the save, then hides it again.
     * Cancels any in-flight hide timer so rapid saves don't cut it off early.
     */
    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('is-visible');

        if (toastTimeoutId) {
            clearTimeout(toastTimeoutId);
        }
        toastTimeoutId = setTimeout(() => {
            toast.classList.remove('is-visible');
        }, 2400);
    }

    function handleSubmit(event) {
        event.preventDefault();

        // Mark every field as touched so validation feedback shows on submit,
        // even for fields the user never focused.
        Object.keys(fields).forEach((name) => {
            fields[name].input.dataset.touched = 'true';
            validateField(name);
        });
        updateFormStatus();

        if (!isFormValid()) {
            // Move focus to the first invalid field so keyboard and screen
            // reader users land exactly where they need to fix something.
            const firstInvalidField = Object.keys(fields)
                .map((name) => fields[name])
                .find((fieldConfig) => fieldConfig.input.closest('.field').classList.contains('is-error'));
            if (firstInvalidField) {
                firstInvalidField.input.focus();
            }
            return;
        }

        try {
            // In a real app this would send data to a server. Here we just
            // confirm the save locally.
            showToast('Settings saved.');
            form.reset();
            Object.keys(fields).forEach((name) => {
                fields[name].input.dataset.touched = 'false';
                const wrapper = fields[name].input.closest('.field');
                wrapper.classList.remove('is-valid', 'is-error');
                fields[name].input.setAttribute('aria-invalid', 'false');
                const feedbackEl = document.getElementById(`${name}-feedback`);
                if (feedbackEl) feedbackEl.textContent = '';
            });
            bioCharsUsed.textContent = '0';
            bioCharsUsed.parentElement.classList.remove('is-near-limit');
            updateFormStatus();
        } catch (error) {
            console.error('Failed to save settings:', error);
            showToast('Something went wrong. Please try again.');
        }
    }

    function init() {
        Object.keys(fields).forEach(bindFieldEvents);
        bindBioCounter();
        form.addEventListener('submit', handleSubmit);
        updateFormStatus();
    }

    document.addEventListener('DOMContentLoaded', init);
})();