export default function SectionHeader({
  eyebrow,
  title,
  children,
  align = 'left',
  className = '',
}) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`${alignClass} ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-5">{title}</h2>
      {children ? <div className="mt-6">{children}</div> : null}
    </div>
  )
}
