import {
    Atom, Radio,
    Tv, Home, FileText,
    LucideIcon,
    Trophy,
    BetweenVerticalStart,
    Tornado
} from "lucide-react"

export type NAV_ITEMS_TYPE = { href: string, label: string, icon: LucideIcon }
export const NAV_ITEMS: NAV_ITEMS_TYPE[] = [
    { href: "/", label: "home", icon: Home },
    { href: "/react", label: "react", icon: Atom },
    { href: "/radiation", label: "radiation", icon: Radio },
    { href: "/disasters", label: "disasters", icon: Tornado },
    { href: "/comparison", label: "comparison", icon: BetweenVerticalStart },
    { href: "/media", label: "media", icon: Tv },
    { href: "/references", label: "references", icon: FileText },
    { href: "/challenges", label: "challenges", icon: Trophy },
]
export type NavItem = (typeof NAV_ITEMS)[number]
