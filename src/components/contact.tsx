"use client"

import { useState } from "react" // Removed unused `useEffect`
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react" // Removed unused `AlertCircle`

// Validation schema
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is empty"),
})

type FormData = z.infer<typeof formSchema>

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
        message: "Message sent successfully!",
      })
      form.reset()
    } catch (error: any) {
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
    <section id="contact" className="contact pt-20">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact me</h2>
        <div className="w-full md:w-9/12 mx-auto mb-10">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="py-6 px-8 m-auto max-w-2xl rounded-xl backdrop-blur-sm bg-gray-100 shadow-xl border"
          >
            <div className="text-left mb-4">
              <label htmlFor="name" className="ml-2 block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-xl border-none bg-white outline-none focus:ring-2 focus:ring-black/30"
                {...form.register("name")}
                placeholder="Enter your name..."
              />
              {form.formState.errors.name && (
                <p className="text-red-600 text-sm mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>
            <div className="text-left mb-4">
              <label htmlFor="email" className="ml-2 block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-xl border-none bg-white outline-none focus:ring-2 focus:ring-black/30"
                {...form.register("email")}
                placeholder="Enter email..."
              />
              {form.formState.errors.email && (
                <p className="text-red-600 text-sm mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>
            <div className="text-left">
              <label htmlFor="message" className="ml-2 block mb-1 font-medium">
                Message
              </label>
              <textarea
                className="w-full p-3 md:p-4 rounded-xl border-none bg-white outline-none overflow-auto resize-none focus:ring-2 focus:ring-black/30"
                id="message"
                {...form.register("message")}
                rows={6}
                placeholder="Write your message..."
              ></textarea>
              {form.formState.errors.message && (
                <p className="text-red-600 text-sm mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>

            {submitStatus.type !== "idle" && (
              <div
                className={`p-3 rounded-lg text-center ${
                  submitStatus.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-bold text-lg md:text-2xl px-6 md:px-8 py-3 md:py-4 mt-6 md:mt-10 rounded-xl bg-black/5 border-2 border-black/80 shadow-[2px_2px_#202020] hover:relative transition-all hover:right-0.5 hover:bottom-0.5 hover:shadow-[5px_5px_#202020] hover:cursor-pointer active:bg-[#cfcdcd] disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting && <Loader2 className="h-5 w-5 animate-spin" />}
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

