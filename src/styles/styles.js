import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { styled } from "styled-components";

export const Contact = styled.section`
  background-color: lightgrey;
  border-radius: 10px;
  color: black;
  position: fixed;
  right: 80px;
  top: 10px;
  width: 150px;
  height: 50px;
`;
export const GithubIcon = styled(AiFillGithub)`
  font-size: 43px;
  margin-bottom: 5px;
`;
export const LinkedinIcon = styled(AiFillLinkedin)`
  font-size: 50px;
`;
export const FacebookIcon = styled(AiFillFacebook)`
  font-size: 50px;
`;
export const Heading = styled.h2`
  margin: 20px;
`;
