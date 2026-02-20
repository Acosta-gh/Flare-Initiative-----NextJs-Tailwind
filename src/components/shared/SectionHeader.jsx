export default function SectionHeader({ title, className = "" }) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 font-brand-heading">
        {title}
      </h2>
      <div className="w-20 h-1 bg-brand-orange mx-auto rounded-full"></div>
    </div>
  );
}