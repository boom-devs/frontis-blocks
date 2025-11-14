

const TemplateLibraryCardsSkeleton = ({ count = 8 }) => {
  return (
    <div className="fb-template-library-cards fb-skeleton-cards">
      {Array.from({ length: count }).map((_, i) => (
        <div className="fb-skeleton-card" key={i}>
          <div className="fb-skeleton-card-img shimmer" />
          <div className="fb-skeleton-card-content">
            <div className="fb-skeleton-line short shimmer" />
            <div className="fb-skeleton-line shimmer" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TemplateLibraryCardsSkeleton;
