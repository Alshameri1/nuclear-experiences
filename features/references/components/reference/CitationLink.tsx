interface CitationLinkProps {
  href: string
  className?: string
}

export function CitationLink({ href, className }: CitationLinkProps) {
  return (
    <div className={className}>
      <span className="text-sm font-medium text-inherit">{href.replace("https://", "")}</span>
    </div>
  )
}
