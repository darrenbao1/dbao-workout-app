"use client";
import styled from "styled-components";
import { css } from "styled-components";
const typography = css`
	text-align: center;
	font-size: 20px;
	font-weight: 600;
	line-height: 24px;
`;
const SignOutButtonWrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.primaryDefault};
	padding: 16px 24px;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.colors.primaryText};
	${typography}
`;
export const SignOutButton = () => {
	return (
		<SignOutButtonWrapper>
			<a href="/api/auth/signout">Sign Out</a>
		</SignOutButtonWrapper>
	);
};
