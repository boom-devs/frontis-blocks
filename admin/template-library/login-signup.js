/**
 * WordPress dependencies
 */
import { useState, useCallback } from "@wordpress/element";
import { ClipLoader } from "react-spinners";

const LoginSignupModal = ({ onClose, onLoginSuccess }) => {
	const [activeTab, setActiveTab] = useState('login');
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
						<h3 className={`fb-auth-tab`}>
							Login
						</h3>
						{/* <button
							className={`fb-auth-tab ${activeTab === 'signup' ? 'active' : ''}`}
							onClick={() => setActiveTab('signup')}
						>
							Free Sign Up
						</button> */}
					</div>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit} className="fb-auth-form">
					{/* {activeTab === 'signup' && (
						<div className="fb-form-row">
							<div className="fb-form-group">
								<label htmlFor="firstName">First Name</label>
								<div className="fb-input-wrapper">
									<svg className="fb-input-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path d="M14.1663 7.08329C14.1663 4.78211 12.3008 2.91663 9.99967 2.91663C7.69849 2.91663 5.83301 4.78211 5.83301 7.08329C5.83301 9.38446 7.69849 11.25 9.99967 11.25C12.3008 11.25 14.1663 9.38446 14.1663 7.08329Z" stroke="#6A758E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M15.8337 17.0833C15.8337 13.8617 13.222 11.25 10.0003 11.25C6.77867 11.25 4.16699 13.8617 4.16699 17.0833" stroke="#6A758E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
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
									<svg className="fb-input-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path d="M14.1663 7.08329C14.1663 4.78211 12.3008 2.91663 9.99967 2.91663C7.69849 2.91663 5.83301 4.78211 5.83301 7.08329C5.83301 9.38446 7.69849 11.25 9.99967 11.25C12.3008 11.25 14.1663 9.38446 14.1663 7.08329Z" stroke="#6A758E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
										<path d="M15.8337 17.0833C15.8337 13.8617 13.222 11.25 10.0003 11.25C6.77867 11.25 4.16699 13.8617 4.16699 17.0833" stroke="#6A758E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
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
					)} */}

					<div className="fb-form-group">
						<label htmlFor="email">User Name or Email</label>
						<div className="fb-input-wrapper">
							<svg className="fb-input-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
								<path d="M1.66699 5L7.42784 8.26414C9.55166 9.4675 10.449 9.4675 12.5728 8.26414L18.3337 5" stroke="#6A758E" stroke-width="1.25" stroke-linejoin="round" />
								<path d="M1.68013 11.2296C1.73461 13.7843 1.76185 15.0615 2.70446 16.0078C3.64706 16.954 4.95893 16.9869 7.58268 17.0528C9.19974 17.0935 10.8009 17.0935 12.418 17.0528C15.0417 16.9869 16.3536 16.954 17.2962 16.0078C18.2388 15.0615 18.2661 13.7843 18.3205 11.2296C18.3381 10.4082 18.3381 9.59171 18.3205 8.77029C18.2661 6.21568 18.2388 4.93837 17.2962 3.99218C16.3536 3.04599 15.0417 3.01303 12.418 2.9471C10.8009 2.90647 9.19974 2.90647 7.58268 2.94709C4.95893 3.01301 3.64706 3.04597 2.70445 3.99217C1.76184 4.93836 1.73461 6.21567 1.68013 8.77029C1.66261 9.59171 1.66262 10.4082 1.68013 11.2296Z" stroke="#6A758E" stroke-width="1.25" stroke-linejoin="round" />
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
								<svg className="fb-input-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M4.16699 12.5C4.16699 9.27829 6.77867 6.66663 10.0003 6.66663C13.222 6.66663 15.8337 9.27829 15.8337 12.5C15.8337 15.7216 13.222 18.3333 10.0003 18.3333C6.77867 18.3333 4.16699 15.7216 4.16699 12.5Z" stroke="#6A758E" stroke-width="1.25" />
									<path d="M6.25 7.91663V5.41663C6.25 3.34556 7.92893 1.66663 10 1.66663C11.3002 1.66663 12.4458 2.3283 13.1185 3.33329" stroke="#6A758E" stroke-width="1.25" stroke-linecap="round" />
									<path d="M10 13.3333V11.6666" stroke="#6A758E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
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

						{/* {activeTab === 'signup' && (
							<div className="fb-form-group">
								<label htmlFor="confirmPassword">Confirm Password</label>
								<div className="fb-input-wrapper">
									<svg className="fb-input-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
										<path d="M4.16699 12.5C4.16699 9.27829 6.77867 6.66663 10.0003 6.66663C13.222 6.66663 15.8337 9.27829 15.8337 12.5C15.8337 15.7216 13.222 18.3333 10.0003 18.3333C6.77867 18.3333 4.16699 15.7216 4.16699 12.5Z" stroke="#6A758E" stroke-width="1.25" />
										<path d="M6.25 7.91663V5.41663C6.25 3.34556 7.92893 1.66663 10 1.66663C11.3002 1.66663 12.4458 2.3283 13.1185 3.33329" stroke="#6A758E" stroke-width="1.25" stroke-linecap="round" />
										<path d="M10 13.3333V11.6666" stroke="#6A758E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
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
						)} */}
					</div>

					{/* {activeTab === 'signup' && (
						<div className="fb-checkbox-group">
							<div className="fb-checkbox-item">
								<input
									type="checkbox"
									id="agreeTerms"
									checked={agreedToTerms}
									onChange={(e) => setAgreedToTerms(e.target.checked)}
								/>
								<label htmlFor="agreeTerms">
									I agree to the Frontis <a href="#" className="fb-link">Terms of Service</a>
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
									I agree to the Frontis <a href="#" className="fb-link">Privacy Policy</a>
								</label>
							</div>
						</div>
					)} */}

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
							<span>{activeTab === 'login' ? 'Login' : 'Sign Up'}</span>
						)}
					</button>

					{/* <div className="fb-auth-divider">
						<span>Or</span>
					</div> */}

					{/* <button type="button" className="fb-connect-api-btn">
						Connect via API
					</button> */}
				</form>

				{/* Close button */}
				<button className="fb-auth-close" onClick={onClose}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default LoginSignupModal;