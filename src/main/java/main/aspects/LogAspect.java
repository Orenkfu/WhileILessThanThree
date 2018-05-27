package main.aspects;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;

@Aspect
@Component
public class LogAspect {

	private final Log log = LogFactory.getLog(this.getClass());

	@Around("execution(*  main.service.implementations.ArticleServiceImpl.*(..))")
	public Object logTimeMethod(ProceedingJoinPoint joinPoint) throws Throwable {
		StopWatch watch = new StopWatch();
		watch.start();
		Object retVal = joinPoint.proceed();
		watch.stop();
		StringBuilder logMessage = new StringBuilder();
		logMessage.append(joinPoint.getTarget().getClass().getName());
		logMessage.append(".");
		logMessage.append((joinPoint.getSignature().getName()));
		logMessage.append("(");
		Object[] args = joinPoint.getArgs();
		for (int i = 0; i < args.length; i++) {
			logMessage.append(args[i]).append(",");
		}
		if (args.length > 0) {
			logMessage.deleteCharAt(logMessage.length() - 1);
		}
		logMessage.append(")");
		logMessage.append(" execution time: ");
		logMessage.append(watch.getTotalTimeMillis());
		logMessage.append(" ms");
		System.err.println("Aspect Info:");
		log.info(logMessage.toString());
		return retVal;
	}

	@Pointcut("execution(* main.service.implementations.ArticleServiceImpl.*(..))")
	private void selectAll() {
		System.out.println("hello");
	}

	@Before("selectAll()")
	public void beforeAdvice() {
		System.out.println("printing before advice");
	}

	@After("selectAll()")
	public void afterAdvice() {
		System.out.println("printing after advice");
	}

	@AfterReturning(pointcut = "selectAll()", returning = "retVal")
	public void afterReturningAdvice(Object retVal) {

		System.out.println("Object returned: " + retVal);
	}

	@AfterThrowing(pointcut = "selectAll()", throwing = "ex")
	public void AfterThrowingAdvice(Exception ex) {
		System.out.println("exception thrown: " + ex);
	}

}
