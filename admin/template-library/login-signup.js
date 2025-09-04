/**
 * WordPress dependencies
 */
import { useState, useEffect, useCallback } from "@wordpress/element";
import { useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";

const LoginSignupModal = ({ onLoginSuccess = () => {} }) => {
	const [activeTab, setActiveTab] = useState("login");
	const [isLoading, setIsLoading] = useState(false);
	const [agreedToTerms, setAgreedToTerms] = useState(false);
	const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		watch,
		clearErrors,
		} = useForm({
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
			first_name: "",
			last_name: "",
			remember_me: false,
		},
	});

	function generateValidationKey() {
		const timestamp = Math.floor(Date.now() / 1000); // Current Unix timestamp in seconds
		const randomBytes = Array.from(crypto.getRandomValues(new Uint8Array(16)))
			.map((b) => b.toString(16).padStart(2, "0"))
			.join(""); // 32 hex chars
		return `${randomBytes}${timestamp.toString(16)}`;
	}

	function getDeviceType() {
		const ua = navigator.userAgent;
		if (/windows phone/i.test(ua)) return "Windows Phone";
		if (/android/i.test(ua)) return "Android";
		if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return "iOS";
		if (/Macintosh/i.test(ua)) return "Mac";
		if (/Windows/i.test(ua)) return "Wisndow";
		if (/Linux/i.test(ua)) return "Linux";
		return "Unknown Device";
	}

	const handleSignupSignin = (tab) => {
		setActiveTab(tab);
		clearErrors();
	};
	const onSubmit = useCallback(
		async (data) => {
			// Validate terms and privacy for signup
			if (activeTab === "signup") {
				if (!agreedToTerms) {
					setError("terms", { message: "You must agree to the Terms of Service" });
					return;
				}
				if (!agreedToPrivacy) {
					setError("privacy", { message: "You must agree to the Privacy Policy" });
					return;
				}
			}

			const validationKey = generateValidationKey();
			const apiBase = "https://frontis-sync.boomdevshub.com/wp-json";
			const deviceName = getDeviceType();
			setIsLoading(true);

			try {
				const endpoint = activeTab === "signup" ? "sign-up" : "login";
				const body =
					activeTab === "signup"
						? {
							email: data.email,
							first_name: data.first_name,
							last_name: data.last_name,
							password: data.password,
							device_name: deviceName,
						}
						: {
							email: data.email,
							password: data.password,
						};

				const response = await fetch(`${apiBase}/frontis-sync/v1/${endpoint}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						// "Authorization": `Bearer nbcnrqfyorftyzpiojzfnjbidchpgnawnifdbnhhbxbuedphusbaunvecxtvvjvnrehznbmccyanndwrjloncuhobjtfbkcazfjtbbvtsuvgiokjknvgrwdwfgfsonbw`,
					},
					body: JSON.stringify(body),
				});

				const responseData = await response.json();

				if (!response.ok) {
					const errorMessage = responseData.message || "Something went wrong";
					if (responseData.code === "invalid_username") {
						setError("email", { message: errorMessage });
					} else if (responseData.code === "invalid_password") {
						setError("password", { message: errorMessage });
					} else if (responseData.code === "email_already_registered") {
						setError("email", { message: errorMessage });
					} else {
						setError("submit", { message: errorMessage });
					}
					throw new Error(errorMessage);
				}

				// Success case
				if (responseData.status) {
					const responseUserData = {
						'name': responseData.user.name,
						'email': responseData.user.email,
						'access_token': responseData.access_token,
						'refresh_token': responseData.refresh_token,
					}

					localStorage.setItem("userData", JSON.stringify(responseUserData));
					onLoginSuccess(responseData);
				} else {
					setIsLoading(false);
					throw new Error("Something went wrong try again letter");
				}
			} catch (error) {
				console.error(`${activeTab} failed:`, error);
				setError("submit", { message: error.message || "Something went wrong" });
			} finally {
				setIsLoading(false);
			}
		},
		[activeTab, agreedToTerms, agreedToPrivacy, onLoginSuccess, setError]
	);

	return (
		<div className="fb-auth-modal">
			<div className="fb-auth-container">
				{/* Header with tabs */}
				<div className="fb-auth-header">
					<div className="fb-auth-tabs">
						<h3 className="fb-auth-tab-title">
							{activeTab === "signup" ? "Create an Account" : "Sign In"}
						</h3>
						<p className="fb-auth-tab-description">Welcome back! Please enter your details</p>
					</div>
				</div>

				{/* Form */}
				<form onSubmit={handleSubmit(onSubmit)} className="fb-auth-form">
					{activeTab === "signup" && (
						<div className="fb-form-row">
							<div className="fb-form-group">
								<label htmlFor="first_name">First Name</label>
								<div className="fb-input-wrapper">
									<svg
										className="fb-input-icon"
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											d="M14.1663 7.08329C14.1663 4.78211 12.3008 2.91663 9.99967 2.91663C7.69849 2.91663 5.83301 4.78211 5.83301 7.08329C5.83301 9.38446 7.69849 11.25 9.99967 11.25C12.3008 11.25 14.1663 9.38446 14.1663 7.08329Z"
											stroke="#6A758E"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M15.8337 17.0833C15.8337 13.8617 13.222 11.25 10.0003 11.25C6.77867 11.25 4.16699 13.8617 4.16699 17.0833"
											stroke="#6A758E"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<input
										type="text"
										id="first_name"
										{...register("first_name", {
											required: activeTab === "signup" ? "First name is required" : false,
										})}
										className={errors.first_name ? "error" : ""}
										placeholder="First Name"
									/>
								</div>
								{errors.first_name && (
									<span className="fb-error-message">{errors.first_name.message}</span>
								)}
							</div>

							<div className="fb-form-group">
								<label htmlFor="last_name">Last Name</label>
								<div className="fb-input-wrapper">
									<svg
										className="fb-input-icon"
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											d="M14.1663 7.08329C14.1663 4.78211 12.3008 2.91663 9.99967 2.91663C7.69849 2.91663 5.83301 4.78211 5.83301 7.08329C5.83301 9.38446 7.69849 11.25 9.99967 11.25C12.3008 11.25 14.1663 9.38446 14.1663 7.08329Z"
											stroke="#6A758E"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M15.8337 17.0833C15.8337 13.8617 13.222 11.25 10.0003 11.25C6.77867 11.25 4.16699 13.8617 4.16699 17.0833"
											stroke="#6A758E"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<input
										type="text"
										id="last_name"
										{...register("last_name", {
											required: activeTab === "signup" ? "Last name is required" : false,
										})}
										className={errors.last_name ? "error" : ""}
										placeholder="Last Name"
									/>
								</div>
								{errors.last_name && (
									<span className="fb-error-message">{errors.last_name.message}</span>
								)}
							</div>
						</div>
					)}

					<div className="fb-form-group">
						<label htmlFor="email">{activeTab === "login" ? "Email or Username" : "Email"}</label>
						<div className="fb-input-wrapper">
							<svg
								className="fb-input-icon"
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
							>
								<path
									d="M1.66699 5L7.42784 8.26414C9.55166 9.4675 10.449 9.4675 12.5728 8.26414L18.3337 5"
									stroke="#6A758E"
									strokeWidth="1.25"
									strokeLinejoin="round"
								/>
								<path
									d="M1.68013 11.2296C1.73461 13.7843 1.76185 15.0615 2.70446 16.0078C3.64706 16.954 4.95893 16.9869 7.58268 17.0528C9.19974 17.0935 10.8009 17.0935 12.418 17.0528C15.0417 16.9869 16.3536 16.954 17.2962 16.0078C18.2388 15.0615 18.2661 13.7843 18.3205 11.2296C18.3381 10.4082 18.3381 9.59171 18.3205 8.77029C18.2661 6.21568 18.2388 4.93837 17.2962 3.99218C16.3536 3.04599 15.0417 3.01303 12.418 2.9471C10.8009 2.90647 9.19974 2.90647 7.58268 2.94709C4.95893 3.01301 3.64706 3.04597 2.70445 3.99217C1.76184 4.93836 1.73461 6.21567 1.68013 8.77029C1.66261 9.59171 1.66262 10.4082 1.68013 11.2296Z"
									stroke="#6A758E"
									strokeWidth="1.25"
									strokeLinejoin="round"
								/>
							</svg>
							<input
								type="text"
								id="email"
								{...register("email", {
									required: "Email is required",
									pattern: {
										value: /\S+@\S+\.\S+/,
										message: "Please enter a valid email",
									},
								})}
								className={errors.email ? "error" : ""}
								placeholder={activeTab === "login" ? "Email or Username" : "Email Address"}
							/>
						</div>
						{errors.email && <span className="fb-error-message">{errors.email.message}</span>}
					</div>

					<div className={activeTab === "signup" ? "fb-form-row" : ""}>
						<div className="fb-form-group">
							<label htmlFor="password">Password</label>
							<div className="fb-input-wrapper">
								<svg
									className="fb-input-icon"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
								>
									<path
										d="M4.16699 12.5C4.16699 9.27829 6.77867 6.66663 10.0003 6.66663C13.222 6.66663 15.8337 9.27829 15.8337 12.5C15.8337 15.7216 13.222 18.3333 10.0003 18.3333C6.77867 18.3333 4.16699 15.7216 4.16699 12.5Z"
										stroke="#6A758E"
										strokeWidth="1.25"
									/>
									<path
										d="M6.25 7.91663V5.41663C6.25 3.34556 7.92893 1.66663 10 1.66663C11.3002 1.66663 12.4458 2.3283 13.1185 3.33329"
										stroke="#6A758E"
										strokeWidth="1.25"
										strokeLinecap="round"
									/>
									<path
										d="M10 13.3333V11.6666"
										stroke="#6A758E"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<input
									type="password"
									id="password"
									{...register("password", {
										required: "Password is required",
										minLength: {
											value: 6,
											message: "Password must be at least 6 characters",
										},
									})}
									className={errors.password ? "error" : ""}
									placeholder="Password"
								/>
							</div>
							{errors.password && (
								<span className="fb-error-message">{errors.password.message}</span>
							)}
						</div>

						{activeTab === "signup" && (
							<div className="fb-form-group">
								<label htmlFor="confirmPassword">Confirm Password</label>
								<div className="fb-input-wrapper">
									<svg
										className="fb-input-icon"
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none"
									>
										<path
											d="M4.16699 12.5C4.16699 9.27829 6.77867 6.66663 10.0003 6.66663C13.222 6.66663 15.8337 9.27829 15.8337 12.5C15.8337 15.7216 13.222 18.3333 10.0003 18.3333C6.77867 18.3333 4.16699 15.7216 4.16699 12.5Z"
											stroke="#6A758E"
											strokeWidth="1.25"
										/>
										<path
											d="M6.25 7.91663V5.41663C6.25 3.34556 7.92893 1.66663 10 1.66663C11.3002 1.66663 12.4458 2.3283 13.1185 3.33329"
											stroke="#6A758E"
											strokeWidth="1.25"
											strokeLinecap="round"
										/>
										<path
											d="M10 13.3333V11.6666"
											stroke="#6A758E"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									<input
										type="password"
										id="confirmPassword"
										{...register("confirmPassword", {
											required: activeTab === "signup" ? "Please confirm your password" : false,
											validate: (value) =>
												activeTab === "signup" && value !== watch("password")
													? "Passwords do not match"
													: true,
										})}
										className={errors.confirmPassword ? "error" : ""}
										placeholder="Confirm Password"
									/>
								</div>
								{errors.confirmPassword && (
									<span className="fb-error-message">{errors.confirmPassword.message}</span>
								)}
							</div>
						)}
					</div>

					{activeTab === "signup" ? (
						<div className="fb-checkbox-group fb-checkbox-group-signup">
							<div className="fb-checkbox-item">
								<input
									type="checkbox"
									id="agreeTerms"
									checked={agreedToTerms}
									required
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
									required
									onChange={(e) => setAgreedToPrivacy(e.target.checked)}
								/>
								<label htmlFor="agreePrivacy">
									I agree to the Frontis <a href="#" className="fb-link">Privacy Policy</a>
								</label>
							</div>
							{errors.terms && <span className="fb-error-message">{errors.terms.message}</span>}
							{errors.privacy && <span className="fb-error-message">{errors.privacy.message}</span>}
						</div>
					) : (
						<div className="fb-checkbox-group fb-checkbox-group-login">
							<div className="fb-checkbox-item">
								<input
									type="checkbox"
									id="remember_me"
									{...register("remember_me")}
								/>
								<label htmlFor="remember_me">Remember for 30 Days</label>
							</div>
							{/* <div className="fb-checkbox-item">
								<a className="fb-forgot-password">Forgot Password?</a>
							</div> */}
						</div>
					)}

					{errors.submit && (
						<div className="fb-error-message fb-submit-error">{errors.submit.message}</div>
					)}

					<button
						type="submit"
						className={`fb-auth-submit-btn ${isLoading ? "loading" : ""}`}
						// disabled={isLoading}
					>
						{isLoading ? (
							<>
								<ClipLoader color="#fff" size={16} />
								<span>{activeTab === "login" ? "Signing In..." : "Signing Up..."}</span>
							</>
						) : (
							<span>{activeTab === "login" ? "Login" : "Sign Up"}</span>
						)}
					</button>
					{/* 
					<div className="fb-auth-divider">
						<hr />
						<span>OR</span>
					</div> */}
					{/* 
					{activeTab === "login" && (
						<div className="fb-sign-with-api">
							<button className="fb-sign-with-api-btn">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="19"
									viewBox="0 0 18 19"
									fill="none"><path d="M16.3541 8.03113H15.75V8H9V11H13.2386C12.6203 12.7464 10.9586 14 9 14C6.51487 14 4.5 11.9851 4.5 9.5C4.5 7.01487 6.51487 5 9 5C10.1471 5 11.1908 5.43275 11.9854 6.13962L14.1068 4.01825C12.7673 2.76987 10.9755 2 9 2C4.85812 2 1.5 5.35812 1.5 9.5C1.5 13.6419 4.85812 17 9 17C13.1419 17 16.5 13.6419 16.5 9.5C16.5 8.99713 16.4482 8.50625 16.3541 8.03113Z"
									fill="#FBC02D"/><path d="M2.36475 6.00912L4.82887 7.81625C5.49562 6.1655 7.11037 5 9 5C10.1471 5 11.1907 5.43275 11.9854 6.13962L14.1067 4.01825C12.7672 2.76987 10.9755 2 9 2C6.11925 2 3.621 3.62637 2.36475 6.00912Z"
										fill="#E53935"
									/><path d="M8.99999 17C10.9372 17 12.6975 16.2586 14.0284 15.053L11.7071 13.0888C10.9541 13.6591 10.0181 14 8.99999 14C7.04924 14 5.39287 12.7561 4.76887 11.0203L2.32312 12.9046C3.56437 15.3335 6.08512 17 8.99999 17Z"
										fill="#4CAF50"
									/><path d="M16.3541 8.03113L16.3481 8H15.75H9V11H13.2386C12.9416 11.8389 12.402 12.5622 11.706 13.0891L11.7071 13.0884L14.0284 15.0526C13.8641 15.2019 16.5 13.25 16.5 9.5C16.5 8.99713 16.4482 8.50625 16.3541 8.03113Z"
										fill="#1565C0"
									/>
								</svg>
								Sign up with Google
							</button>
							<button className="fb-sign-with-api-btn">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="19"
									height="19"
									viewBox="0 0 19 19"
									fill="none"
								>
									<g clipPath="url(#clip0_14439_2782)">
										<path
											d="M16.5298 13.01C16.1417 13.872 15.9546 14.2573 15.4554 15.0181C14.7565 16.0812 13.7707 17.4087 12.5529 17.4172C11.4687 17.427 11.1889 16.7098 9.71652 16.7225C8.24558 16.7295 7.93902 17.4312 6.85339 17.42C5.63417 17.4087 4.70183 16.2134 4.00292 15.1517C2.04823 12.1747 1.84152 8.68436 3.04948 6.82811C3.90448 5.51186 5.25589 4.73842 6.52573 4.73842C7.81949 4.73842 8.6323 5.44858 9.70105 5.44858C10.7389 5.44858 11.3703 4.73702 12.8665 4.73702C13.9971 4.73702 15.1925 5.35295 16.0475 6.41608C13.2518 7.94889 13.706 11.9412 16.5298 13.01ZM11.7303 3.54874C12.2745 2.84983 12.6879 1.86405 12.5375 0.859985C11.6501 0.920454 10.6123 1.48717 10.0062 2.22124C9.45636 2.89061 9.00073 3.88342 9.17792 4.84389C10.1468 4.87483 11.1495 4.29686 11.7303 3.54874Z"
											fill="black"
										/>
									</g>
									<defs>
										<clipPath id="clip0_14439_2782">
											<rect width="18" height="18" fill="white" transform="translate(0.5 0.5)" />
										</clipPath>
									</defs>
								</svg>
								Sign up with Apple
							</button>
						</div>
					)} */}

					{activeTab === "signup" ? (
						<div className="fb-auth-form-switch">
							Already have an account?{" "}
							<a className="fb-link" onClick={() => handleSignupSignin('login')}>
								Sign In
							</a>
						</div>
					) : (
						<div className="fb-auth-form-switch">
							Don’t have an account?{" "}
							<a className="fb-link" onClick={() => handleSignupSignin('signup')}>
								Sign Up
							</a>
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default LoginSignupModal;