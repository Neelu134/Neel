"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Valentine() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely sure?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ]
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-100 gap-8">
      <div className="text-4xl text-pink-500 font-bold text-center">❤️ Will you be my Valentine? ❤️</div>

      <img
        src="https://sjc.microlink.io/QMC_3rrq0Ppwx04IVNODd0SVi3bjruVeukReqRFHjcuQ4Aaa3GB6KT95JK7QoXUIBmgaPPdBMmk9DyFHHqoqiQ.jpeg"
        alt="Cute Valentine Bears"
        className="w-64 h-64 object-contain"
      />

      {yesPressed ? (
        <div className="text-4xl text-pink-500 font-bold text-center">Yay! 🎉</div>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full text-xl min-w-[100px]"
            onClick={() => setYesPressed(true)}
          >
            Yes
          </Button>
          <Button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full text-xl min-w-[100px]"
            onClick={() => setNoCount(noCount + 1)}
            style={{ transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)` }}
          >
            {getNoButtonText()}
          </Button>
        </div>
      )}
    </div>
  )
}

