import { useLocation } from "react-router-dom"

export default function Contact() {
    const data = useLocation()

  return (
    <div className="text-4xl font-semibold text-center pt-10">Contact us</div>
  )
}