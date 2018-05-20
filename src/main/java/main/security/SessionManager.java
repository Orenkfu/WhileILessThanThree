package main.security;

import java.io.IOException;
import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

@Component
public class SessionManager implements HandlerInterceptor {
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		System.err.println("================ HI ===  hello interceptor === HI ====================");
		System.err.println(request.getMethod());
		System.err.println(request.getRequestURI());
		System.err.println(request.getRequestURL());
		// boolean permission = getPermission(xHeader);
		// if(permission) {
		// return true;
		// }
		// else {
		// response.setStatus(HttpStatus.UNAUTHORIZED.value());
		// return false;
		// Above code will send a 401 with no response body.
		// If you need a 401 view, do a redirect instead of
		// returning false.
		// response.sendRedirect("#/"); // assuming you have a handler mapping for 401
		// response.
		return true;
		//
		// }
		// return false;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {

	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {

	}
}
