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
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white shadow-sm bg-gradient-to-br from-[#D4AF37] to-[#B08832] transition-all duration-300 ease-out hover:from-emerald-500 hover:to-emerald-600 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${className}`}
    >
      {label}
    </a>
  );
}

export default CTAButton;
