"use client"

import { useState } from "react"
import { Share2, Check, X, Loader2 } from "lucide-react"
import Button from "./Button"

interface ShareButtonProps {
    label: string
}

type CopyState = "idle" | "loading" | "success" | "error"

export function ShareButton({ label }: ShareButtonProps) {
    const [copyState, setCopyState] = useState<CopyState>("idle")

    async function handleShare() {
        if (copyState !== "idle") return

        setCopyState("loading")

        try {
            const url = window.location.href
            await navigator.clipboard.writeText(url)
            setCopyState("success")
        } catch {
            setCopyState("error")
        } finally {
            setTimeout(() => setCopyState("idle"), 2500)
        }
    }

    const toastConfig = {
        loading: {
            bg: "bg-yellow-500/90",
            icon: <Loader2 className="w-4 h-4 animate-spin" />,
            text: "Copying link…",
        },
        success: {
            bg: "bg-emerald-500/90",
            icon: <Check className="w-4 h-4" />,
            text: "Link copied!",
        },
        error: {
            bg: "bg-red-500/90",
            icon: <X className="w-4 h-4" />,
            text: "Failed to copy.",
        },
    }

    const toast = copyState !== "idle" ? toastConfig[copyState] : null

    return (
        <div className="relative inline-flex flex-col items-center gap-3">
            {/* Toast */}
            <div
                className={`
                    absolute -top-14 left-1/2 -translate-x-1/2
                    flex items-center gap-2 px-4 py-2
                    rounded-full text-white text-sm font-medium whitespace-nowrap
                    shadow-lg backdrop-blur-sm
                    transition-all duration-300
                    ${toast
                        ? `${toast.bg} opacity-100 translate-y-0 pointer-events-none`
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }
                `}
            >
                {toast && (
                    <>
                        {toast.icon}
                        <span>{toast.text}</span>
                    </>
                )}
            </div>

            {/* Button */}
            <Button
                onClick={handleShare}
                disabled={copyState !== "idle"}
                className="bg-nuclear-cyan text-nuclear-dark hover:bg-nuclear-cyan/90 disabled:opacity-75 disabled:cursor-not-allowed disabled:scale-100"
            >
                {copyState === "loading" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                ) : copyState === "success" ? (
                    <Check className="w-5 h-5" />
                ) : copyState === "error" ? (
                    <X className="w-5 h-5" />
                ) : (
                    <Share2 className="w-5 h-5" />
                )}
                {label}
            </Button>
        </div>
    )
}