package main.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import main.traffic.TrafficManager;

@Component
public class SessionManager implements HandlerInterceptor {

	@Autowired
	TrafficManager traffic;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		System.err.println(request.getMethod());
		System.err.println(request.getRequestURI());
		// traffic.track(new Visitor(request.getRemoteAddr()));
		// Enumeration<String> headerNames = request.getHeaderNames();
		// while (headerNames.hasMoreElements()) {
		// String headerName = headerNames.nextElement();
		// System.out.println("key: " + headerName);
		// System.out.println("value: " + request.getHeader(headerName));
		return true;
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
