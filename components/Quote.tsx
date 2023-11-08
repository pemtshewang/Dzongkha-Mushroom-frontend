"use client"
import { useState, useEffect } from "react"

export default function QuotePage() {
  const [quote, setQuote] = useState({
    quoteText: "",
    quoteAuthor: ""
  });
  useEffect(() => {
    fetch("https://zenquotes.io/api/quotes", {
      mode: "no-cors",
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setQuote({
          quoteText: data[0].q,
          quoteAuthor: data[0].a
        })
      })
  }, [])
  return (
    <div className="p-2 space-y-2">
      <p className="text-2xl">&ldquo;&nbsp;{quote.quoteText}&nbsp;&ldquo;</p>
      <div className="flex justify-end">
        <p className="ml-auto italic justify-end">-{quote.quoteAuthor}</p>
      </div>
    </div>
  )
}
