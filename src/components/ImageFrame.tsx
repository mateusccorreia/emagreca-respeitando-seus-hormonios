type ImageFrameProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  variant?: 'drop' | 'soft' | 'leaf';
};

export function ImageFrame({
  src,
  alt,
  className = '',
  loading = 'lazy',
  variant = 'drop',
}: ImageFrameProps) {
  const shapeStyles: Record<'drop' | 'soft' | 'leaf', React.CSSProperties> = {
    drop: {
      borderRadius: '58% 48% 30% 70% / 42% 42% 64% 68%',
    },
    soft: {
      borderRadius: '28px',
    },
    leaf: {
      borderRadius: '0px 80px 0px 80px',
    },
  };

  return (
    <div
      className={`relative overflow-hidden bg-white/70 border border-stone-200 shadow-sm backdrop-blur-sm transition duration-200 hover:shadow-md hover:-translate-y-0.5 ${className}`}
      style={shapeStyles[variant]}
    >
      <img src={src} alt={alt} loading={loading} className="h-full w-full object-cover" />
    </div>
  );
}

export default ImageFrame;
