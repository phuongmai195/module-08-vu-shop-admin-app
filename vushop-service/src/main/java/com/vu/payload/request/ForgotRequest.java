package com.vu.payload.request;

import javax.validation.constraints.NotBlank;

public class ForgotRequest {

	@NotBlank
    private String usernameOrEmail;

    @NotBlank
    private String passwordNew;
    
    @NotBlank
    private String passwordReplace;
    
    @NotBlank
    private String numberPhone;

	public String getUsernameOrEmail() {
		return usernameOrEmail;
	}

	public void setUsernameOrEmail(String usernameOrEmail) {
		this.usernameOrEmail = usernameOrEmail;
	}

	public String getPasswordNew() {
		return passwordNew;
	}

	public void setPasswordNew(String passwordNew) {
		this.passwordNew = passwordNew;
	}

	public String getPasswordReplace() {
		return passwordReplace;
	}

	public void setPasswordReplace(String passwordReplace) {
		this.passwordReplace = passwordReplace;
	}

	public String getNumberPhone() {
		return numberPhone;
	}

	public void setNumberPhone(String numberPhone) {
		this.numberPhone = numberPhone;
	}

 
}
