export const calculateStabilityFun = (neutrons: number, rods: number) => {
    const effectiveNeutrons = neutrons * (1 - rods / 100)
    const optimalRange = effectiveNeutrons >= 20 && effectiveNeutrons <= 60

    if (optimalRange) {
        return Math.min(100, 70 + (60 - Math.abs(effectiveNeutrons - 40)))
    } else if (effectiveNeutrons < 20) {
        return Math.max(30, 50 + effectiveNeutrons)
    } else {
        return Math.max(0, 100 - (effectiveNeutrons - 60) * 2)
    }
}