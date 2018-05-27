package main.aspects;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class SystemTestLogger {
	@Around("@annotation(Syso)")
	public Object logExecutionTime(ProceedingJoinPoint joinPoint) throws Throwable {
		Object proceed = joinPoint.proceed();
		System.err.println("annotated aspect: " + joinPoint.getSignature() + " reached.");
		return proceed;
	}

}
