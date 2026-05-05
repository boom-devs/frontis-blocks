// import { __ } from '@wordpress/i18n';
import {
	ArrowRightIcon,
	CommunityIcon,
	DocumentationIcon,
	RateIcon,
	SupportIcon,
} from "../../icons";
import ProUpgradeCard from "./ProUpgradeCard";
import FAQAccordion from "./FAQAccordion";
import SystemRequirements from "./SystemRequirements";
import VideoBanner from "./VideoBanner";
import IconCard from "./IconCard";

const Dashboard = () => {
	return (
		<div className="fb-blocks-dashboard-container">
			<div className="fb-blocks-dashboard">
				<div className="fb-blocks-dashboard-left">
					{/* {window.frontisBlocksAdmin.isProActive === 'false' && (<ProBanner />)} */}
					<VideoBanner />

					<div className="fb-blocks-dashboard-bottom">
						<div className="fb-blocks-acknowledgement">
							<h2 className="heading-2">
								{__("Resources & Knowledge Base", "frontis-blocks")}
							</h2>
							<p className="p1">
								{__(
									"Discover a wealth of information with our extensive resources and knowledge base. Access detailed articles, guides, FAQs, and troubleshooting tips to help you maximize the potential of plugin.",
									"frontis-blocks",
								)}
							</p>
						</div>
						<div className="fb-blocks-dashboard-icon-card-area">
							<IconCard
								icon={<DocumentationIcon />}
								title="Documentation"
								desc="Documentation provides a comprehensive guide that explains the structure and functionality."
								btnText="Read More"
								btnLink="https://docs.wpmessiah.com/"
								btnIcon={<ArrowRightIcon />}
							/>
							<IconCard
								icon={<CommunityIcon />}
								title="Join The Community"
								desc="Become a part of the community! Connect, share your experiences, ask questions, and get the latest updates."
								btnText="Read More"
								btnLink="https://www.facebook.com/groups/wpmessiah"
								btnIcon={<ArrowRightIcon />}
							/>
							<IconCard
								icon={<RateIcon />}
								title="Rate This Plugin"
								desc="Frontis allows users to provide feedback on their experience with the site or its services."
								btnText="Read More"
								btnLink="https://wordpress.org/support/plugin/frontis-blocks/reviews/"
								btnIcon={<ArrowRightIcon />}
							/>
							<IconCard
								icon={<SupportIcon />}
								title="Support 24/7"
								desc="Frontis invites users to become part of an engaged and interactive group."
								btnText="Read More"
								btnLink="https://support.wpmessiah.com/"
								btnIcon={<ArrowRightIcon />}
							/>
						</div>

						{/* Accordion section */}
						<div className="fb-blocks-accordion-area">
							<h2 className="heading-2">
								{__("Frequently Asked Questions", "frontis-blocks")}
							</h2>
							<p className="p1">
								{__(
									"Find answers to common queries. Our FAQ section covers everything from installation to troubleshooting, ensuring you have the information you need to make the most of our plugin.",
									"frontis-blocks",
								)}
							</p>
						</div>
						<FAQAccordion />
					</div>
				</div>
				<div className="fb-blocks-dashboard-right">
					<SystemRequirements />
					<div className="fb-blocks-dashboard-right-bottom">
						<ProUpgradeCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
