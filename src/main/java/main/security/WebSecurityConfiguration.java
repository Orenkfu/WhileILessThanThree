package main.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import main.service.interfaces.UserService;

@Configuration
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

	UserService authService;

	@Autowired
	public void setAuth(UserService auth) {
		this.authService = auth;
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		// super.configure(http);
		// http.httpBasic().and().authorizeRequests().antMatchers("/index.html", "/",
		// "/home", "/login").permitAll()
		// .anyRequest().authenticated();
		http.authorizeRequests().anyRequest().permitAll().and().httpBasic().disable().csrf().disable();
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		// auth.userDetailsService(this.authService);
		// super.configure(auth);
	}

	@Override
	public void init(WebSecurity web) throws Exception {
		super.init(web);
	}

	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/scripts/**/*.{js}").antMatchers("/node_modules/**").antMatchers("/assets/**")
				.antMatchers("*.{ico}").antMatchers("/views/**/*.{html}").antMatchers("/app/**/*.{html}");

	}

}
