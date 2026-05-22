export default function GlassCard({ as: Component = 'div', className = '', contentClassName = 'relative z-10', children }) {
  return (
    <Component className={`liquid-glass relative overflow-hidden ${className}`}>
      <div className={contentClassName}>{children}</div>
    </Component>
  )
}
