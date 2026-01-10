type CTAButtonProps = {
  href?: string;
  label?: string;
  className?: string;
};

export function CTAButton({
  href = '#checkout',
  label = '👉 Quero comprar o e-book agora',
  className = '',
}: CTAButtonProps) {
  return (
    <a
      href={href}
      className={`btn-primary inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-white text-base shadow-lg 
        bg-gradient-to-r from-emerald-500 via-emerald-500 to-emerald-600 
        hover:from-emerald-400 hover:via-emerald-500 hover:to-emerald-600
        active:scale-[0.98] 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-500
        ${className}`}
    >
      {label}
    </a>
  );
}

export default CTAButton;
