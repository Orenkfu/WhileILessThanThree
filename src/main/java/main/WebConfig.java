package main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import main.security.SessionManager;

@Configuration
@ComponentScan(basePackages = "main, main.resources, resources.static")
public class WebConfig implements WebMvcConfigurer {

	@Autowired
	SessionManager manager;

	// @Override
	// public void configureDefaultServletHandling(DefaultServletHandlerConfigurer
	// configurer)
	// {
	// WebMvcConfigurer.super.configureDefaultServletHandling(configurer);
	// configurer.enable();
	//
	// }
	//
	// @Override
	// public void addResourceHandlers(ResourceHandlerRegistry registry) {
	// WebMvcConfigurer.super.addResourceHandlers(registry);
	// registry.addResourceHandler("/static/**").addResourceLocations("/static/");
	// registry.addResourceHandler("resources/static/**").addResourceLocations("resources/static/");
	// }
	//
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		WebMvcConfigurer.super.addInterceptors(registry);
		registry.addInterceptor(manager).addPathPatterns("/**").excludePathPatterns("/users/login/**");

		// exclude login path
	}

}
