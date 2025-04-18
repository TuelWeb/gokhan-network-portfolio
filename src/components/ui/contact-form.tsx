
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Send, CheckCircle, XCircle } from "lucide-react"

const contactSchema = z.object({
  firstName: z.string().min(2, { message: "Le prénom doit comporter au moins 2 caractères." }),
  lastName: z.string().min(2, { message: "Le nom doit comporter au moins 2 caractères." }),
  email: z.string().email({ message: "Veuillez entrer une adresse e-mail valide." }),
  subject: z.string().min(5, { message: "Le sujet doit comporter au moins 5 caractères." }),
  message: z.string().min(20, { message: "Le message doit comporter au moins 20 caractères." }),
})

type ContactFormValues = z.infer<typeof contactSchema>

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<"success" | "error" | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    
    // In a real implementation, this would send the email
    // For demonstration purposes, we'll simulate success after a short delay
    try {
      console.log("Form data to send:", data)
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In a real app, we would send the data to an API endpoint
      // and handle the response accordingly
      
      setSubmitResult("success")
      reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitResult("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      {submitResult === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="font-montserrat font-semibold text-xl mb-2 text-portfolioPrimary">
            Message envoyé !
          </h3>
          <p className="font-opensans text-portfolioPrimary/80 mb-6">
            Merci pour votre message. Je vous répondrai dès que possible.
          </p>
          <button
            type="button"
            onClick={() => setSubmitResult(null)}
            className="bg-portfolioAccent text-white font-montserrat font-medium px-6 py-2 rounded-md hover:bg-portfolioPrimary transition-colors"
          >
            Envoyer un nouveau message
          </button>
        </div>
      ) : submitResult === "error" ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center animate-fade-in">
          <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="font-montserrat font-semibold text-xl mb-2 text-portfolioPrimary">
            Erreur lors de l'envoi
          </h3>
          <p className="font-opensans text-portfolioPrimary/80 mb-6">
            Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer ultérieurement.
          </p>
          <button
            type="button"
            onClick={() => setSubmitResult(null)}
            className="bg-portfolioAccent text-white font-montserrat font-medium px-6 py-2 rounded-md hover:bg-portfolioPrimary transition-colors"
          >
            Réessayer
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-portfolioSecondary/30 animate-fade-in"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="lastName" className="block font-montserrat text-sm font-medium mb-1 text-portfolioPrimary">
                Nom
              </label>
              <input
                id="lastName"
                type="text"
                className={cn(
                  "w-full p-2 border rounded-md font-opensans",
                  errors.lastName
                    ? "border-red-500 focus:ring-red-200"
                    : "border-portfolioSecondary/30 focus:ring-portfolioAccent/20"
                )}
                placeholder="Votre nom"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="firstName" className="block font-montserrat text-sm font-medium mb-1 text-portfolioPrimary">
                Prénom
              </label>
              <input
                id="firstName"
                type="text"
                className={cn(
                  "w-full p-2 border rounded-md font-opensans",
                  errors.firstName
                    ? "border-red-500 focus:ring-red-200"
                    : "border-portfolioSecondary/30 focus:ring-portfolioAccent/20"
                )}
                placeholder="Votre prénom"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
              )}
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block font-montserrat text-sm font-medium mb-1 text-portfolioPrimary">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={cn(
                "w-full p-2 border rounded-md font-opensans",
                errors.email
                  ? "border-red-500 focus:ring-red-200"
                  : "border-portfolioSecondary/30 focus:ring-portfolioAccent/20"
              )}
              placeholder="Votre adresse e-mail"
              {...register("email")}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="subject" className="block font-montserrat text-sm font-medium mb-1 text-portfolioPrimary">
              Sujet
            </label>
            <input
              id="subject"
              type="text"
              className={cn(
                "w-full p-2 border rounded-md font-opensans",
                errors.subject
                  ? "border-red-500 focus:ring-red-200"
                  : "border-portfolioSecondary/30 focus:ring-portfolioAccent/20"
              )}
              placeholder="Le sujet de votre message"
              {...register("subject")}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block font-montserrat text-sm font-medium mb-1 text-portfolioPrimary">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className={cn(
                "w-full p-2 border rounded-md font-opensans",
                errors.message
                  ? "border-red-500 focus:ring-red-200"
                  : "border-portfolioSecondary/30 focus:ring-portfolioAccent/20"
              )}
              placeholder="Votre message..."
              {...register("message")}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full bg-portfolioAccent text-white font-montserrat font-medium px-6 py-3 rounded-md transition-colors flex items-center justify-center gap-2",
              isSubmitting 
                ? "opacity-70 cursor-not-allowed" 
                : "hover:bg-portfolioPrimary"
            )}
          >
            {isSubmitting ? (
              <>
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Envoi en cours...
              </>
            ) : (
              <>
                <Send size={18} />
                Envoyer le message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
