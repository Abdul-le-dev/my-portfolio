import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (e) => {
    validateForm(e.target.name);
  };

  const validateForm = (fieldToValidate = null) => {
    let valid = true;
    let formErrors = { ...errors };

    if (!fieldToValidate || fieldToValidate === "name") {
      if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(formData.name)) {
        formErrors.name = "Veuillez entrer un nom et prénom valide.";
        valid = false;
      } else {
        formErrors.name = "";
      }
    }

    if (!fieldToValidate || fieldToValidate === "email") {
      if (
        !/^(?!.*\.\.)([a-zA-Z0-9._%+-]+)@[a-zA-Z0-9]+(\.[a-zA-Z0-9-]*)?\.[a-zA-Z]{2,}$/.test(
          formData.email,
        )
      ) {
        formErrors.email = "Veuillez entrer une adresse email valide.";
        valid = false;
      } else {
        formErrors.email = "";
      }
    }

    if (!fieldToValidate || fieldToValidate === "phone") {
      if (
        formData.phone.trim() !== "" &&
        !/^(?:\+33|0033|0)[1-9](\d{2}){4}$/.test(formData.phone)
      ) {
        formErrors.phone =
          "Veuillez entrer un numéro valide (ex: 0612345678, +33...).";
        valid = false;
      } else {
        formErrors.phone = "";
      }
    }

    if (!fieldToValidate || fieldToValidate === "subject") {
      const textOnlyRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;

      if (formData.subject.trim().length < 5) {
        formErrors.subject = "Le sujet doit contenir au moins 5 caractères.";
        valid = false;
      } else if (!textOnlyRegex.test(formData.subject)) {
        formErrors.subject = "Le sujet ne doit contenir que du texte.";
        valid = false;
      } else {
        formErrors.subject = "";
      }
    }

    if (!fieldToValidate || fieldToValidate === "message") {
      if (formData.message.trim().length < 10) {
        formErrors.message =
          "Veuillez entrer un message au moins 10 caractères.";
        valid = false;
      } else {
        formErrors.message = "";
      }
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const isValid = validateForm();
    if (!isValid) return;

    setIsSubmitting(true);
    setStatus("sending");

    try {
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus("error");
        console.error(
          "Erreur serveur :",
          result.error || result.errors || "Erreur inconnue",
        );
      }
    } catch (error) {
      setStatus("error");
      console.error("Erreur de soumission :", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const head = document.head;
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendlyLoaded(true);
    document.body.appendChild(script);

    return () => {
      document
        .querySelector(
          'script[src="https://assets.calendly.com/assets/external/widget.js"]',
        )
        ?.remove();
      document
        .querySelector(
          'link[href="https://assets.calendly.com/assets/external/widget.css"]',
        )
        ?.remove();
    };
  }, []);

  const openCalendly = (e) => {
    e.preventDefault();
    if (calendlyLoaded && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/abdulledev/entretien-appointment",
      });
    }
  };

  return (
    <section id="contact" className="py-24 max-w-2xl mx-auto px-6">
      <div className="text-center mb-12">
        <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
          Contact & RDV
        </span>
        <h2 className="text-3xl font-bold text-white mt-6 mb-6">
          Me Contacter
        </h2>

        {/* Bouton Calendly */}
        <button
          onClick={openCalendly}
          className="inline-flex items-center gap-2 bg-white text-gray-950 px-6 py-3 rounded-xl font-bold hover:bg-blue-100 transition shadow-lg mb-8"
        >
          <Calendar size={20} /> Réserver un RDV gratuit
        </button>
        <p className="text-gray-400">
          Ou envoyez-moi un message via le formulaire ci-dessous :
        </p>
      </div>

      {/* Formulaire de contact */}
      {status === "success" ? (
        <div className="text-center p-8 bg-gray-900 rounded-2xl border border-green-500/30 text-white">
          <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
          <p className="mb-6">
            Merci pour votre message, je vous répondrai rapidement.
          </p>
          <button
            onClick={() => setStatus("")}
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form
          action="https://formspree.io/f/xbdzyplz"
          method="POST"
          onSubmit={handleSubmit}
          noValidate
          className="space-y-6 bg-gray-900 p-8 rounded-2xl border border-gray-800"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Nom et Prénom
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className={`w-full bg-gray-950 border rounded-lg p-3 text-white outline-none transition focus:border-blue-500 ${errors.name ? "border-red-500" : "border-gray-800"}`}
              placeholder="Votre nom et prénom"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`w-full bg-gray-950 border rounded-lg p-3 text-white outline-none transition focus:border-blue-500 ${errors.email ? "border-red-500" : "border-gray-800"}`}
              placeholder="Votre adresse email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Sujet
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`w-full bg-gray-950 border rounded-lg p-3 text-white outline-none transition focus:border-blue-500 ${errors.subject ? "border-red-500" : "border-gray-800"}`}
              placeholder="Sujet"
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full bg-gray-950 border rounded-lg p-3 text-white outline-none transition focus:border-blue-500 ${errors.message ? "border-red-500" : "border-gray-800"}`}
              placeholder="Votre message..."
              minLength={10}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition cursor-pointer disabled:opacity-50 flex items-center justify-center"
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            {!isSubmitting && <FaPaperPlane className="ml-2" />}
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
