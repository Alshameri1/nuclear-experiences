interface ControlSliderProps {
    label: string
    value: number
    onChange: (value: number) => void
    color: "cyan" | "cyan"
    icon: React.ReactNode
}

export function ControlSlider({ label, value, onChange, color, icon }: ControlSliderProps) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                {icon}
                <span className="text-sm font-medium">{label}</span>
            </div>

            <div className="relative flex flex-col gap-1">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className={`w-full h-3 rounded-full appearance-none cursor-pointer
                        [&::-webkit-slider-thumb]:appearance-none
                        [&::-webkit-slider-thumb]:w-6
                        [&::-webkit-slider-thumb]:h-6
                        [&::-webkit-slider-thumb]:rounded-full
                        [&::-webkit-slider-thumb]:cursor-pointer
                        [&::-webkit-slider-thumb]:transition-transform
                        [&::-webkit-slider-thumb]:hover:scale-110
                        ${
                            color === "cyan"
                                ? "bg-nuclear-dark [&::-webkit-slider-thumb]:bg-nuclear-cyan [&::-webkit-slider-thumb]:shadow-[0_0_10px_var(--nuclear-cyan)]"
                                : "bg-nuclear-dark [&::-webkit-slider-thumb]:bg-nuclear-cyan [&::-webkit-slider-thumb]:shadow-[0_0_10px_var(--nuclear-cyan)]"
                        }
                    `}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0%</span>
                    <span
                        className={`font-mono ${
                            color === "cyan" ? "text-nuclear-cyan" : "text-nuclear-cyan"
                        }`}
                    >
                        {value}%
                    </span>
                    <span>100%</span>
                </div>
            </div>
        </div>
    )
}