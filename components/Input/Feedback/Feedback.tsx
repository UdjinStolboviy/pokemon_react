import { FC } from "react";

import styled from "@emotion/styled";

type Props = {
  isValid?: boolean;
};

export const Feedback = styled.span<Props>``;

export const ConditionalFeedback: FC = ({ children }: any) =>
  children ? <Feedback>{children}</Feedback> : <>&nbsp;</>;
