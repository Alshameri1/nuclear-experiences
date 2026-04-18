import { motion } from 'framer-motion'

// Fission Visualization Component
export function FissionVisualization({ isAnimating }: { isAnimating: boolean }) {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
                {/* Initial Nucleus */}
                <motion.div
                    className="relative"
                    animate={isAnimating ? { scale: [1, 1.3, 0], opacity: [1, 1, 0] } : {}}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                    <div className="w-20 h-20 rounded-full bg-nuclear-cyan shadow-[0_0_30px_var(--nuclear-cyan)] flex items-center justify-center">
                        <span className="text-xs font-bold">U-235</span>
                    </div>
                    {/* Incoming Neutron */}
                    <motion.div
                        className="absolute -right-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-nuclear-blue shadow-[0_0_10px_var(--nuclear-blue)]"
                        animate={isAnimating ? {
                            x: [0, 40],
                            opacity: [1, 0],
                        } : {}}
                        transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                    />
                </motion.div>
                {/* Split Nuclei */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    initial={{ opacity: 0 }}
                    animate={isAnimating ? {opacity: [0, 0, 1, 1, 0]} : { opacity: 0 }}
                    transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.6, 0.9, 1] }}
                >
                    {/* Fragment 1 */}
                    <motion.div
                        className="absolute w-10 h-10 rounded-full bg-nuclear-cyan/70 shadow-[0_0_15px_var(--nuclear-cyan)]"
                        animate={isAnimating ? { x: [-20, -60], y: [-10, -40] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.5 }}
                    />

                    {/* Fragment 2 */}
                    <motion.div className="absolute w-10 h-10 rounded-full bg-nuclear-cyan/70 shadow-[0_0_15px_var(--nuclear-cyan)]"
                        animate={isAnimating ? { x: [20, 60], y: [10, 40] } : {}}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.5 }}
                    />

                  {/* Released Neutrons */}
                    {[0, 120, 240].map((angle, i) => (
                        <motion.div key={i} className="absolute w-3 h-3 rounded-full bg-nuclear-blue shadow-[0_0_8px_var(--nuclear-blue)]"
                            animate={isAnimating ? {
                                x: [0, Math.cos((angle * Math.PI) / 180) * 80],
                                y: [0, Math.sin((angle * Math.PI) / 180) * 80],
                                opacity: [0, 1, 0],
                            } : {}}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.5, delay: i * 0.1 }}
                        />
                    ))}
                </motion.div>
                
                {/* Energy waves */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-nuclear-orange/50"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isAnimating ? { scale: [0, 0, 2, 3], opacity: [0, 0, 0.5, 0] } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 0.7, 1] }}
                />
            </div>
        </div>
    )
}
