"use client";
import React, { useEffect } from 'react';
import { useForm, useWatch } from "react-hook-form";
import Field from "../common/Field";

function ContactForm() {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        control,
        formState: { errors, isSubmitting, isSubmitSuccessful }
    } = useForm({
        mode: "onTouched"
    });

    const [isSuccess, setIsSuccess] = React.useState(false);
    const [message, setMessage] = React.useState("");

    const userName = useWatch({ 
        control, 
        name: "name", 
        defaultValue: "Someone" 
    });
  
    useEffect(() => {
        setValue('subject', `${userName} sent a message from Website`)
    }, [userName, setValue]);

    const submitForm = async (data, e) => {
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    ...data,
                    access_key: "8a66e95d-5ba0-41f5-86c5-3984cbea5a3c", // Replace with your actual access key
                    from_name: "Website Contact Form"
                })
            });

            const result = await response.json();

            if (result.success) {
                setIsSuccess(true);
                setMessage(result.message);
                reset();
            } else {
                setIsSuccess(false);
                setMessage(result.message);
            }
        } catch (error) {
            console.error("Submission error:", error);
        }
    };

    return (
        <div className="sofax-field-box ml-50">
            <h3>Send us a message</h3>

            {!isSubmitSuccessful && (
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="sofax-main-field">
                                <Field label="Your Name" error={errors.name}>
                                    <input
                                        {...register("name", { 
                                            required: "Name is required.",
                                            maxLength: {
                                                value: 80,
                                                message: "Name must be less than 80 characters"
                                            }
                                        })}
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Your Full Name"
                                    />
                                </Field>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sofax-main-field">
                                <Field label="Enter email address" error={errors.email}>
                                    <input
                                        {...register("email", { 
                                            required: "Email is required.",
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email Address"
                                    />
                                </Field>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="sofax-main-field">
                                <label>Your Message</label>
                                <textarea 
                                    {...register("message", { 
                                        required: "Message is required." 
                                    })}
                                    name="message" 
                                    placeholder="Write Your Message"
                                />
                                {errors.message && (
                                    <small className="text-red-600">{errors.message.message}</small>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="tac">
                                <button 
                                    id="sofax-submit-btn" 
                                    className="mt-30" 
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            )}

            {isSubmitSuccessful && isSuccess && (
                <div className="success-message">
                    <h4 className="text-green-500">Message Sent Successfully!</h4>
                    <p>{message}</p>
                    <button onClick={() => reset()}>Send Another Message</button>
                </div>
            )}
        </div>
    );
}

export default ContactForm;
