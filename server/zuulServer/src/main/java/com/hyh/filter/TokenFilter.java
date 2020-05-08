package com.hyh.filter;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.hyh.utility.JwtUtil;
import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;

public class TokenFilter extends ZuulFilter {

	private final Logger logger = LoggerFactory.getLogger(TokenFilter.class);

	@Override
	public String filterType() {
		return "pre";
	}

	@Override
	public int filterOrder() {
		return 0;
	}

	@Override
	public boolean shouldFilter() {
		return true;// is filter valid
	}

	@Override
	public Object run() {
		RequestContext ctx = RequestContext.getCurrentContext();
		HttpServletRequest request = ctx.getRequest();

		logger.info("--->>> TokenFilter {},{}", request.getMethod(), request.getRequestURL().toString());

		String token = request.getHeader("Authorization");

		if (StringUtils.isNotBlank(token)) {
			if (JwtUtil.checkToken(token)) {
				ctx.setSendZuulResponse(true);
				ctx.setResponseStatusCode(200);
				ctx.set("isSuccess", true);
				return null;
			} else {
				ctx.setSendZuulResponse(true);
				ctx.setResponseStatusCode(401);
				ctx.setResponseBody("token is invalid");
				ctx.set("isSuccess", false);
				return null;
			}
		} else {
			ctx.setSendZuulResponse(false);
			ctx.setResponseStatusCode(400);
			ctx.setResponseBody("token is empty");
			ctx.set("isSuccess", false);
			return null;
		}
	}
}