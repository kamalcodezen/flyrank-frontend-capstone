(function () {
    const form = document.getElementById('settingsForm');
    const submitBtn = document.getElementById('submitBtn');
    const statusText = document.getElementById('statusText');
    const toast = document.getElementById('toast');

    const fields = {
        name: {
            el: document.getElementById('name'),
            required: true,
            validate: v => v.trim().split(/\s+/).filter(Boolean).length >= 2
        },
        email: {
            el: document.getElementById('email'),
            required: true,
            validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
        },
        phone: {
            el: document.getElementById('phone'),
            required: false,
            validate: v => v.trim() === '' || v.replace(/\D/g, '').length >= 7
        },
        password: {
            el: document.getElementById('password'),
            required: true,
            validate: v => v.length >= 8 && /[A-Z]/.test(v) && /[0-9]/.test(v)
        },
        confirm: {
            el: document.getElementById('confirm'),
            required: true,
            validate: v => v.length > 0 && v === fields.password.el.value
        }
    };

    function setFieldState(name) {
        const f = fields[name];
        const wrap = f.el.closest('.field');
        const val = f.el.value;
        const touched = f.el.dataset.touched === '1';

        wrap.classList.remove('is-valid', 'is-error');
        if (!touched) return;

        if (val.trim() === '' && !f.required) {
            return;
        }
        if (f.validate(val)) {
            wrap.classList.add('is-valid');
        } else {
            wrap.classList.add('is-error');
        }
    }

    Object.keys(fields).forEach(name => {
        const f = fields[name];
        f.el.addEventListener('input', () => {
            f.el.dataset.touched = '1';
            setFieldState(name);
            if (name === 'password') setFieldState('confirm');
            updateFormState();
        });
        f.el.addEventListener('blur', () => {
            f.el.dataset.touched = '1';
            setFieldState(name);
            updateFormState();
        });
    });

    function allValid() {
        return Object.keys(fields).every(name => {
            const f = fields[name];
            const val = f.el.value;
            if (!f.required && val.trim() === '') return true;
            return f.validate(val);
        });
    }

    function updateFormState() {
        const ok = allValid();
        submitBtn.classList.toggle('enabled', ok);
        if (ok) {
            statusText.textContent = 'Ready to save';
            statusText.classList.add('ready');
        } else {
            const remaining = Object.keys(fields).filter(name => {
                const f = fields[name];
                const val = f.el.value;
                if (!f.required && val.trim() === '') return false;
                return !f.validate(val);
            }).length;
            statusText.textContent = remaining + (remaining === 1 ? ' field still needs attention' : ' fields still need attention');
            statusText.classList.remove('ready');
        }
    }

    // bio character count
    const bio = document.getElementById('bio');
    const bioCount = document.getElementById('bioCount');
    bio.addEventListener('input', () => {
        bioCount.textContent = bio.value.length;
        bioCount.parentElement.classList.toggle('warn', bio.value.length > 140);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        Object.keys(fields).forEach(name => {
            fields[name].el.dataset.touched = '1';
            setFieldState(name);
        });
        updateFormState();
        if (!allValid()) return;

        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2200);
    });

    updateFormState();
})();