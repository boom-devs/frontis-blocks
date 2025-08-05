export const isInvalid = ( block ) => {
	const { name, isValid, validationIssues } = block;

	if ( ! name ) {
		return false;
	}

	if ( isValid || ! validationIssues.length ) {
		return false;
	}

	return true;
};
