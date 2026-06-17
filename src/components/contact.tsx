"use client"

import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is empty"),
})

type FormData = z.infer<typeof formSchema>

function FloatingField({
  id,
  label,
  error,
  register,
  watchValue,
  type = "text",
  rows,
}: {
  id: string
  label: string
  error?: string
  register: ReturnType<ReturnType<typeof useForm>["register"]>
  watchValue: string
  type?: string
  rows?: number
}) {
  const [focused, setFocused] = useState(false)
  const hasValue = watchValue && watchValue.length > 0
  const isActive = focused || hasValue

  const inputClasses =
    "input-glow w-full rounded-xl border border-border bg-background/80 px-4 pt-5 pb-2 text-sm text-foreground outline-none transition-all duration-200 focus:border-foreground/30"

  const labelBase =
    "pointer-events-none absolute left-4 transition-all duration-200 ease-out origin-left"

  const labelClasses = isActive
    ? `${labelBase} top-2 text-[11px] font-medium text-foreground/70`
    : `${labelBase} top-3.5 text-sm text-muted-foreground`

  return (
    <div className="relative">
      {rows ? (
        <textarea
          id={id}
          rows={rows}
          className={`${inputClasses} resize-none`}
          {...register}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          type={type}
          id={id}
          className={inputClasses}
          {...register}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1.5 text-destructive text-xs mt-1.5 ml-1"
          >
            <AlertCircle className="h-3 w-3" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "idle" | "success" | "error"
    message: string
  }>({ type: "idle", message: "" })

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const { watch } = form
  const nameValue = watch("name")
  const emailValue = watch("email")
  const messageValue = watch("message")

  useEffect(() => {
    if (submitStatus.type !== "idle") {
      const timer = setTimeout(() => {
        setSubmitStatus({ type: "idle", message: "" })
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: "idle", message: "" })

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      })
      form.reset()
    } catch (error: unknown) {
      console.error("Error sending email:", error)
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="w-11/12 md:w-9/12 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a project in mind or want to discuss an opportunity? Drop me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          <div className="relative rounded-2xl border border-border/50 bg-background/60 backdrop-blur-xl shadow-lg shadow-foreground/5 p-6 sm:p-8">
            {/* Subtle gradient border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/5 via-transparent to-foreground/5 pointer-events-none" />

            <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-6">
              <FloatingField
                id="name"
                label="Your Name"
                error={form.formState.errors.name?.message}
                register={form.register("name")}
                watchValue={nameValue}
              />

              <FloatingField
                id="email"
                label="Email Address"
                type="email"
                error={form.formState.errors.email?.message}
                register={form.register("email")}
                watchValue={emailValue}
              />

              <FloatingField
                id="message"
                label="Your Message"
                rows={5}
                error={form.formState.errors.message?.message}
                register={form.register("message")}
                watchValue={messageValue}
              />

              {/* Status Messages */}
              <AnimatePresence mode="wait">
                {submitStatus.type !== "idle" && (
                  <motion.div
                    key={submitStatus.type}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 text-green-600 border border-green-500/20"
                        : "bg-red-500/10 text-red-500 border border-red-500/20"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                    ) : (
                      <AlertCircle className="h-4 w-4 shrink-0" />
                    )}
                    <span>{submitStatus.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/10 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
