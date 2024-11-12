export default function LayoutGrid({data, index}) {
	const src = data.fb_featured_image_src.medium[0];
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
                    <h3>{data.title.rendered}</h3>
                    {/*<p dangerouslySetInnerHTML={{ __html: excerpt }} />*/}
                </div>
            </div>
        </>
    )
}
