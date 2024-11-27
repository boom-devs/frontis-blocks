export default function LayoutGrid({data, index, postTitleTag, postDescriptionTag}) {
	const src = data.fb_featured_image_src.medium[0];
    let title = data.title.rendered;
	let excerpt = data.fb_post_excerpt;
	return (
        <>
            <div className="fb_post_grid_wrapper">
                <div className="fb_post_grid_image">
                    {src ? (
                        <img src={src} alt="" />
                    ) : (
                        <img src="https://placehold.co/600x400/000000/FFFFFF/png" alt="" />
                    )}
                </div>
                <div className="fb_post_grid_content">
                    {React.createElement(postTitleTag || 'h3', { className: 'fb_post_title' }, title)}
                    {React.createElement(postDescriptionTag || 'p', { className: 'fb_post_desc' }, excerpt)}
                </div>
            </div>
        </>
    )
}
