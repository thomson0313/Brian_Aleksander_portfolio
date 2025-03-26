import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import './ContactForm.css'; // Import the CSS file

// import Loading from '../../assets/img/loading.gif'

const ContactForm = () => {
    const form = useRef();
    const ServiceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const TemplateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    const EmailPublicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); // Loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({ ...errors, [name]: '' }); // Clear error on change
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (formData.phoneNumber && !/^\+?\d{10,15}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Phone number is invalid';
        if (!formData.message) newErrors.message = 'Message is required';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true); // Set loading state to true

        emailjs
            .sendForm(ServiceId, TemplateId, form.current, {
                publicKey: EmailPublicKey,
            })
            .then(
                () => {
                    toast.success('Successfully Submitted', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    // Reset form fields
                    setFormData({
                        name: '',
                        email: '',
                        phoneNumber: '',
                        message: '',
                    });
                    setErrors({});
                },
                (error) => {
                    toast.error('Submit Failed. ' + error.text, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            )
            .finally(() => {
                setLoading(false); // Reset loading state
            });
    };

    return (
        <form onSubmit={handleSubmit} className='contact-form' ref={form}>
            <div className='form-group' data-aos='flip-up'>
                <label htmlFor='name'>Name <span className='required'>*</span></label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <span className='error-text'>{errors.name}</span>}
            </div>
            <div className='form-group' data-aos='flip-up'>
                <label htmlFor='email'>Email <span className='required'>*</span></label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder='sample@gmail.com'
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span className='error-text'>{errors.email}</span>}
            </div>
            <div className='form-group' data-aos='flip-up'>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder='+1 234567890'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                {errors.phoneNumber && <span className='error-text'>{errors.phoneNumber}</span>}
            </div>
            <div className='form-group' data-aos='flip-up'>
                <label htmlFor='message'>Message <span className='required'>*</span></label>
                <textarea
                    name="message"
                    id="message"
                    placeholder='Write your message'
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                />
                {errors.message && <span className='error-text'>{errors.message}</span>}
            </div>
            <button type="submit" className='form-button' data-aos='flip-up' disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
                {/* {
                    !loading ?
                        <img src={Loading} alt='loading' /> :
                        <div>Submit</div>
                } */}
            </button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </form>
    );
};

export default ContactForm;
