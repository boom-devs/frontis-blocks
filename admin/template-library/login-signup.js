/**
 * WordPress dependencies
 */
import { useState, useCallback } from "@wordpress/element";
import { ClipLoader } from "react-spinners";

const LoginSignupModal = ({ onClose, onLoginSuccess }) => {
	const [activeTab, setActiveTab] = useState('signup'); 
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		firstName: '',
		lastName: ''
	});
	const [errors, setErrors] = useState({});
	const [agreedToTerms, setAgreedToTerms] = useState(false);
	const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

	const handleInputChange = useCallback((e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors(prev => ({
				...prev,
				[name]: ''
			}));
		}
	}, [errors]);

	const validateForm = useCallback(() => {
		const newErrors = {};

		if (!formData.email) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email';
		}

		if (!formData.password) {
			newErrors.password = 'Password is required';
		} else if (formData.password.length < 6) {
			newErrors.password = 'Password must be at least 6 characters';
		}

		if (activeTab === 'signup') {
			if (!formData.firstName) {
				newErrors.firstName = 'First name is required';
			}
			if (!formData.lastName) {
				newErrors.lastName = 'Last name is required';
			}
			if (!formData.confirmPassword) {
				newErrors.confirmPassword = 'Please confirm your password';
			} else if (formData.password !== formData.confirmPassword) {
				newErrors.confirmPassword = 'Passwords do not match';
			}
			if (!agreedToTerms) {
				newErrors.terms = 'You must agree to the Terms of Service';
			}
			if (!agreedToPrivacy) {
				newErrors.privacy = 'You must agree to the Privacy Policy';
			}
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	}, [formData, activeTab, agreedToTerms, agreedToPrivacy]);

	const handleSubmit = useCallback(async (e) => {
		e.preventDefault();
		
		if (!validateForm()) return;

		setIsLoading(true);
		
		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 2000));
			
			// Mock successful login/signup
			console.log(`${activeTab} successful:`, formData);
			
			// Call success callback
			onLoginSuccess();
			
		} catch (error) {
			console.error(`${activeTab} failed:`, error);
			setErrors({ submit: `${activeTab} failed. Please try again.` });
		} finally {
			setIsLoading(false);
		}
	}, [formData, activeTab, validateForm, onLoginSuccess]);

	const handleOverlayClick = useCallback((e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}, [onClose]);

	return (
		<div className="fb-auth-modal" onClick={handleOverlayClick}>
			<div className="fb-auth-container">
				{/* Header with tabs */}
				<div className="fb-auth-header">
					<div className="fb-auth-tabs">
						<button 
							className={`fb-auth-tab ${activeTab === 'login' ? 'active' : ''}`}
							onClick={() => setActiveTab('login')}
						>
							Sign In
						</button>
						<button 
							className={`fb-auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
							onClick={() => setActiveTab('signup')}
						>
							Free Sign Up
						</button>
					</div>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit} className="fb-auth-form">
					{activeTab === 'signup' && (
						<div className="fb-form-row">
							<div className="fb-form-group">
								<label htmlFor="firstName">First Name</label>
								<div className="fb-input-wrapper">
									<svg className="fb-input-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z" fill="#9CA3AF"/>
										<path d="M8 10C3.58172 10 0 13.5817 0 18H16C16 13.5817 12.4183 10 8 10Z" fill="#9CA3AF"/>
									</svg>
									<input
										type="text"
										id="firstName"
										name="firstName"
										value={formData.firstName}
										onChange={handleInputChange}
										className={errors.firstName ? 'error' : ''}
										placeholder="Name"
									/>
								</div>
								{errors.firstName && <span className="fb-error-message">{errors.firstName}</span>}
							</div>

							<div className="fb-form-group">
								<label htmlFor="lastName">Last Name</label>
								<div className="fb-input-wrapper">
									<svg className="fb-input-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z" fill="#9CA3AF"/>
										<path d="M8 10C3.58172 10 0 13.5817 0 18H16C16 13.5817 12.4183 10 8 10Z" fill="#9CA3AF"/>
									</svg>
									<input
										type="text"
										id="lastName"
										name="lastName"
										value={formData.lastName}
										onChange={handleInputChange}
										className={errors.lastName ? 'error' : ''}
										placeholder="Name"
									/>
								</div>
								{errors.lastName && <span className="fb-error-message">{errors.lastName}</span>}
							</div>
						</div>
					)}

					<div className="fb-form-group">
						<label htmlFor="email">Email Address</label>
						<div className="fb-input-wrapper">
							<svg className="fb-input-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M2.66675 3.33337H13.3334C14.0668 3.33337 14.6668 3.93337 14.6668 4.66671V11.3334C14.6668 12.0667 14.0668 12.6667 13.3334 12.6667H2.66675C1.93341 12.6667 1.33341 12.0667 1.33341 11.3334V4.66671C1.33341 3.93337 1.93341 3.33337 2.66675 3.33337Z" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
								<path d="M14.6668 4.66663L8.00008 8.66663L1.33341 4.66663" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								className={errors.email ? 'error' : ''}
								placeholder="Enter Your Email Address"
							/>
						</div>
						{errors.email && <span className="fb-error-message">{errors.email}</span>}
					</div>

					<div className={activeTab === 'signup' ? 'fb-form-row' : ''}>
						<div className="fb-form-group">
							<label htmlFor="password">Password</label>
							<div className="fb-input-wrapper">
								<svg className="fb-input-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path d="M12.6668 7.33337H3.33341C2.59703 7.33337 2.00008 7.93033 2.00008 8.66671V13.3334C2.00008 14.0698 2.59703 14.6667 3.33341 14.6667H12.6668C13.4031 14.6667 14.0001 14.0698 14.0001 13.3334V8.66671C14.0001 7.93033 13.4031 7.33337 12.6668 7.33337Z" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
									<path d="M4.66675 7.33337V4.66671C4.66675 3.78265 5.01794 2.93481 5.64306 2.30968C6.26818 1.68456 7.11603 1.33337 8.00008 1.33337C8.88414 1.33337 9.73198 1.68456 10.3571 2.30968C10.9822 2.93481 11.3334 3.78265 11.3334 4.66671V7.33337" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
								<input
									type="password"
									id="password"
									name="password"
									value={formData.password}
									onChange={handleInputChange}
									className={errors.password ? 'error' : ''}
									placeholder="Password"
								/>
							</div>
							{errors.password && <span className="fb-error-message">{errors.password}</span>}
						</div>

						{activeTab === 'signup' && (
							<div className="fb-form-group">
								<label htmlFor="confirmPassword">Confirm Password</label>
								<div className="fb-input-wrapper">
									<svg className="fb-input-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M12.6668 7.33337H3.33341C2.59703 7.33337 2.00008 7.93033 2.00008 8.66671V13.3334C2.00008 14.0698 2.59703 14.6667 3.33341 14.6667H12.6668C13.4031 14.6667 14.0001 14.0698 14.0001 13.3334V8.66671C14.0001 7.93033 13.4031 7.33337 12.6668 7.33337Z" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
										<path d="M4.66675 7.33337V4.66671C4.66675 3.78265 5.01794 2.93481 5.64306 2.30968C6.26818 1.68456 7.11603 1.33337 8.00008 1.33337C8.88414 1.33337 9.73198 1.68456 10.3571 2.30968C10.9822 2.93481 11.3334 3.78265 11.3334 4.66671V7.33337" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
									<input
										type="password"
										id="confirmPassword"
										name="confirmPassword"
										value={formData.confirmPassword}
										onChange={handleInputChange}
										className={errors.confirmPassword ? 'error' : ''}
										placeholder="Confirm Password"
									/>
								</div>
								{errors.confirmPassword && <span className="fb-error-message">{errors.confirmPassword}</span>}
							</div>
						)}
					</div>

					{activeTab === 'signup' && (
						<div className="fb-checkbox-group">
							<div className="fb-checkbox-item">
								<input
									type="checkbox"
									id="agreeTerms"
									checked={agreedToTerms}
									onChange={(e) => setAgreedToTerms(e.target.checked)}
								/>
								<label htmlFor="agreeTerms">
									I agree to the Templately <a href="#" className="fb-link">Terms of Service</a>
								</label>
							</div>
							<div className="fb-checkbox-item">
								<input
									type="checkbox"
									id="agreePrivacy"
									checked={agreedToPrivacy}
									onChange={(e) => setAgreedToPrivacy(e.target.checked)}
								/>
								<label htmlFor="agreePrivacy">
									I agree to the Templately <a href="#" className="fb-link">Privacy Policy</a>
								</label>
							</div>
						</div>
					)}

					{errors.submit && (
						<div className="fb-error-message fb-submit-error">{errors.submit}</div>
					)}

					<button 
						type="submit" 
						className={`fb-auth-submit-btn ${isLoading ? 'loading' : ''}`}
						disabled={isLoading}
					>
						{isLoading ? (
							<>
								<ClipLoader color="#fff" size={16} />
								<span>{activeTab === 'login' ? 'Signing In...' : 'Signing Up...'}</span>
							</>
						) : (
							<span>{activeTab === 'login' ? 'Sign In' : 'Sign Up'}</span>
						)}
					</button>

					<div className="fb-auth-divider">
						<span>Or</span>
					</div>

					<button type="button" className="fb-connect-api-btn">
						Connect via API
					</button>
				</form>

				{/* Close button */}
				<button className="fb-auth-close" onClick={onClose}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default LoginSignupModal;